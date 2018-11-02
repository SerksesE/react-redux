import { SET_PHOTOS } from '../actions/setPhotos'

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_PHOTOS:
    return action.payload.map(photo => ({...photo}))
    default:
      return state
  }
}