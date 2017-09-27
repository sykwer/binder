import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const cpnt = ({ user, date, saveStatus }) => (
  <div className="header-wrapper clearfix">
    <div className="header-image">
      <img src={user.image} alt="user profile" />
    </div>
    <div className="header-text">
      <div className="header-profile-name">
        <span>{user.name}</span>
      </div>
      <div className="header-datetime">
        <span>{date}</span>
      </div>
    </div>
    <div className="save-status">
      <span>{saveStatus}</span>
    </div>
  </div>
)

cpnt.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  saveStatus: PropTypes.string.isRequired,
}

const stateToSaveStatus = (state) => {
  const content = state.contentSaveState
  const title = state.titleSaveState

  if (content === "INITIAL" && title === "INITIAL") {
    return ""
  } else if (content === "IS_SAVING" || title === "IS_SAVING") {
    return "Saving.."
  } else if (content === "IS_NOT_SAVED" || title === "IS_NOT_SAVED") {
    return "Unsaved"
  } else if (content === "IS_SAVED" || title === "IS_SAVED") {
    return "Saved"
  }

  return "Error"
}

const mapStateToProps = state => ({
  user: {
    name: state.user.name,
    image: state.user.image,
  },
  date: state.date,
  saveStatus: stateToSaveStatus(state),
})

const PostMetaInfo = connect(mapStateToProps)(cpnt)

export default PostMetaInfo
