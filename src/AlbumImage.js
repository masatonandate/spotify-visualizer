import React from 'react'

const AlbumImage = ({album}) => {
  return (
    <div className = "Image-Holder">
      <img key = {album.id} src = {album.album.images[0].url} className = "Album-Image" alt = "album"/>
      <div className = "Song-Details">
        <h4>{album.name}</h4>
        <p>{album.album.artists[0].name}</p>
      </div>
    </div>
  )
}

export default AlbumImage;