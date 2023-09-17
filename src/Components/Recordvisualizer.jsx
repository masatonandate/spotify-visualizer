import React from 'react';
const Recordvisualizer = ({item, playing, color, progress}) => {
  let visualizationClass = playing === true ? "album-cover-animated" : "album-cover-stagnant";
  let colortwo = (color[0] !== color[1] && color[0] !== color[2]) ? color[1] : "white";
  let colorthree = (color[0] !== color[1] && color[0] !== color[2]) ? color[2] : "black";

  document.body.style.backgroundImage = `linear-gradient(-45deg, ${color[0]}, ${color[0]})`;


  let progvalue = (progress) * (-22) + 16



  return (
    <>
      <div className = "name-and-artist" style = {{color: `#${color[0]}`}}>
          <h1>{item.name}</h1>
          <h3>{item.artists[0].name}</h3>
      </div>
      <div className = "record-player">
        <div className = "rectangle" style = {{background: `#${color[0]}`}}>
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
        <div className = "volume-slider" style = {{background: `#${colortwo}`, transform: `translate(25vmin,${progvalue}vmin)`}}>
        </div>
        <div className = "pin-base" style = {{background: `#${colortwo}`}}>
        </div>
        <div className = "pin-hand-one">
        </div>
        <div className = "pin-hand-two">
        </div>
        <div className = "pin-needle" style = {{background: `#${colortwo}`}}>
        </div>
      </div>

    </>

    )
}

export default Recordvisualizer;