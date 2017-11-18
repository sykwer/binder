import axios from "axios"

import { binderApiEndpoint } from "../../settings/endpoints"
import { postsCountPerFetchInPostTab } from "../../settings/constants"

export const fetchPosts = (userId, postsCount) => (
  axios.get(`${binderApiEndpoint}/users/${userId}/posts`, {
    params: {
      offset: postsCount,
      count: postsCountPerFetchInPostTab,
    },
  }).then(res => res.data.posts)
)

export const requestDeletePosts = postUuids => (
  axios.delete(`${binderApiEndpoint}/multiple_posts`, {
    params: {
      post_uuids: postUuids,
    },
  }).then(res => res.status === 200)
)

export const requestUnpublishPosts = postUuids => (
  axios.patch(`${binderApiEndpoint}/multiple_posts/unpublish`, {
    post_uuids: postUuids,
  }).then(res => res.status === 200)
)
