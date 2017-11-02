import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import mojs from "mo-js"

import { clickClap } from "../store/actions"

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

        const duration = 400

        const burst = new mojs.Burst({
          parent: btn,
          radius: { 40: 95 },
        })

        const countAnimation = new mojs.Html({
          el: countAnime,
          isShowStart: false,
          isShowEnd: true,
          y: { 0: -30 },
          opacity: { 0: 0.8 },
          duration,
        }).then({
          opacity: { 0.8: 0 },
          y: -80,
          delay: duration / 2,
        })

        const countTotalAnimation = new mojs.Html({
          el: totalCountAnime,
          isShowStart: false,
          isShowEnd: true,
          opacity: { 0: 1 },
          delay: 3 * (duration / 2),
          duration,
          y: { 0: -3 },
        })

        const scaleButton = new mojs.Html({
          el: btn,
          duration,
          scale: { 1.3: 1 },
          easing: mojs.easing.out,
        })

        const timeline = new mojs.Timeline()
        timeline.add([
          burst,
          countAnimation,
          countTotalAnimation,
          scaleButton,
        ])

        timeline.replay()
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
