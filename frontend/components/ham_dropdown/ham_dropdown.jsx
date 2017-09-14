import React from 'react';
import { Link } from 'react-router-dom';

class HamDropdown extends React.Component {

  constructor(props) {
    super(props);
  }

  // componentWillReceiveProps() {
  //   if (this.props.location.pathname =="/" && !this.props.hamDropdown) {
  //     this.props.toggleHamDropdown;
  //   }
  // }

  render() {
    let channel;
    let like;
    let dislike;
    let hamSubs;

    if (this.props.currentUser) {
      channel = (
        <li>
          <Link id="channel-link" to={`/users/${this.props.currentUser.id}`} >
            <div id="channel-icon"></div> <p>My channel</p>
          </Link>
        </li>
      );

      like = (
        <li>
          <Link id="like-link" to="/likes" >
            <div id="like-link-icon"></div> <p>Liked Videos</p>
          </Link>
        </li>
      );

      dislike = (
        <li>
          <Link id="dislike-link" to="/dislikes" >
            <div id="dislike-link-icon"></div> <p>Disliked Videos</p>
          </Link>
        </li>
      );
    }

    let home;
    const path = this.props.location.pathname;

    if (this.props.hamDropdown && (
      path !== "/login" && path !== "/signup" )
    ) {
      if (this.props.location.pathname === "/") {
        home = (
          <li id="home-page-hover">
            <Link to="/">
              <div id="home-icon"></div>
              <p>Home</p>
            </Link>
          </li>
        );
      } else {
        home = (
          <li>
            <Link id="home-link" to="/">
              <div id="home-icon"></div>
              <p>Home</p>
            </Link>
          </li>
        );
      }

      return (
        <section className="ham-dropdown-menu">
          <ul className="ham-dropdown-list">
            { home }
            { channel }
            <li>
              <Link id="hot-link" to="/hot">
                <div id="hot-icon"></div>
                <p>Hot</p>
              </Link>
            </li>

            <li>
              <Link id="recent-link" to="/recent">
                <div id="recent-icon"></div>
                <p>Recently uploaded</p>
              </Link>
            </li>
            { like }
            { dislike }

          </ul>
          <ul className="ham-dropdown-subscriptions">

          </ul>

        </section>
      );
    } else {
      return (
        <section className="ham-dropdown-menu closed">
          <ul className="ham-dropdown-list">
            { home }
            { channel }
            <li>
              <Link id="hot-link" to="/hot">
                <div id="hot-icon"></div>
                <p>Hot</p>
              </Link>
            </li>

            <li>
              <Link id="recent-link" to="/recent">
                <div id="recent-icon"></div>
                <p>Recently uploaded</p>
              </Link>
            </li>
            { like }
            { dislike }

          </ul>
          <ul className="ham-dropdown-subscriptions">

          </ul>

        </section>
      );
    }
  }
}

export default HamDropdown;
