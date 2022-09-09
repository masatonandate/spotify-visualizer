import React from 'react'
import Diskvisualizer from './Diskvisualizer'
import Recordvisualizer from './Recordvisualizer'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Visualizer = ({token}) => {
  const [is_playing, setIs_playing] = useState("false")
  const [progress_ms, setProgress_ms] = useState(0)
  const [noData, setNoData] = useState(true)
  const [item, setItem] = useState(
    {
      album: {
        images: [{ url: "" }],
        name: ""
      },
      name: "",
      artists: [{ name: "" }],
      duration_ms: 0
    }
  )
  const [colors, setColors] = useState(null)
  const [newsong, setNewSong] = useState(null)
  const [albumid, setAlbumid] = useState(null)
  const [switcher, setSwitcher] = useState("Record")
  const [artistimage, setArtistimage] = useState(null)

  const getCurrentlyPlaying = async() => {
    if(token)
    {
      axios.get("https://api.spotify.com/v1/me/player", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(response => {
        console.log("response happened for player", response)
        if(response.data)
        {
          console.log("playerresponsedata",response.data)
          setItem(response.data.item)
          setIs_playing(response.data.is_playing)
          setProgress_ms(response.data.progress_ms)
          setAlbumid(response.data.item.artists[0].id)
          setNoData(false)
          
          if(response.data.item.name !== newsong)
          {
            setNewSong(response.data.item.name)
          }
        }
      }
      )
    }
  }

  useEffect(() => {
    getCurrentlyPlaying()
    const interval = setInterval(getCurrentlyPlaying, 1000)
    return() => clearInterval(interval)
  }, [token])

  //how to get color
  useEffect(() => {
    let APIKEY = process.env.REACT_APP_NEXT_PUBLIC_RAPIDAPI_KEY;
    // const data = {
    //   model: "default"
    // }
    axios.get("https://random-palette-generator.p.rapidapi.com/palette/Complementary/1/3", {
      headers: {
        'X-RapidAPI-Key': `${APIKEY}`,
        'X-RapidAPI-Host': 'random-palette-generator.p.rapidapi.com'
      }
    }
    )
    // axios.post("http://colormind.io/api/", {body: JSON.stringify(data)})
    .then(response => {
      setColors(response.data.data)
    })
  }, [newsong])

// get artist information
  useEffect(() => {
    if(albumid !== null)
    {
      axios.get(`https://api.spotify.com/v1/artists/${albumid}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
      )
      .then(response => {
        console.log("artist data", response.data)
        setArtistimage(response.data.images)
      })
    }
  }, [albumid])

  if(token && !noData && colors && artistimage){
    return (
      <>
      <select name = "visualizer" id = "visualize" onChange={(event) => setSwitcher(event.target.value)}>
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

    )
  }
  else {
    return (
      <p>
      You need to be playing a song on Spotify, for something to appear here.
      </p>
    )
  }



}

export default Visualizer;