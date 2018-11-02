import * as React from 'react'
import * as request from 'superagent'
import AlbumList from './AlbumsList'
import { connect } from 'react-redux';
import { setAlbums } from '../actions/setAlbums'

const sleep = time => new Promise(
  resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
)

class AlbumListContainer extends React.Component {

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.props.setAlbums(response.body))
      // .then(response => this.setState({ albums: response.body }))
      .catch(console.error)

    // sleep(2000)
    // .then(message => this.props.addAlbum(1, `This took me 3 hours and now  ${message}`))
    
    // sleep(3000)
    // .then(message => this.props.addAlbum(2, `It's lunch time and ${message}`))

    // sleep(2000)
    // .then(message => this.props.setAlbums([
    //   {
    //     id: 1,
    //     title: message
    //   },
    //   {
    //     id: 2,
    //     title: 'This is the second album'
    //   },
    //   {
    //     id: 3,
    //     title: 'The last album'
    //   }
    // ]))

    // this.props.addAlbum(5, 'Enjoying sunshine')
    // this.props.addAlbum(10, 'Having fun in the US')
  }

  render() {
    if (!this.props.albums) return 'Loading...'
    return <AlbumList albums={this.props.albums} />
  }
}

//replace state with props because the state is store in the redux file albums.js
const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps, { setAlbums })(AlbumListContainer)