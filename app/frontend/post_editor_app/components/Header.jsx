import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import {
  openPublishWindow,
  toggleSharedOnTwitter,
  toggleSharedOnFacebook,
} from "../store/actions"

const cpnt = ({
  name,
  username,
  userImage,
  logoImage,
  saveStatus,
  publicationStatus,
  isPublishWindowDisplayed,
  isTwitterChecked,
  isFacebookChecked,
  handleClickOpenPublishWindow,
  handleToggleSharedOnTwitter,
  handleToggleSharedOnFacebook,
  handleClickPublish,
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
            <li className="menu-item publish-window-open-button">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleClickOpenPublishWindow()
                }}
              >
                {"Publish "}
                <i
                  className="fa fa-angle-down"
                  aria-hidden="true"
                />
              </button>
              { isPublishWindowDisplayed &&
                <div
                  className="publish-window cancel-focus-outline"
                  role="button"
                  tabIndex="0"
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                >
                  <h2 className="publish-window-header">Ready to publish?</h2>
                  <p className="add-tag-explanation">記事に関連するタグを3つまで付けることができます。</p>
                  <div className="add-tag-box" />
                  <div className="social-share">
                    <label className="share-on-twitter" htmlFor="twitter-checkbox">
                      <input
                        className="checkbox-button"
                        type="checkbox"
                        id="twitter-checkbox"
                        checked={isTwitterChecked}
                        onChange={handleToggleSharedOnTwitter}
                      />
                      {"  twitterでシェアする"}
                    </label>
                    <label className="share-on-facebook" htmlFor="facebook-checkbox">
                      <input
                        className="checkbox-button"
                        type="checkbox"
                        id="facebook-checkbox"
                        checked={isFacebookChecked}
                        onChange={handleToggleSharedOnFacebook}
                      />
                      {"  facebookでシェアする"}
                    </label>
                  </div>
                  <div className="publish-button-wrapper">
                    <button
                      className="publish-button"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        handleClickPublish()
                      }}
                    >
                      Publish
                    </button>
                  </div>
                </div>
              }
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
  isPublishWindowDisplayed: PropTypes.bool.isRequired,
  isTwitterChecked: PropTypes.bool.isRequired,
  isFacebookChecked: PropTypes.bool.isRequired,
  handleClickOpenPublishWindow: PropTypes.func.isRequired,
  handleToggleSharedOnTwitter: PropTypes.func.isRequired,
  handleToggleSharedOnFacebook: PropTypes.func.isRequired,
  handleClickPublish: PropTypes.func.isRequired,
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
  isPublishWindowDisplayed: state.isPublishWindowDisplayed,
  isTwitterChecked: state.isSharedOnTwitter,
  isFacebookChecked: state.isSharedOnFacebook,
})

const mapDispatchToProps = dispatch => ({
  handleClickOpenPublishWindow: () => {
    dispatch(openPublishWindow())
  },
  handleToggleSharedOnTwitter: () => {
    dispatch(toggleSharedOnTwitter())
  },
  handleToggleSharedOnFacebook: () => {
    dispatch(toggleSharedOnFacebook())
  },
  handleClickPublish: () => {
    alert("Publish!!")
  },
})

const Header = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default Header
