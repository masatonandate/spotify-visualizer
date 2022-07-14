import React from 'react'
const Visualizer = ({item, image}) => {
  return (
    <div className = "visualizer">
      <img src={item.album.images[0].url} className="App-logo" alt="logo" />
      <img src = {image} className = "record-player" alt = "record player"/>
    </div>
  )
}

export default Visualizer;