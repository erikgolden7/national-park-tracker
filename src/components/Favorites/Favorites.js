import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import IconButton from "material-ui/IconButton";
import Delete from "material-ui/svg-icons/action/delete-forever";
import "./favorites.css";
import canyon from "../../assets/parks/canyonland.jpg";
import banners from "./banners";

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: [],
      expanded: false
    };
  }

  componentDidMount() {
    if (!this.props.isAuthed) {
      window.location.href = process.env.REACT_APP_LOGIN;
    }
    axios.get(`/api/favorite/${this.props.user.auth_id}`).then(res => {
      this.setState({ favorite: res.data });
    });
  }

  removeFavorite(parkCode) {
    axios
      .delete(
        `/api/removeFavorite?id=${this.props.user.auth_id}&parkCode=${parkCode}`
      )
      .then(res => {
        axios.get(`/api/favorite/${this.props.user.auth_id}`).then(res => {
          this.setState({ favorite: res.data });
        });
      });
  }

  render() {
    const styles = {
      smallIcon: {
        width: 30,
        height: 30
      },
      small: {
        width: 60,
        height: 60
      }
    };

    const favorite = this.state.favorite.map((e, i) => {
      return (
        // <div key={i} className="fav-card">
        //   <div className="card-header">
        //     {e.park_name}
        //     <div
        //       className="delete"
        //       onClick={() => this.removeFavorite(e.park_code)}
        //     />
        //   </div>
        //   <div className="fav-info">{e.description}</div>
        //   <div className="fav-info">Coordinates: {e.coordinates}</div>
        //   <div className="fav-info">States: {e.states}</div>
        //   <a
        //     className="fav-info"
        //     style={{ color: "black" }}
        //     target="_blank"
        //     href={e.url}
        //   >
        //     {e.url}
        //   </a>
        // </div>

        <Card
          style={{
            width: "48%",
            margin: " 10px auto",
            border: "solid black 0.5px"
          }}
        >
          <CardTitle
            title={e.park_name}
            subtitle={e.states}
            style={{ padding: "16px 16px 6px 16px" }}
          />
          <CardMedia style={{ margin: 16, border: "solid gray 0.5px" }}>
            <img src={banners[e.park_code]} alt="" />
          </CardMedia>
          <CardText style={{ padding: "0px 16px 16px 16px" }}>
            {e.description}
          </CardText>
          {e.coordinates ? (
            <CardText style={{ padding: 2 }}>{e.coordinates}</CardText>
          ) : (
            <CardText style={{ padding: 2 }}>
              No Coordinates Available...
            </CardText>
          )}

          <CardText style={{ padding: 2 }}>
            <a
              className="fav-info"
              style={{ color: "black" }}
              target="_blank"
              href={e.url}
            >
              {e.url}
            </a>
          </CardText>

          <CardActions>
            <IconButton
              iconStyle={styles.smallIcon}
              style={styles.small}
              onClick={() => this.removeFavorite(e.park_code)}
            >
              <Delete />
            </IconButton>
          </CardActions>
        </Card>
      );
    });

    return <div className="cards">{favorite}</div>;
  }
}

export default Favorites;
