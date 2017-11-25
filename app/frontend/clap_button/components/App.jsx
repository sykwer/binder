import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { clickClap } from "../store/actions"
import clapAnimation from "../../shared/utils/clap_animation"
import dummyClapAnimation from "../../shared/utils/dummy_clap_animation"

const cpnt = ({
  beforeClapImage,
  afterClapImage,
  clappedCount,
  clappedCountByMe,
  isMyPost,
  handleClickClap,
}) => {
  let clapButton
  let countAnime
  let totalCountAnime

  let dummyButton

  if (isMyPost) {
    return (
      <button
        className="clap-button-component"
        ref={(node) => { dummyButton = node }}
        onClick={(e) => {
          e.stopPropagation()
          dummyClapAnimation(dummyButton).replay()
        }}
      >
        <img
          className="clap-image"
          src={beforeClapImage}
          alt="clap"
        />
        <p className="claps-count-right">
          {clappedCount}
        </p>
      </button>
    )
  }

  return (
    <button
      className="clap-button-component"
      ref={(node) => { clapButton = node }}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        handleClickClap()

        clapAnimation(clapButton, countAnime, totalCountAnime).replay()
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
  isMyPost: PropTypes.bool.isRequired,
  handleClickClap: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  beforeClapImage: state.beforeClapImage,
  afterClapImage: state.afterClapImage,
  clappedCount: state.clappedCount,
  clappedCountByMe: state.clappedCountByMe,
  isMyPost: state.isMyPost,
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
