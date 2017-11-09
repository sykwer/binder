import axios from "axios"

import { binderApiEndpoint } from "../../settings/endpoints"

export const requestBookmark = postUuid => (
  axios.post(
    `${binderApiEndpoint}/posts/${postUuid}/bookmarks`,
  ).then(res => res.status === 200)
)

export const requestUnbookmark = postUuid => (
  axios.delete(
    `${binderApiEndpoint}/posts/${postUuid}/bookmarks`,
  ).then(res => res.status === 200)
)

export const fetchPosts = (oldestUnixTime, userId) => (
  axios.get(`${binderApiEndpoint}/users/${userId}/bookmarked_posts`, {
    params: {
      until: oldestUnixTime,
    },
  }).then(res => [res.data.posts, res.data.oldestUnixTime])
)

export const requestClap = postUuid => (
  axios.post(
    `${binderApiEndpoint}/posts/${postUuid}/claps`,
  ).then(res => res.status === 200)
)
