import * as request from "superagent";
import { setAlbums } from "./setAlbums";

export const GET_ALBUMS = 'GET_ALBUMS'

export function getAlbums () {
  return function(dispatch) {
    request('https://jsonplaceholder.typicode.com/albums')
    .then(response => {
      dispatch(setAlbums(response.body))
    })
  }
}