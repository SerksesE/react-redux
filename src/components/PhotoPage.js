import * as React from 'react'
import { Link } from 'react-router-dom'

export default function PhotoPage(props) {
  return (
    <div>
      <h1>Photos in this album</h1>

      <Link to="/">Go back to the albumlist</Link>

      <div>
        {props.photos.map(img => <img src={img.thumbnailUrl} alt="Photos" />)}
      </div>

    </div>
  )
}