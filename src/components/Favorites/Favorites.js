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
import swal from "sweetalert2";
import "./favorites.css";
import banners from "../banners";

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
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        axios
          .delete(
            `/api/removeFavorite?id=${
              this.props.user.auth_id
            }&parkCode=${parkCode}`
          )
          .then(res => {
            axios.get(`/api/favorite/${this.props.user.auth_id}`).then(res => {
              this.setState({ favorite: res.data });
            });
          });
        swal("Deleted!", "Successfully removed from favorites.", "success");
      }
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
        <Card
          key={i}
          style={{
            width: "32.3%",
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
