import axios from "axios"

import { binderApiEndpoint } from "../../settings/endpoints"
import { postsCountPerFetchInPostTab } from "../../settings/constants"

// eslint-disable-next-line
export const fetchPosts = (userId, postsCount) => (
  axios.get(`${binderApiEndpoint}/users/${userId}/posts`, {
    params: {
      offset: postsCount,
      count: postsCountPerFetchInPostTab,
    },
  }).then(res => res.data.posts)
)
