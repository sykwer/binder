import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { startFetching } from "../store/actions"

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
    const target = document.getElementById("bottom-observer")
    observer.observe(target)
  }, 500)

  return (
    <div id="bottom-observer" />
  )
}

cpnt.propTypes = {
  handleBottomReached: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  handleBottomReached: () => {
    dispatch(startFetching())
  },
})

const BottomObserver = connect(
  null,
  mapDispatchToProps,
)(cpnt)

export default BottomObserver
