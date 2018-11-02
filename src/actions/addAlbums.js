export const ADD_ALBUM = 'ADD_ALBUM'

export function addAlbums (id, title) {
  return {
    type: 'ADD_ALBUM',
    payload: {
      id: id,
      title: title
    }
  }
}