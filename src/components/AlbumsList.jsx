import * as React from 'react'

export default function AlbumList(props) {
  return (
    <div>
      <h1>All Albums</h1>
      There are {props.albums.length} albums available

      {!props.albums && 'Loading...'}

      <ul> 
        {/* first checks the state (data) if true look for more true (&&) 
        map it as listitems, the API gives an array of objects with properties key and title*/}
        {props.albums && props.albums.map(album => <li key={album.id}>{album.title}</li>)}
      </ul>

    </div>
  )
}
