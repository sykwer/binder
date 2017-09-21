import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { startFetch } from "../store/actions"

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
    const target = document.getElementById("bottom-observer")
    observer.observe(target)
  }, 500)

  return (
    <div id="bottom-observer" />
  )
}

cpnt.propTypes = {
  handleOnIntersect: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  handleOnIntersect: () => {
    dispatch(startFetch())
  },
})

const BottomObserver = connect(
  null,
  mapDispatchToProps,
)(cpnt)

export default BottomObserver
