import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const cpnt = ({ facebookLink, twitterLink }) => (
  <div className="sns-buttons">
    <span className="twitter-button-wrapper">
      {
        twitterLink ? (
          <a href={twitterLink} target="_blank">
            <i className="fa fa-twitter active-button button-icon" aria-hidden="true" />
          </a>
        ) : (
          <i className="fa fa-twitter inactive-button button-icon" aria-hidden="true" />
        )
      }
    </span>
    <span className="facebook-button-wrapper">
      {
        facebookLink ? (
          <a href={facebookLink} target="_blank">
            <i className="fa fa-facebook active-button button-icon" aria-hidden="true" />
          </a>
        ) : (
          <i className="fa fa-facebook inactive-button button-icon" aria-hidden="true" />
        )
      }
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
