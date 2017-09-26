import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { clickBookmark, clickUnbookmark } from "../store/actions"

const cpnt = ({
  postUuid,
  isBookmarked,
  bookmarkedCount,
  handleClickBookmark,
  handleClickUnbookmark,
}) => (
  <div>
    {
      isBookmarked ? (
        <span className="bookmark">
          <i
            className="fa fa-bookmark"
            aria-hidden="true"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleClickUnbookmark(postUuid)
            }}
          />
        </span>
      ) : (
        <span className="bookmark">
          <i
            className="fa fa-bookmark-o"
            aria-hidden="true"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleClickBookmark(postUuid)
            }}
          />
        </span>
      )
    }
    <span className="bookmark-count">{bookmarkedCount}</span>
  </div>
)

cpnt.propTypes = {
  postUuid: PropTypes.string.isRequired,
  bookmarkedCount: PropTypes.number.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  handleClickBookmark: PropTypes.func.isRequired,
  handleClickUnbookmark: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  postUuid: state.postUuid,
  bookmarkedCount: state.bookmarkedCount,
  isBookmarked: state.isBookmarked,
})

const mapDispatchToProps = dispatch => ({
  handleClickBookmark: (postUuid) => {
    dispatch(clickBookmark(postUuid))
  },
  handleClickUnbookmark: (postUuid) => {
    dispatch(clickUnbookmark(postUuid))
  },
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default App
