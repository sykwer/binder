import axios from "axios"

export const requestSaveContentDraft = (postUuid, text) => {
  const url = `http://localhost:3000/api/posts/${postUuid}/content_draft`
  return axios.patch(url, {
    content_draft: text,
  }).then(res => res.status === 200)
}

export const requestSaveTitleDraft = (postUuid, text) => {
  const url = `http://localhost:3000/api/posts/${postUuid}/title_draft`
  return axios.patch(url, {
    title_draft: text,
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

export const requestSaveSelectedBook = (
  postUuid,
  bookAsin,
  image,
  title,
  author,
  publisher,
) => {
  const url = `http://localhost:3000/api/posts/${postUuid}/book_info`
  return axios.patch(url, {
    asin: bookAsin,
    book_image_url: image,
    book_title: title,
    book_author: author,
    book_publisher: publisher,
  }).then(res => res.status === 200)
}

export const requestPostPublish = (postUuid) => {
  const url = `http://localhost:3000/api/posts/${postUuid}/content`
  return axios.patch(url).then(res => res.status === 200)
}
