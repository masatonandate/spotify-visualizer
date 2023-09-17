import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import "../Styles/nutrition.css"


const Nutrition = ({token}) => {
  const [artists, setArtists] = useState(null)
  const [me, setMe] = useState(null)
  const [color, setColor] = useState(null)
  //useEffect to get top tracks/genres
  useEffect(() => 
  {
    // console.log("inEffect")
    // console.log("token in access", token)
    if(token)
    {
      // console.log("in-branch")
      axios
      .get("https://api.spotify.com/v1/me/top/artists", {
        params: {
          limit: 25,
          time_range: "short_term"
        },
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(response => {
        // console.log("response happened", response.data)
        setArtists(response.data.items)
        // console.log(artists)
      })
      .catch(error => {
        // console.log("getting player", error)
      })
    }
  }, [token])

  //useEffect to get name of user
  useEffect(() => 
  {
    if(token)
    {
      // console.log("in-branch")
      axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(response => {
        // console.log("response happened", response.data)
        setMe(response.data)
        // console.log(me)
      })
      .catch(error => {
        // console.log("getting player", error)
      })
    }
  }, [token])

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
  //     setColor(response.data.data)
  //   })
  // }, [])



  let genreMap = new Map();
  const artistarray = [];
  const today = new Date();

  if(artists !== null){
    for(let i = 0; i < artists.length; i++){
      artistarray.push(artists[i].name)
      for(let j = 0; j < artists[i].genres.length; j++){
        if(genreMap.has(artists[i].genres[j])){
          genreMap.set(artists[i].genres[j], (genreMap.get(artists[i].genres[j]) + 1))
        }
        else{
          genreMap.set(artists[i].genres[j], 1)
        }
      }
    } 
  }

  const genreArray = []
  if(genreMap){
    for(const[key,value] of genreMap){
      console.log(key,value);
      genreArray.push([key, (value / genreMap.size).toFixed(2)])
    }
    genreArray.sort((a, b) => b[1] - a[1])
  }

  // console.log('sortedgenre', genreArray)

  if(color){
    document.body.style.backgroundImage = `linear-gradient(-45deg, ${color[0].palette[0]}, ${color[0].palette[1]})`;
  }

  if(artists && genreArray && me){
    return(
      <div class = "nutrition-main">
        <div class = "label">
          <h2 class = "main-title">Nutrition Facts</h2>
          <h4 class = "serving">Serving size 1 month (4weeks/28Days)</h4>
          <h5 class = "amount">Amount per serving</h5>
          <h1 class = "genre">GENRES</h1>
          <p class = "monthly-percent"><strong>% Monthly Value*</strong></p>
          <table class = "tableone">
            <tbody>
              {
                genreArray.slice(0,10).map((genre, index)=>{
                  return(
                    <tr key = {index}>
                      <td class = "genre-title">{genre[0]}</td>
                      <td class = "percent"><strong>{Math.round(genre[1] * 100)}%</strong></td>
                    </tr>
                  )
                })

              }
            </tbody>
          </table>
          <table class = "tabletwo">
            <tbody>
              <tr>
                <td class = "tabletwofirstone">Created By</td>
                <td class = "tabletwofirsttwo"><strong>{me.display_name}</strong></td>
              </tr>
              <tr>
                <td>Month</td>
                <td class = "two-right"><strong>{today.getMonth() + 1}</strong></td>
              </tr>
              <tr>
                <td>Date</td>
                <td class = "two-right"><strong>{today.getDate()}</strong></td>
              </tr>
              <tr>
                <td>Year</td>
                <td class = "two-right"><strong>{today.getFullYear()}</strong></td>
              </tr>
            </tbody>
          </table>
          <p class = "description">* the % Monthly Value (MV) tells you the percent of genre of the top 50 artists you listened to in the last month, and many songs tend to have multiple genres</p>
          <p class = "ingredients"><strong>INGREDIENTS:</strong>{artistarray.slice(0, 23).map(artist => `${artist}, `)}{artistarray[24]}</p>
        </div>
      </div>
    )
  }




}

export default Nutrition;