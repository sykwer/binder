import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import {
  clickFollow,
  clickUnfollow,
} from "../store/actions"

const cpnt = ({
  isFollowed,
  handleClickFollow,
  handleClickUnfollow,
}) => {
  const button = isFollowed ? (
    <button
      className="following-button-component"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        handleClickUnfollow()
      }}
    >
      フォロー中
    </button>
  ) : (
    <button
      className="follow-button-component"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        handleClickFollow()
      }}
    >
      フォローする
    </button>
  )

  return button
}

cpnt.propTypes = {
  isFollowed: PropTypes.bool.isRequired,
  handleClickFollow: PropTypes.func.isRequired,
  handleClickUnfollow: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isFollowed: state.isFollowed,
})

const mapDispatchToProps = dispatch => ({
  handleClickFollow: () => {
    dispatch(clickFollow())
  },
  handleClickUnfollow: () => {
    dispatch(clickUnfollow())
  },
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default App
