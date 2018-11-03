import * as React from 'react'
import PhotoPage from './PhotoPage'
import { connect } from 'react-redux';
import { getPhotos } from '../actions/getPhotos'
// import { request } from 'superagent';

class PhotoPageContainer extends React.Component {
  componentDidMount() {
    const albumId = this.props.match.params.id

    console.log(`Now fetch photos for albumId = ${albumId}`)
    
    this.props.getPhotos(albumId)
  }

  render() {
    if (!this.props.photos) return 'Loading...'
    return <PhotoPage photos={this.props.photos} />
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos
})

export default connect(mapStateToProps, { getPhotos })(PhotoPageContainer)