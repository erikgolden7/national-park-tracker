const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive')
const port = 3001
require('dotenv').config()

const mainCtrl = require('./controllers/mainCtrl.js')

const app = express()

app.use(json())
app.use(cors())
app.use(express.static(__dirname + '/../build'));

// ==========
// MASSIVE DB
// ==========
massive(process.env.CONNECTION_STRING).then( db => {
  app.set('db', db);
})

// ========================
// SESSION / AUTHENTICATION
// ========================
app.use( session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false, 
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

app.use( passport.initialize() );
app.use( passport.session() );

passport.use( new Auth0Strategy({
  domain:       process.env.DOMAIN,
  clientID:     process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL:  process.env.CALLBACK,
  scope: "openid email profile name picture"
 },
 function(accessToken, refreshToken, extraParams, profile, done) {
   const db = app.get('db');
   db.find_user([ profile._json.sub ])
   .then( user => {
    if ( user[0] ) {
      return done( null, { clientID: user[0].id, email: user[0].email, name: user[0].full_name, img: user[0].img });
    } 
    else {
      db.create_user([profile.displayName, profile.emails[0], profile.picture, profile.user_id])
      .then(user => done(null, {clientID: user[0].id, email: user[0].email, name: user[0].full_name, img: user[0].img}))
    }
   })
 }
) );

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  app.get('db').find_session_user([user.clientID])
  .then( user => {
    return done(null, user);
  })
});

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000',
  failureRedirect: 'http://localhost:3000'
}))

app.get('/auth/me', (req, res, next) => {
  if (!req.user) {
    return res.status(401).send('Log in required');
  } else {
    return res.status(200).send(req.user);
  }
})

app.get('/auth/logout', (req, res) => {
  req.logOut();
  res.redirect('http://localhost:3000');
})

// =========
// ENDPOINTS
// =========
app.get('/api/parks/:id', mainCtrl.getParkByState)
app.get('/api/alerts/:code', mainCtrl.getAlerts)


app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
