import axios from "axios"

import { binderApiEndpoint } from "../../settings/endpoints"

export const fetchPostsFromFollowings = (page) => {
  const countPerPage = 10

  return axios.get(`${binderApiEndpoint}/streams/from_followings`, {
    params: {
      offset: page * countPerPage,
      count: countPerPage,
    },
  }).then(res => res.data.posts)
}

export const fetchPostsOfTimeline = (oldestUnixtimeNano) => {
  const countPerPage = 10

  return axios.get(`${binderApiEndpoint}/streams/world_timeline`, {
    params: {
      oldest_unixtime_nano: oldestUnixtimeNano,
      count: countPerPage,
    },
  }).then(res => ({
    posts: res.data.posts,
    oldestUnixtimeNano: res.data.oldestUnixtimeNano,
  }))
}

export const requestBookmark = postUuid => (
  axios.post(`${binderApiEndpoint}/posts/${postUuid}/bookmarks`).then(res => res.status === 200)
)

export const requestUnbookmark = postUuid => (
  axios.delete(`${binderApiEndpoint}/posts/${postUuid}/bookmarks`).then(res => res.status === 200)
)
