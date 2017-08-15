import axios from "axios"

// eslint-disable-next-line
export const requestSaveContentDraft = (postUuid, text) => {
  const url = `localhost:3000/posts/${postUuid}/draft_content`
  axios.patch(url, {
    draft_content: text,
  }).then(res => res.status === 200)
}
