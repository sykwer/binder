import axios from "axios"

export const fetchPostsFromFollowings = (page) => {
  const url = "http://localhost:3000/api/streams/from_followings"
  const countPerPage = 10

  return axios.get(url, {
    params: {
      offset: page * countPerPage,
      count: countPerPage,
    },
  }).then(res => res.data.posts)
}

export const fetchPostsOfTimeline = (oldestUnixtimeNano) => {
  const url = "http://localhost:3000/api/streams/world_timeline"
  const countPerPage = 10

  return axios.get(url, {
    params: {
      oldest_unixtime_nano: oldestUnixtimeNano,
      count: countPerPage,
    },
  }).then(res => ({
    posts: res.data.posts,
    oldestUnixtimeNano: res.data.oldestUnixtimeNano,
  }))
}

export const requestBookmark = (postUuid) => {
  const url = `http://localhost:3000/api/posts/${postUuid}/bookmarks`
  return axios.post(url).then(res => res.status === 200)
}

export const requestUnbookmark = (postUuid) => {
  const url = `http://localhost:3000/api/posts/${postUuid}/bookmarks`
  return axios.delete(url).then(res => res.status === 200)
}
