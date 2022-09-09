import React from 'react'

const AlbumImage = ({album}) => {
  return (
    <div className = "Image-Holder">
      <a href = {album.external_urls.spotify} target = "_blank" rel = "noopener noreferrer">
        <img key = {album.id} src = {album.album.images[0].url} className = "Album-Image" alt = "album"/>
        <div className = "Song-Details">
          <h4>{album.name}</h4>
          <p>{album.album.artists[0].name}</p>
        </div>
      </a>
    </div>
  )
}

export default AlbumImage;