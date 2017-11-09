import axios from "axios"

import { binderApiEndpoint } from "../../settings/endpoints"

// eslint-disable-next-line
export const fetchPosts = (userId, postsCount) => (
  axios.get(`${binderApiEndpoint}/users/${userId}/posts`, {
    params: {
      offset: postsCount,
      count: 10,
    },
  }).then(res => res.data.posts)
)
