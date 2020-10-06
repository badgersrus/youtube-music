import { gql } from "apollo-boost";

export const ADD_OR_REMOVE_FROM_QUEUE = gql`
  mutation addOrRemoveFromQueue($input: SongInput!) {
    addOrRemoveFromQueue(input: $input) @client
  }
`;


export const DELETE_SONG = gql`
mutation deleteSong($id: uuid!) {
  delete_songs(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
`

// mutation toggleTodo($id: uuid!, $done: Boolean!) {
//   update_todos(where: { id: { _eq: $id } }, _set: { done: $done }) {
//     returning {
//       done
//       id
//       text
//     }
//   }
// }


export const ADD_SONG = gql`
  mutation addSong(
    $title: String!
    $artist: String!
    $thumbnail: String!
    $duration: Float!
    $url: String!
  ) {
    insert_songs(
      objects: {
        title: $title
        thumbnail: $thumbnail
        duration: $duration
        url: $url
        artist: $artist
      }
    ) {
      affected_rows
    }
  }
`;
