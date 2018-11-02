export const SET_PHOTOS = 'SET_PHOTOS'

export function setPhotos(photos) {
  return {
    type: 'SET_PHOTOS',
    payload: photos
  }
}