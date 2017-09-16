import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { startFetchPostDetail } from "../store/actions"

const tableRow = ({ rowPosts, rowCount, handleOnClickBook }) => {
  const bookColumns = rowPosts.map(post => (
    <td key={post.id}>
      <Link
        to={`/posts/${post.id}`}
        onClick={() => { handleOnClickBook(post.id) }}
      >
        <img className="book-in-shelf" src={post.bookImageUrl} alt={post.bookTitle} />
      </Link>
    </td>
  ))

  return (
    <tr key={rowCount}>
      {bookColumns}
    </tr>
  )
}

tableRow.propTypes = {
  // eslint-disable-next-line
  rowPosts: PropTypes.array.isRequired,
  rowCount: PropTypes.number.isRequired,
  handleOnClickBook: PropTypes.func.isRequired,
}

const cpnt = ({ posts, handleOnClickBook }) => {
  // Workaround: postsをコピーして使わないとstateを直接いじることになる
  // TODO: Immutableを使った方がいいケース??
  const copyPosts = posts.slice()
  const tableRows = []

  let rowCount = 0
  while (copyPosts.length) {
    const rowPosts = copyPosts.splice(0, 5)
    tableRows.push(tableRow({ rowPosts, rowCount, handleOnClickBook }))
    rowCount += 1
  }

  return (
    <table>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  )
}

cpnt.propTypes = {
  // eslint-disable-next-line
  posts: PropTypes.array.isRequired,
  handleOnClickBook: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts,
})

const mapDispatchToProps = dispatch => ({
  handleOnClickBook: (postUuid) => {
    dispatch(startFetchPostDetail(postUuid))
  },
})

const BookList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default BookList
