import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const cpnt = ({
  name,
  username,
  userImage,
  logoImage,
  saveStatus,
  publicationStatus,
}) => (
  <header className="editor-header">
    <div className="header-wrapper clearfix">
      <div className="header-left">
        <h1 className="logo">
          <a href="/">
            <img
              src={logoImage}
              alt="dailybook"
            />
          </a>
        </h1>
        <p className="publication-status">
          {publicationStatus}
        </p>
        <p className="save-status">
          {saveStatus}
        </p>
      </div>
      <div className="header-right">
        <nav className="header-menu">
          <ul>
            <li className="menu-item publish-button">
              <button>
                {"Publish "}
                <i
                  className="fa fa-angle-down"
                  aria-hidden="true"
                />
              </button>
            </li>
            <li className="menu-item profile-window">
              <a href={`/@${username}`}>
                <img
                  src={userImage}
                  alt={name}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

cpnt.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  logoImage: PropTypes.string.isRequired,
  saveStatus: PropTypes.string.isRequired,
  publicationStatus: PropTypes.string.isRequired,
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

const stateToPublicationStatus = (state) => {
  if (!state.isPublished) {
    return "Draft"
  }

  if (state.isChangesUnpublished) {
    return "Changes unpublished"
  }

  return "Open to public"
}

const mapStateToProps = state => ({
  name: state.user.name,
  username: state.user.username,
  userImage: state.user.image,
  logoImage: state.logoImage,
  saveStatus: stateToSaveStatus(state),
  publicationStatus: stateToPublicationStatus(state),
})

const Header = connect(
  mapStateToProps,
)(cpnt)

export default Header
