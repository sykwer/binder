import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { clickClap } from "../store/actions"
import clapAnimation from "../../shared/utils/clap_animation"

const cpnt = ({
  beforeClapImage,
  afterClapImage,
  clappedCount,
  clappedCountByMe,
  handleClickClap,
}) => {
  let btn
  let countAnime
  let totalCountAnime

  return (
    <button
      className="clap-button-component"
      ref={(node) => { btn = node }}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        handleClickClap()

        clapAnimation(btn, countAnime, totalCountAnime).replay()
      }}
    >
      <span className="clap-count-by-me" ref={(node) => { countAnime = node }}>
        {`+${clappedCountByMe}`}
      </span>
      <img
        className="clap-image"
        src={clappedCountByMe > 0 ? afterClapImage : beforeClapImage}
        alt="clap"
      />
      <p
        ref={(node) => { totalCountAnime = node }}
        className="claps-count-right"
      >
        {clappedCount}
      </p>
    </button>
  )
}

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
