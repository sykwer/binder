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

import Header from "./Header"

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
  isTitleEmpty: state.postTitle.length < 1,
  isContentEmpty: !state.postContent || state.postContent.length < 1,
  isBookSelected: !!state.selectedBookAsin,
  isPublished: state.isPublished,
  isChangesUnpublished: state.isChangesUnpublished,
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

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)

export default HeaderContainer
