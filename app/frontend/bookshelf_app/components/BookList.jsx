import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const tableRow = ({ rowPosts, rowCount }) => {
  const bookColumns = rowPosts.map(post => (
    <td key={post.id}>
      <Link to={`/posts/${post.id}`}>
        <img src={post.bookImageUrl} alt={post.bookTitle} />
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
}

const cpnt = ({ posts }) => {
  // Workaround: postsをコピーして使わないとstateを直接いじることになる
  // TODO: Immutableを使った方がいいケース??
  const copyPosts = posts.slice()
  const tableRows = []

  let rowCount = 0
  while (copyPosts.length) {
    const rowPosts = copyPosts.splice(0, 5)
    tableRows.push(tableRow({ rowPosts, rowCount }))
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
}

const mapStateToProps = state => ({
  posts: state.posts,
})

const BookList = connect(
  mapStateToProps,
)(cpnt)

export default BookList
