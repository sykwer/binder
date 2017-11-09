import axios from "axios"

import { binderApiEndpoint } from "../../settings/endpoints"
import { postsCountPerFetchInBookshelf } from "../../settings/constants"

// eslint-disable-next-line
export const fetchPosts = (userId, postsCount) => (
  axios.get(`${binderApiEndpoint}/users/${userId}/posts`, {
    params: {
      offset: postsCount,
      count: postsCountPerFetchInBookshelf,
    },
  }).then(res => res.data.posts)
)
