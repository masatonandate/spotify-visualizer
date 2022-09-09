import React from 'react';
import Draggable from 'react-draggable';
import {useState, useEffect} from 'react';
const Recordvisualizer = ({item, playing, color, progress}) => {
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

  let progvalue = (progress) * (-22) + 16



  return (
    <>
    {/* <div className = "visualizer">
     <img src={item.album.images[0].url} className={visualizationClass} alt="album" />
      <img src = {image} className = "record-player" alt = "record player"/>
     </div> */}
      <div className = "name-and-artist" style = {{color: colorthree}}>
          <h1>{item.name}</h1>
          <h3>{item.artists[0].name}</h3>
      </div>
      <div className = "record-player">
        <div className = "rectangle" style = {{background: color[0].palette[0]}}>
        </div>
        <img className = {visualizationClass} src = {item.album.images[0].url} alt = "album"/>
        <div className = "disk">
        </div>
        <div className = "inner-disk-one" style = {{opacity: "80%"}}>
        </div>
        <div className = "inner-disk-two">
        </div>
        <div className = "volume-bar">
        </div>
        {/* <Draggable axis = "y" bounds = {{bottom: 101, top: -51}} onDrag = {(e,data) => trackPos(data)}>
          <div className='box'>
            <div className = "volume-slider" style = {{background: color[0].palette[1]}}>
            </div>
          </div>
        </Draggable> */}
        <div className = "volume-slider" style = {{background: colortwo, transform: `translate(25vmin,${progvalue}vmin)`}}>
        </div>
        <div className = "pin-base" style = {{background: colortwo}}>
        </div>
        <div className = "pin-hand-one">
        </div>
        <div className = "pin-hand-two">
        </div>
        <div className = "pin-needle" style = {{background: colortwo}}>
        </div>
      </div>

    </>

    )
}

export default Recordvisualizer;