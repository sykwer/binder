import axios from "axios"

import { binderApiEndpoint } from "../../settings/endpoints"
import { postsCountPerFetchInStream } from "../../settings/constants"

export const fetchPostsFromFollowings = page => (
  axios.get(`${binderApiEndpoint}/streams/from_followings`, {
    params: {
      offset: page * postsCountPerFetchInStream,
      count: postsCountPerFetchInStream,
    },
  }).then(res => res.data.posts)
)

export const fetchPostsOfTimeline = oldestUnixtime => (
  axios.get(`${binderApiEndpoint}/streams/world_timeline`, {
    params: {
      oldest_unixtime: oldestUnixtime,
      count: postsCountPerFetchInStream,
    },
  }).then(res => ({
    posts: res.data.posts,
    oldestUnixtime: res.data.oldestUnixtime,
  }))
)

export const requestBookmark = postUuid => (
  axios.post(`${binderApiEndpoint}/posts/${postUuid}/bookmarks`).then(res => res.status === 200)
)

export const requestUnbookmark = postUuid => (
  axios.delete(`${binderApiEndpoint}/posts/${postUuid}/bookmarks`).then(res => res.status === 200)
)
