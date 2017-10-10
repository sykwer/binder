import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { clickClap } from "../store/actions"

const cpnt = ({
  beforeClapImage,
  afterClapImage,
  clappedCount,
  clappedCountByMe,
  handleClickClap,
}) => (
  <button
    className="clap-button-component"
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
      handleClickClap()
    }}
  >
    <img
      className="clap-image"
      src={clappedCountByMe > 0 ? afterClapImage : beforeClapImage}
      alt="clap"
    />
    <p className="claps-count-right">
      {clappedCount}
    </p>
  </button>
)

cpnt.propTypes = {
  beforeClapImage: PropTypes.string.isRequired,
  afterClapImage: PropTypes.string.isRequired,
  clappedCount: PropTypes.number.isRequired,
  clappedCountByMe: PropTypes.number.isRequired,
  handleClickClap: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  beforeClapImage: state.beforeClapImage,
  afterClapImage: state.afterClapImage,
  clappedCount: state.clappedCount,
  clappedCountByMe: state.clappedCountByMe,
})

const mapDispatchToProps = dispatch => ({
  handleClickClap: () => {
    dispatch(clickClap())
  },
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default App
