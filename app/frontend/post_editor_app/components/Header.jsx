import React from "react"
import PropTypes from "prop-types"

const Header = ({
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
  isPublished,
  isUpdateDisabled,
  isPublishDisabled,
  handleClickOpenPublishWindow,
  handleToggleSharedOnTwitter,
  handleToggleSharedOnFacebook,
  handleClickPublish,
  handleInputTagName,
  handleEmptyTagInput,
  handleSelectTag,
  handleClickDeleteTag,
}) => {
  const focusCaretOnTagInput = () => {
    const node = document.getElementById("tag-input-box-div")
    const range = document.createRange()
    const selection = window.getSelection()
    range.selectNodeContents(node)
    range.collapse(false)
    selection.removeAllRanges()
    selection.addRange(range)
  }

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
                    e.stopPropagation()
                    handleClickOpenPublishWindow()

                    window.setTimeout(() => {
                      if (selectedTags.length < 5) {
                        focusCaretOnTagInput()
                      }
                    }, 100)
                  }}
                >
                  {isPublished ? "Update " : "Publish "}
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
                                e.stopPropagation()
                                handleClickDeleteTag(tag.name)

                                window.setTimeout(() => {
                                  focusCaretOnTagInput()
                                }, 300)
                              }}
                            >
                              ×
                            </button>
                          </div>
                        ))
                      }
                      <div className="tag-input-box-wrapper">
                        { selectedTags.length < 5 &&
                          <div
                            contentEditable
                            placeholder="タグ名を入力..."
                            className="tag-input-box"
                            id="tag-input-box-div"
                            role="textbox"
                            tabIndex="0"
                            onInput={(e) => {
                              e.preventDefault()

                              const tagInput = document.getElementById("tag-input-box-div")
                              if (tagInput && tagInput.innerText.length === 0) {
                                handleEmptyTagInput()
                              } else if (tagInput) {
                                window.setTimeout(() => {
                                  handleInputTagName(tagInput.innerText)
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

                                document.getElementById("tag-input-box-div").innerText = ""
                                focusCaretOnTagInput()
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
                                        e.stopPropagation()
                                        handleSelectTag(tag)

                                        if (selectedTags.length < 5) {
                                          document.getElementById("tag-input-box-div").innerText = ""
                                          focusCaretOnTagInput()
                                        }
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
                          document.getElementById("tag-input-box-div") &&
                          document.getElementById("tag-input-box-div").innerText.length > 0 &&
                          <div className="searched-tags-list">
                            <ul className="tags-ul-list">
                              <li>
                                <button
                                  className="tags-list-item"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleSelectTag({
                                      id: null,
                                      name: tagNameInput,
                                      attachedCount: 0,
                                    })

                                    if (selectedTags.length < 5) {
                                      document.getElementById("tag-input-box-div").innerText = ""
                                      focusCaretOnTagInput()
                                    }
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
                          className="checkbox-button common-checkbox-appearance"
                          type="checkbox"
                          id="twitter-checkbox"
                          checked={isTwitterChecked}
                          onChange={handleToggleSharedOnTwitter}
                        />
                        {"  twitterに投稿する"}
                      </label>
                      <label className="share-on-facebook" htmlFor="facebook-checkbox">
                        <input
                          className="checkbox-button common-checkbox-appearance"
                          type="checkbox"
                          id="facebook-checkbox"
                          checked={isFacebookChecked}
                          onChange={handleToggleSharedOnFacebook}
                        />
                        {"  facebookに投稿する"}
                      </label>
                    </div>
                    <div className="publish-button-wrapper">
                      {
                        isPublished && isUpdateDisabled && (
                          <button
                            className="disabled-button"
                            onClick={(e) => { e.stopPropagation() }}
                          >
                            Update
                          </button>
                        )
                      }
                      {
                        isPublished && !isUpdateDisabled && (
                          <button
                            className="publish-button"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleClickPublish()
                            }}
                          >
                            Update
                          </button>
                        )
                      }
                      {
                        !isPublished && isPublishDisabled && (
                          <button
                            className="disabled-button"
                            onClick={(e) => { e.stopPropagation() }}
                          >
                            Publish
                          </button>
                        )
                      }
                      {
                        !isPublished && !isPublishDisabled && (
                          <button
                            className="publish-button"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleClickPublish()
                            }}
                          >
                            Publish
                          </button>
                        )
                      }
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

Header.propTypes = {
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
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    attachedCount: PropTypes.number.isRequired,
  })).isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    attachedCount: PropTypes.number.isRequired,
  })).isRequired,
  tagNameInput: PropTypes.string.isRequired,
  tagSearchState: PropTypes.string.isRequired,
  isPublished: PropTypes.bool.isRequired,
  isUpdateDisabled: PropTypes.bool.isRequired,
  isPublishDisabled: PropTypes.bool.isRequired,
  handleClickOpenPublishWindow: PropTypes.func.isRequired,
  handleToggleSharedOnTwitter: PropTypes.func.isRequired,
  handleToggleSharedOnFacebook: PropTypes.func.isRequired,
  handleClickPublish: PropTypes.func.isRequired,
  handleInputTagName: PropTypes.func.isRequired,
  handleEmptyTagInput: PropTypes.func.isRequired,
  handleSelectTag: PropTypes.func.isRequired,
  handleClickDeleteTag: PropTypes.func.isRequired,
}

export default Header
