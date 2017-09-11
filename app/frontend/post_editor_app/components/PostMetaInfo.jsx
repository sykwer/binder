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

const mapStateToProps = (state) => {
  let saveStatus
  switch (state.contentSaveState) {
    case "INITIAL":
      saveStatus = ""
      break
    case "IS_NOT_SAVED":
      saveStatus = "Unsaved"
      break
    case "IS_SAVING":
      saveStatus = "Saving.."
      break
    case "IS_SAVED":
      saveStatus = "Saved"
      break
    default:
      saveStatus = "Error"
  }

  return {
    user: {
      name: state.user.name,
      image: state.user.image,
    },
    date: state.date,
    saveStatus,
  }
}

const PostMetaInfo = connect(mapStateToProps)(cpnt)

export default PostMetaInfo
