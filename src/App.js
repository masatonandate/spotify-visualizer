import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
// import Player from "./Player";
import Visualizer from "./Visualizer";
// import logo from "./logo.svg";
import recordplayer from "./FullVinyl6.png"
// import {useState, useEffect} from 'react'
// import axios from 'axios'
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0
      },
      is_playing: "Paused",
      progress_ms: 0,
      no_data: false,
    };

    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.tick = this.tick.bind(this);
  }


  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      console.log("token", _token)
      this.setState({
        token: _token
      });
      this.getCurrentlyPlaying(_token);
    }

    // set interval for polling every 5 seconds
    this.interval = setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    // clear the interval to save resources
    clearInterval(this.interval);
  }

  tick() {
    if(this.state.token) {
      this.getCurrentlyPlaying(this.state.token);
    }
  }


  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        // Checks if the data is not empty
        if(!data) {
          this.setState({
            no_data: true,
          });
          return;
        }

        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
          no_data: false /* We need to "reset" the boolean, in case the
                            user does not give F5 and has opened his Spotify. */
        });
      }
    });
  }
  // const [albums, setAlbums] = useState([])

  // useEffect((token) => {
  //   axios
  //   .get("https://api.spotify.com/v1/me/player", {
  //     headers: {
  //       "Authorization": "Bearer " + token
  //   }
  //   }
  //   .then(response => {
  //     console.log(response.data)
  //   })

  //   )
  // }, [])

  // From here is gonna be just my code

  render() {
    // const backgroundStyle = {
    //   background: !this.state.no_data ? `url(${this.state.item.album.images[0].url})` : "white",
    //   filter: `blur(8px)`
    // }
    // console.log(backgroundStyle)
    // const backgroundString = !this.state.no_data ? `url(${this.state.item.album.images[0].url})` : "white"
    // console.log(backgroundString)
    // console.log(this.state.progress_ms / 1000)
    // console.log(this.state.item.duration_ms)
    return (
      <>
        <div className="App">
          <header className="App-header">
            {!this.state.token && (
              <a
                className="btn btn--loginApp-link"
                href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                  "%20"
                )}&response_type=token&show_dialog=true`}
              >
                Login to Spotify
              </a>
            )}
            {this.state.token && !this.state.no_data && (
              <>
              {/* <div>
                <img src = {this.state.item.album.images[0].url} className = "wall-paper" alt = "wallpaper"/>
              </div> */}
              {/* <div className = "visualizer">
                <img src={this.state.item.album.images[0].url} className="App-logo" alt="logo" />
                <img src = {recordplayer} className = "record-player" alt = "record player image"/>
              </div> */}
              <Visualizer item = {this.state.item} image = {recordplayer}/>
              </>
            )}
            {this.state.no_data && (
              <p>
                You need to be playing a song on Spotify, for something to appear here.
              </p>
            )}
          </header>
        </div>
      </>
    );
  }
}

export default App;
