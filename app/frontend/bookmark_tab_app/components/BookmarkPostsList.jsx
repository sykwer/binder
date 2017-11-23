import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import {
  clickBookmark,
  clickUnbookmark,
  clickClap,
  openLoginModal,
} from "../store/actions"

import PostsListItem from "./PostsListItem"

const cpnt = ({
  posts,
  isLoggedIn,
  beforeClapImage,
  afterClapImage,
  handleClickBookmark,
  handleClickUnbookmark,
  handleClickClap,
  handleOpenLoginModal,
}) => (
  <div className="bookmarked-posts-list">
    {
      posts.map(post => (
        <PostsListItem
          post={post}
          isLoggedIn={isLoggedIn}
          beforeClapImage={beforeClapImage}
          afterClapImage={afterClapImage}
          handleClickBookmark={handleClickBookmark}
          handleClickUnbookmark={handleClickUnbookmark}
          handleClickClap={handleClickClap}
          handleOpenLoginModal={handleOpenLoginModal}
        />
      ))
    }
  </div>
)

cpnt.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    bookImageUrl: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookAuthor: PropTypes.string.isRequired,
    bookPublisher: PropTypes.string.isRequired,
    affiliateLink: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    userImageUrl: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userUserName: PropTypes.string.isRequired,
    userBio: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    bookmarkedCount: PropTypes.number.isRequired,
    clappedCount: PropTypes.number.isRequired,
    clappedCountByMe: PropTypes.number.isRequired,
  })).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  beforeClapImage: PropTypes.string.isRequired,
  afterClapImage: PropTypes.string.isRequired,
  handleClickBookmark: PropTypes.func.isRequired,
  handleClickUnbookmark: PropTypes.func.isRequired,
  handleClickClap: PropTypes.func.isRequired,
  handleOpenLoginModal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts,
  isLoggedIn: state.isLoggedIn,
  beforeClapImage: state.beforeClapImage,
  afterClapImage: state.afterClapImage,
})

const mapDispatchToProps = dispatch => ({
  handleClickBookmark: (postUuid) => {
    dispatch(clickBookmark(postUuid))
  },
  handleClickUnbookmark: (postUuid) => {
    dispatch(clickUnbookmark(postUuid))
  },
  handleClickClap: (post) => {
    dispatch(clickClap(post))
  },
  handleOpenLoginModal: () => {
    dispatch(openLoginModal())
  },
})

const BookmarkPostsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default BookmarkPostsList
