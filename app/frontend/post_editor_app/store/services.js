import axios from "axios"

// eslint-disable-next-line
export const requestSaveContentDraft = (postUuid, text) => {
  const url = `http://localhost:3000/api/posts/${postUuid}/content_draft`
  axios.patch(url, {
    content_draft: text,
  }).then(res => res.status === 200)
}
