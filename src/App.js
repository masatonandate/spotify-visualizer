import React from "react"
import {useState, useEffect} from "react";
import { authEndpoint, clientId, scopes } from "./config";
import hash from "./hash";
import "./Styles/App.css";
import Visualizer from "./Components/Visualizer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Nutrition from "./Components/Nutrition"
// import Draggable from "react-draggable";

function App(){
  //all the states
  const [token, setToken] = useState(null)

  //if in local development go to localhost
  if(process.env.NODE_ENV === 'development'){
    var redirectUri = "http://localhost:3000/redirect/";
  }else{
    var redirectUri = "https://masatonandate.github.io/spotify-visualizer/"
  }
  console.log(process.env.NODE_ENV)
  console.log(redirectUri)
 
  //useEffect calls
  //useEffect to get token
  useEffect(() => {
    let _token = hash.access_token
    if(_token) {
      setToken(_token)
    }
  })
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
      </header>
    </div>
    <p className = "Main-Subcaption">Developed by <a href = "https://masatonandate.github.io/masato_website/index.html" target = "_blank" rel = "noopener noreferrer">Masato</a></p>
  </>
  )
}

export default App;