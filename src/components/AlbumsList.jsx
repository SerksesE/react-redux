import * as React from 'react'
import { Link } from 'react-router-dom'

export default function AlbumsList(props) {
  return (
    <div>
      <h1>All Albums</h1>
      There are {props.albums.length} albums available
      <ul> 
        {/* first checks the state (data) if true look for more true (&&) 
        map it as listitems, the API gives an array of objects with properties key and title*/}
        {props.albums && props.albums.map(album => <li key={album.id}><Link to={`/albums/${album.id}`}>{album.title}</Link></li>)}
        {!props.albums && 'Loading...'}
      </ul>

    </div>
  )
}
