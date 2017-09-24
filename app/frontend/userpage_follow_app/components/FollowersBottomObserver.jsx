import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { startFetchFollowers } from "../store/actions"

const cpnt = ({ handleOnIntersect }) => {
  // eslint-disable-next-line
  const onIntersect = (entries, observer) => {
    let willFire = true

    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        willFire = false
      }
    })

    if (!willFire) {
      return
    }

    handleOnIntersect()
  }

  const options = {
    root: null,
  }

  const observer = new IntersectionObserver(onIntersect, options)

  window.setTimeout(() => {
    const target = document.getElementById("followers-bottom-observer-target")
    observer.observe(target)
  }, 500)

  return (
    <div id="followers-bottom-observer-target" />
  )
}

cpnt.propTypes = {
  handleOnIntersect: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  handleOnIntersect: () => {
    dispatch(startFetchFollowers())
  },
})

const FollowersBottomObserver = connect(
  null,
  mapDispatchToProps,
)(cpnt)

export default FollowersBottomObserver
