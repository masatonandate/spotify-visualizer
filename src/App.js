import React from "react"
import {useState, useEffect} from "react";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
import axios from 'axios'
import "./Styles/App.css";
import Visualizer from "./Components/Visualizer";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Nutrition from "./Components/Nutrition"
// import Draggable from "react-draggable";

function App(){
  //all the states
  const [token, setToken] = useState(null)
  // const [albums, setAlbums] = useState([])
  // const [me, setMe] = useState(null)
  // const [is_playing, setIs_playing] = useState("false")
  // const [progress_ms, setProgress_ms] = useState(0)
  // const [noData, setNoData] = useState(true)
  // const [item, setItem] = useState(
  //   {
  //     album: {
  //       images: [{ url: "" }],
  //       name: ""
  //     },
  //     name: "",
  //     artists: [{ name: "" }],
  //     duration_ms: 0
  //   }
  // )
  // const [colors, setColors] = useState(null)
  // const [newsong, setNewSong] = useState(null)
  // const [albumid, setAlbumid] = useState(null)
  // const [switcher, setSwitcher] = useState("One")
  // const [artistimage, setArtistimage] = useState(null)
  

  //useEffect calls
  //useEffect to get token
  useEffect(() => {
    let _token = hash.access_token
    if(_token) {
      setToken(_token)
    }
  })

  //useEffect to get top tracks
  // useEffect(() => 
  // {
  //   // console.log("inEffect")
  //   // console.log("token in access", token)
  //   if(token)
  //   {
  //     // console.log("in-branch")
  //     axios
  //     .get("https://api.spotify.com/v1/me/top/tracks", {
  //       params: {
  //         limit: 9,
  //         time_range: "medium_term"
  //       },
  //       headers: {
  //         "Authorization": `Bearer ${token}`
  //       }
  //     })
  //     .then(response => {
  //       // console.log("response happened", response.data)
  //       setAlbums(response.data.items)
  //       // console.log(albums)
  //     })
  //     .catch(error => {
  //       // console.log("getting player", error)
  //     })
  //   }
  // }, [token])
  
  //useEffect to get name of user
  // useEffect(() => 
  // {
  //   if(token)
  //   {
  //     // console.log("in-branch")
  //     axios
  //     .get("https://api.spotify.com/v1/me", {
  //       headers: {
  //         "Authorization": `Bearer ${token}`
  //       }
  //     })
  //     .then(response => {
  //       // console.log("response happened", response.data)
  //       setMe(response.data)
  //       // console.log(me)
  //     })
  //     .catch(error => {
  //       // console.log("getting player", error)
  //     })
  //   }
  // }, [token])

  //useEffect to get currently playing track
  // const getCurrentlyPlaying = async() => {
  //   if(token)
  //   {
  //     axios.get("https://api.spotify.com/v1/me/player", {
  //       headers: {
  //         "Authorization": `Bearer ${token}`
  //       }
  //     })
  //     .then(response => {
  //       console.log("response happened for player", response)
  //       if(response.data)
  //       {
  //         console.log("playerresponsedata",response.data)
  //         setItem(response.data.item)
  //         setIs_playing(response.data.is_playing)
  //         setProgress_ms(response.data.progress_ms)
  //         setAlbumid(response.data.item.artists[0].id)
  //         setNoData(false)
          
  //         if(response.data.item.name !== newsong)
  //         {
  //           setNewSong(response.data.item.name)
  //         }
  //       }
  //     }
  //     )
  //   }
  // }

  // useEffect(() => {
  //   getCurrentlyPlaying()
  //   const interval = setInterval(getCurrentlyPlaying, 1000)
  //   return() => clearInterval(interval)
  // }, [token])

  //how to get color
  // useEffect(() => {
  //   let APIKEY = process.env.REACT_APP_NEXT_PUBLIC_RAPIDAPI_KEY;
  //   // const data = {
  //   //   model: "default"
  //   // }
  //   axios.get("https://random-palette-generator.p.rapidapi.com/palette/Complementary/1/3", {
  //     headers: {
  //       'X-RapidAPI-Key': `${APIKEY}`,
  //       'X-RapidAPI-Host': 'random-palette-generator.p.rapidapi.com'
  //     }
  //   }
  //   )
  //   // axios.post("http://colormind.io/api/", {body: JSON.stringify(data)})
  //   .then(response => {
  //     setColors(response.data.data)
  //   })
  // }, [newsong])

// get artist information
  // useEffect(() => {
  //   if(albumid !== null)
  //   {
  //     axios.get(`https://api.spotify.com/v1/artists/${albumid}`, {
  //       headers: {
  //         "Authorization": `Bearer ${token}`
  //       }
  //     }
  //     )
  //     .then(response => {
  //       console.log("artist data", response.data)
  //       setArtistimage(response.data.images)
  //     })
  //   }
  // }, [albumid])

  return (
    <>
    <div className="App">
      <header className="App-header">
        {!token && (
          <>
            <div className = "Main-Title">
              <h1 class = "Main-Title-Name">Spotify Visualizer</h1>
            </div>
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          </>
        )}
        {token && (
          <>
            {/* <Visualizer token = {token}/> */}
            <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path = "/redirect" element = {<Visualizer token = {token}/>}/>
                <Route path = "/Nutrition" element = {<Nutrition token = {token}/>}/>
              </Routes>
            </BrowserRouter>
          </>
        )

        }
        {/* {token && !noData && colors && artistimage &&(
          <>
          {/* <h1>Top Played Songs in the Last 4 Weeks</h1> */}
          {/* <div className = "Shelf-Container">
            <img className = "woodenShelfone" src = {WoodenShelf} alt = "shelf"/>
            {/* <img className = "woodenShelftwo" src = {WoodenShelf} alt = "shelf"/>
            <img className = "woodenShelfthree" src = {WoodenShelf} alt = "shelf"/>}
          </div> */}
          {/* <img className = "woodenShelfone" src = {WoodenShelf} alt = "shelf"/> */}
          {/* <h1>Songs Stuck in {me.display_name}'s Ear</h1>
          <div className = "Album-Grid">
            {albums.map(album => 
              {
                return (
                  <AlbumImage album = {album}/>
                )
              }
            )
            }
          </div> */}
          {/*</header><select name = "visualizer" id = "visualize" onChange={(event) => setSwitcher(event.target.value)}>
            <option value = "Record">Record</option>
            <option value = "CD">CD</option>
          </select>
          {(switcher === "Record") &&(
            <Recordvisualizer item = {item} playing = {is_playing} color = {colors} progress = {progress_ms / item.duration_ms}/>
          )}
          {(switcher === "CD") && (
            <Diskvisualizer item = {item} playing = {is_playing} color = {colors} progress = {progress_ms / item.duration_ms} image = {artistimage[0].url}/>
          )}

          </>
        )}
        {noData && token &&(
          <p>
            You need to be playing a song on Spotify, for something to appear here.
          </p>
        )} */}
      </header>
    </div>
    <p className = "Main-Subcaption">Developed by <a href = "https://masatonandate.github.io/masato_website/index.html" target = "_blank" rel = "noopener noreferrer">Masato</a></p>
  </>
  )
}

export default App;