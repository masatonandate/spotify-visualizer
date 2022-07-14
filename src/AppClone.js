import React from "react"
import {useState, useEffect} from "react";
// import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
// import Player from "./Player";
// import Visualizer from "./Visualizer";
// import logo from "./logo.svg";
// import recordplayer from "./FullVinyl6.png"
import axios from 'axios'
import AlbumImage from "./AlbumImage";
import WoodenShelf from "./shelf2.png"
import "./App.css";

const AppClone = () => {
  //all the states
  const [token, setToken] = useState(null)
  const [albums, setAlbums] = useState([])
  // const [is_playing, setIs_playing] = useState("Paused")
  // const [progress_ms, setProgress_ms] = useState(0)
  // const [noData, setNoData] = useState(false)

  //useEffect calls
  useEffect(() => {
    let _token = hash.access_token
    if(_token) {
      setToken(_token)
      console.log("token", token)
    }
  })

  useEffect(() => 
  {
    console.log("inEffect")
    console.log("token in access", token)
    if(token)
    {
      console.log("in-branch")
      axios
      .get("https://api.spotify.com/v1/me/top/tracks", {
        params: {
          limit: 9,
          time_range: "short_term"
        },
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(response => {
        console.log("response happened", response.data)
        setAlbums(response.data.items)
        console.log(albums)
      })
      .catch(error => {
        console.log("getting player", error)
      })
    }
  }, [token])


  return (
    <>
    <div className="App">
      <header className="App-header">
        {!token && (
          <a
            className="btn btn--loginApp-link"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
          </a>
        )}
        {token && albums &&(
          <>
          {/* <h1>Top Played Songs in the Last 4 Weeks</h1> */}
          {/* <div className = "Shelf-Container">
            <img className = "woodenShelfone" src = {WoodenShelf} alt = "shelf"/>
            {/* <img className = "woodenShelftwo" src = {WoodenShelf} alt = "shelf"/>
            <img className = "woodenShelfthree" src = {WoodenShelf} alt = "shelf"/>}
          </div> */}
          {/* <img className = "woodenShelfone" src = {WoodenShelf} alt = "shelf"/> */}
          <div className = "Album-Grid">
            {albums.map(album => 
              {
                console.log(album)
                return (
                  <AlbumImage album = {album}/>
                )
              }
            )
            }
          </div>

          </>
        )}
        {/* {this.state.no_data && (
          <p>
            You need to be playing a song on Spotify, for something to appear here.
          </p>
        )} */}
      </header>
    </div>
  </>
  )
}

export default AppClone;