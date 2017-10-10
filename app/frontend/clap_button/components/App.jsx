import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const cpnt = ({
  beforeClapImage,
}) => (
  <button
    className="clap-button-component"
  >
    <img
      className="clap-image"
      src={beforeClapImage}
      alt="clap"
    />
    <p className="claps-count-right">
      35
    </p>
  </button>
)

cpnt.propTypes = {
  beforeClapImage: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  beforeClapImage: state.beforeClapImage,
})

const App = connect(
  mapStateToProps,
)(cpnt)

export default App
