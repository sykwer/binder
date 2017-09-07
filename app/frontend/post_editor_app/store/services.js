import axios from "axios"

export const requestSaveContentDraft = (postUuid, text) => {
  const url = `http://localhost:3000/api/posts/${postUuid}/content_draft`
  return axios.patch(url, {
    content_draft: text,
  }).then(res => res.status === 200)
}

export const requestBookList = (bookName, author, publisher) => {
  const key = "AIzaSyCUb5azooicumCNsK8NAkRJ9lEZbNeWqLA"
  const baseURL = "https://www.googleapis.com/books/v1/volumes"

  const params = []
  if (bookName) {
    params.push(`intitle:${bookName}`)
  }
  if (author) {
    params.push(`inauthor:${author}`)
  }
  if (publisher) {
    params.push(`inpublisher:${publisher}`)
  }
  const url = `${baseURL}?key=${key}&maxResults=40&q=${params.join("+")}`

  return axios.get(url).then(res => res.data.items)
}
