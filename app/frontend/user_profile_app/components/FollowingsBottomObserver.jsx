import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { startFetchFollowings } from "../store/actions"

const cpnt = ({ handleOnIntersect }) => {
  // eslint-disable-next-line
  const onIntersect = (entries, observer) => {
    handleOnIntersect()
  }

  const options = {
    root: null,
  }

  const observer = new IntersectionObserver(onIntersect, options)

  window.setTimeout(() => {
    const target = document.getElementById("followings-bottom-observer-target")
    observer.observe(target)
  }, 500)

  return (
    <div id="followings-bottom-observer-target" />
  )
}

cpnt.propTypes = {
  handleOnIntersect: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  handleOnIntersect: () => {
    dispatch(startFetchFollowings())
  },
})

const FollowingsBottomObserver = connect(
  null,
  mapDispatchToProps,
)(cpnt)

export default FollowingsBottomObserver
