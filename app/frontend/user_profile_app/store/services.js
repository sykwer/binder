import axios from "axios"

// eslint-disable-next-line
export const requestSaveProfile = (id, name, bio) => {
  const url = `http://localhost:3000/api/users/${id}/profile`
  return axios.patch(url, {
    name,
    bio,
  }).then(res => res.status === 200)
}
