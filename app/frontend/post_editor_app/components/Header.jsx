import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import {
  openPublishWindow,
  toggleSharedOnTwitter,
  toggleSharedOnFacebook,
  publishPost,
  changeTagInput,
  emptyTagInput,
  selectTag,
  deleteTag,
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
  searchedTagsList,
  selectedTags,
  tagNameInput,
  tagSearchState,
  handleClickOpenPublishWindow,
  handleToggleSharedOnTwitter,
  handleToggleSharedOnFacebook,
  handleClickPublish,
  handleInputTagName,
  handleEmptyTagInput,
  handleSelectTag,
  handleClickDeleteTag,
}) => {
  let tagInputDiv

  return (
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

                    window.setTimeout(() => {
                      const node = document.getElementById("tag-input-box-div")
                      const range = document.createRange()
                      const selection = window.getSelection()
                      range.selectNodeContents(node)
                      range.collapse(false)
                      selection.removeAllRanges()
                      selection.addRange(range)
                    }, 100)
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
                    <p className="add-tag-explanation">
                      記事に関連するタグを5つまで付けることができます。(書名/著者のタグは自動で付きます)
                    </p>
                    <div className="add-tag-box">
                      <div className="tag-input-box-wrapper">
                        {
                          selectedTags.map(tag => (
                            <div
                              className="tag-token"
                              key={tag.name}
                            >
                              {tag.name}
                              <button
                                className="delete-tag-button"
                                onClick={(e) => {
                                  e.preventDefault()
                                  e.stopPropagation()
                                  handleClickDeleteTag(tag.name)

                                  window.setTimeout(() => {
                                    const node = document.getElementById("tag-input-box-div")
                                    const range = document.createRange()
                                    const selection = window.getSelection()
                                    range.selectNodeContents(node)
                                    range.collapse(false)
                                    selection.removeAllRanges()
                                    selection.addRange(range)
                                  }, 300)
                                }}
                              >
                                ×
                              </button>
                            </div>
                          ))
                        }
                        { selectedTags.length < 5 &&
                          <div
                            contentEditable
                            placeholder="タグ名を入力..."
                            className="tag-input-box"
                            id="tag-input-box-div"
                            role="textbox"
                            tabIndex="0"
                            ref={(node) => { tagInputDiv = node }}
                            onInput={(e) => {
                              e.preventDefault()

                              if (tagInputDiv.innerText.length === 0) {
                                handleEmptyTagInput()
                              } else {
                                window.setTimeout(() => {
                                  handleInputTagName(document.getElementById("tag-input-box-div").innerText)
                                }, 300)
                              }
                            }}
                            onKeyDown={(e) => {
                              if ([13, 32].includes(e.keyCode)) { // enter space
                                e.preventDefault()
                              }

                              // We have to prevent this processed before tagslist fetched
                              if (tagSearchState === "FETCHED" && e.keyCode === 13) { // enter
                                if (searchedTagsList.some(tag => tag.name === tagNameInput)) {
                                  const t = searchedTagsList.find(tag => tag.name === tagNameInput)
                                  handleSelectTag(t)
                                } else if (tagNameInput.length > 0) {
                                  handleSelectTag({
                                    id: null,
                                    name: tagNameInput,
                                    attachedCount: 0,
                                  })
                                }

                                tagInputDiv.innerText = ""
                                const range = document.createRange()
                                const selection = window.getSelection()
                                range.selectNodeContents(tagInputDiv)
                                range.collapse(false)
                                selection.removeAllRanges()
                                selection.addRange(range)
                              }
                            }}
                          />
                        }
                        { searchedTagsList.length > 0 &&
                          <div className="searched-tags-list">
                            <ul className="tags-ul-list">
                              {
                                searchedTagsList.map(tag => (
                                  <li
                                    key={tag.name}
                                  >
                                    <button
                                      className="tags-list-item"
                                      onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        handleSelectTag(tag)

                                        tagInputDiv.innerText = ""
                                        const range = document.createRange()
                                        const selection = window.getSelection()
                                        range.selectNodeContents(tagInputDiv)
                                        range.collapse(false)
                                        selection.removeAllRanges()
                                        selection.addRange(range)
                                      }}
                                    >
                                      {tag.name}
                                    </button>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        }
                        { tagSearchState === "FETCHED" && searchedTagsList.length === 0 &&
                          document.getElementById("tag-input-box-div").innerText.length > 0 &&
                          <div className="searched-tags-list">
                            <ul className="tags-ul-list">
                              <li>
                                <button
                                  className="tags-list-item"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    handleSelectTag({
                                      id: null,
                                      name: tagNameInput,
                                      attatchedCount: 0,
                                    })

                                    tagInputDiv.innerText = ""
                                    const range = document.createRange()
                                    const selection = window.getSelection()
                                    range.selectNodeContents(tagInputDiv)
                                    range.collapse(false)
                                    selection.removeAllRanges()
                                    selection.addRange(range)
                                  }}
                                >
                                  {tagNameInput}
                                </button>
                              </li>
                            </ul>
                          </div>
                        }
                      </div>
                    </div>
                    <div className="social-share">
                      <label className="share-on-twitter" htmlFor="twitter-checkbox">
                        <input
                          className="checkbox-button"
                          type="checkbox"
                          id="twitter-checkbox"
                          checked={isTwitterChecked}
                          onChange={handleToggleSharedOnTwitter}
                        />
                        {"  twitterに投稿する"}
                      </label>
                      <label className="share-on-facebook" htmlFor="facebook-checkbox">
                        <input
                          className="checkbox-button"
                          type="checkbox"
                          id="facebook-checkbox"
                          checked={isFacebookChecked}
                          onChange={handleToggleSharedOnFacebook}
                        />
                        {"  facebookに投稿する"}
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
}

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
  searchedTagsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    attatchedCount: PropTypes.number.isRequired,
  })).isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    attatchedCount: PropTypes.number.isRequired,
  })).isRequired,
  tagNameInput: PropTypes.string.isRequired,
  tagSearchState: PropTypes.string.isRequired,
  handleClickOpenPublishWindow: PropTypes.func.isRequired,
  handleToggleSharedOnTwitter: PropTypes.func.isRequired,
  handleToggleSharedOnFacebook: PropTypes.func.isRequired,
  handleClickPublish: PropTypes.func.isRequired,
  handleInputTagName: PropTypes.func.isRequired,
  handleEmptyTagInput: PropTypes.func.isRequired,
  handleSelectTag: PropTypes.func.isRequired,
  handleClickDeleteTag: PropTypes.func.isRequired,
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
  searchedTagsList: state.searchedTagsList,
  selectedTags: state.selectedTags,
  tagNameInput: state.tagNameInput,
  tagSearchState: state.tagSearchState,
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
    dispatch(publishPost())
  },
  handleInputTagName: (text) => {
    dispatch(changeTagInput(text))
  },
  handleEmptyTagInput: () => {
    dispatch(emptyTagInput())
  },
  handleSelectTag: (tag) => {
    dispatch(selectTag(tag))
  },
  handleClickDeleteTag: (tagName) => {
    dispatch(deleteTag(tagName))
  },
})

const Header = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default Header
