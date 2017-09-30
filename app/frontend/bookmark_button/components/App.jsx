import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { clickBookmark, clickUnbookmark } from "../store/actions"

const cpnt = ({
  postUuid,
  isBookmarked,
  handleClickBookmark,
  handleClickUnbookmark,
}) => (
  <div className="bookmark-button-component">
    {
      isBookmarked ? (
        <i
          className="fa fa-bookmark unbookmark-button"
          aria-hidden="true"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleClickUnbookmark(postUuid)
          }}
        />
      ) : (
        <i
          className="fa fa-bookmark-o bookmark-button"
          aria-hidden="true"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleClickBookmark(postUuid)
          }}
        />
      )
    }
  </div>
)

cpnt.propTypes = {
  postUuid: PropTypes.string.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  handleClickBookmark: PropTypes.func.isRequired,
  handleClickUnbookmark: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  postUuid: state.postUuid,
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
