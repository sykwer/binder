import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const cpnt = ({ facebookLink, twitterLink }) => (
  <div className="sns-buttons">
    <span className="twitter-button">
      <a href={twitterLink} target="_blank">
        <i className="fa fa-twitter" aria-hidden="true" />
      </a>
    </span>
    <span className="facebook-button">
      <a href={facebookLink} target="_blank">
        <i className="fa fa-facebook" aria-hidden="true" />
      </a>
    </span>
  </div>
)

cpnt.propTypes = {
  facebookLink: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  facebookLink: state.facebookLink,
  twitterLink: state.twitterLink,
})

const SnsButtons = connect(
  mapStateToProps,
)(cpnt)

export default SnsButtons
