import axios from "axios"

import { binderApiEndpoint } from "../../settings/endpoints"

// eslint-disable-next-line
export const requestDeletePosts = postUuids => (
  axios.delete(`${binderApiEndpoint}/multiple_posts`, {
    params: {
      post_uuids: postUuids,
    },
  }).then(res => res.status === 200)
)
