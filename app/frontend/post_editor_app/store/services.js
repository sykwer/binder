import axios from "axios"

import {
  binderApiEndpoint,
  googleBookApiEndpoint,
} from "../../settings/endpoints"

import { googleBookApiKey } from "../../settings/constants"

export const requestSaveContentDraft = (postUuid, text) => (
  axios.patch(`${binderApiEndpoint}/posts/${postUuid}/content_draft`, {
    content_draft: text,
  }).then(res => res.status === 200)
)

export const requestSaveTitleDraft = (postUuid, text) => (
  axios.patch(`${binderApiEndpoint}/posts/${postUuid}/title_draft`, {
    title_draft: text,
  }).then(res => res.status === 200)
)

export const requestBookList = (bookName, author, publisher) => {
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

  return axios.get(
    `${googleBookApiEndpoint}?key=${googleBookApiKey}&maxResults=40&q=${params.join("+")}`,
  ).then(res => res.data.items)
}

export const requestSaveSelectedBook = (
  postUuid,
  bookAsin,
  image,
  title,
  author,
  publisher,
) => (
  axios.patch(`${binderApiEndpoint}/posts/${postUuid}/book_info`, {
    asin: bookAsin,
    book_image_url: image,
    book_title: title,
    book_author: author,
    book_publisher: publisher,
  }).then(res => res.status === 200)
)

export const requestPostPublish = (
  postUuid,
  tags,
  isSharedOnTwitter,
  isSharedOnFacebook,
) => {
  const attachedTagIds = []
  const createdTagNames = []

  tags.forEach((tag) => {
    if (tag.id === null) {
      createdTagNames.push(tag.name)
    } else {
      attachedTagIds.push(tag.id)
    }
  })

  return axios.patch(`${binderApiEndpoint}/posts/${postUuid}/content`, {
    created_tag_names: createdTagNames,
    attached_tag_ids: attachedTagIds,
    share_on_twitter: isSharedOnTwitter,
    share_on_facebook: isSharedOnFacebook,
  }).then(res => res.status === 200)
}

export const requestTagsList = (q, tagNames) => (
  axios.get(`${binderApiEndpoint}/tags/search`, {
    params: {
      q,
      excluded_names: tagNames,
    },
  }).then(res => res.data.tags)
)
