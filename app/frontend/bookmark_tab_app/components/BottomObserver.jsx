import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { startFetchPosts } from "../store/actions"

const cpnt = ({ handleBottomReached }) => {
  // eslint-disable-next-line
  const onIntersect = (entries, observer) => {
    handleBottomReached()
  }

  const options = {
    root: null,
  }

  const observer = new IntersectionObserver(onIntersect, options)

  window.setTimeout(() => {
    const target = document.getElementById("bookmark-tab-bottom-target")
    observer.observe(target)
  }, 300)

  return (
    <div id="bookmark-tab-bottom-target" />
  )
}

cpnt.propTypes = {
  handleBottomReached: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  handleBottomReached: () => {
    dispatch(startFetchPosts())
  },
})

const BottomObserver = connect(
  null,
  mapDispatchToProps,
)(cpnt)

export default BottomObserver
