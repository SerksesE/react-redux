import * as request from "superagent";
import { setPhotos } from "./setPhotos";

export const GET_PHOTOS = 'GET_PHOTOS'

export function getPhotos (albumId) {
  return function(dispatch) {
    request(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
    .then(response => {
      dispatch(setPhotos(response.body))
    })
  }
}