const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const port = 3001
require('dotenv').config()

const mainCtrl = require('./controllers/mainCtrl.js')

const app = express()

app.use(json())
app.use(cors())


app.use( session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true, 
  cookie: { maxAge: 600000 }
}));

app.use( passport.initialize() );
app.use( passport.session() );

passport.use( new Auth0Strategy({
  domain:       process.env.DOMAIN,
  clientID:     process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL:  process.env.CALLBACK
 },
 function(accessToken, refreshToken, extraParams, profile, done) {
   console.log("profile",profile);
   
   // accessToken is the token to call Auth0 API (not needed in the most cases)
   // extraParams.id_token has the JSON Web Token
   // profile has all the information from the user
   return done(null, profile);
 }
) );

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
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
  req.session.destroy()
  res.redirect('http://localhost:3000');
})

// app.get('/me', ( req, res, next) => {
//   if ( !req.user ) {
//     res.redirect('/api/login');
//   } else {
//     // req.user === req.session.passport.user
//     // console.log( req.user )
//     // console.log( req.session.passport.user );
//     res.status(200).send( JSON.stringify( req.user, null, 10 ) );
//   }
// });

// app.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });

// app.get('/me', (req, res) => {
//   if (!req.user)
//   return res.status(404).send('user not found');
// return res.status(200).send(req.user, "success");
// });





// app.get('/', (req, res) => {
//   res.send(process.env.PORT)
// })

app.get('/api/parks/:id', mainCtrl.getParkByState)
app.get('/api/alerts/:code', mainCtrl.getAlerts)


app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
