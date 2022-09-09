import React from 'react';
import "../Styles/diskvisualizer.css";
import spikydisk from "../Images/innerdisk.png";
const Diskvisualizer = ({item, playing, color, progress, image}) => {
  let visualizationClass = playing === true ? "album-cover-animated" : "album-cover-stagnant";
  let colortwo = (color[0].palette[0] !== color[0].palette[1] && color[0].palette[1] !== color[0].palette[2]) ? color[0].palette[1] : "white";
  let colorthree = (color[0].palette[1] !== color[0].palette[2] && color[0].palette[2] !== color[0].palette[0]) ? color[0].palette[2] : "black";
  // console.log("one", color[0].palette[0])
  // console.log("two", colortwo)
  // console.log("three", colorthree)

  document.body.style.backgroundImage = `linear-gradient(-45deg, ${color[0].palette[0]}, ${color[0].palette[1]})`;
  // const[position, setPositon] = useState({x:0,y:0})
  // const trackPos = (data) => {
  //   setPositon({x: data.x, y: data.y})
  //   console.log(position)
  // }

  const progressBarStyle = {
    width: (progress * 100) + '%',
    backgroundColor: colortwo
  }

  const gradientStyle = {
    backgroundImage:`linear-gradient(45deg, ${color[0].palette[0]}, ${color[0].palette[1]})`
  }



  return (
    <>
    <div className = "holder">
      <div className = "cube">
        <div className = "cube_side" style = {{backgroundColor: color[0].palette[0]}}>
          <div className = "side-strip"></div>
          <img className = "album-image" src = {item.album.images[0].url}/>
          <div className = "inner-circle"></div>
          <div className = "second-inner-circle"></div>
          <img className = "spiky-disk" src = {spikydisk}/>
          <div className = "front-sticker" style = {{backgroundColor: colortwo}}></div>
        </div>
        <div className = "cube_side" style = {{backgroundColor: color[0].palette[0], color:colortwo}}>
          {/* <div class = "side-strip"></div> */}
          <div className = "text-cont">
            <img className = "artist-image" src = {image} alt = "artist"/>
            <h1 className = "artist">{item.artists[0].name}</h1>
            <h2 className = "album">{item.name}</h2>
            <div className = "back-sticker" style = {{backgroundColor: colortwo}}></div>
          </div>
        </div>
        <div className = "cube_side"></div>
        <div className = "cube_side">
          <div className='side-sticker' style = {{backgroundColor: colortwo}}></div>
        </div>
        <div className = "cube_side"></div>
        <div className = "cube_side"></div>
      </div>
    </div>
    <div className = "progress">
      <div className='progress-bar' style = {progressBarStyle}></div>
    </div>
    
    </>

    )
}

export default Diskvisualizer;