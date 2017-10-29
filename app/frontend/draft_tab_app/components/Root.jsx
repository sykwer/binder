import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import {
  displayMenu,
  closeMenu,
  clickDeleteMenu,
  clickDelete,
  clickCancelDelete,
} from "../store/actions"

const cpnt = ({
  posts,
  menuDisplayedPostUuid,
  toBeDeletedPostUuid,
  handleClickDisplayMenu,
  handleClickCloseMenu,
  handleClickDeleteMenu,
  handleClickDelete,
  handleClickCancelDelete,
}) => (
  <div>
    <div
      className="menu-close-listener-div"
      role="button"
      tabIndex="0"
      onClick={(e) => {
        e.stopPropagation()
        handleClickCloseMenu()
      }}
    />
    <div
      role="button"
      tabIndex="0"
      onClick={(e) => {
        e.stopPropagation()
        handleClickCloseMenu()
      }}
      style={{ width: "100%", height: "100%", position: "fixed", top: 0, left: 0 }}
    />
    {
      toBeDeletedPostUuid && (
        <div className="delete-confirmation-window">
          <div className="delete-buttons-wrapper">
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation()
                handleClickDelete(toBeDeletedPostUuid)
              }}
            >
              Delete
            </button>
            <button
              className="cancel-button"
              onClick={(e) => {
                e.stopPropagation()
                handleClickCancelDelete()
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )
    }
    <div className="draft-list">
      {
        posts.map(post => (
          <div
            key={post.uuid}
            className="draft-list-item"
          >
            <h2 className="post-title">
              { post.title_draft ? post.title_draft : "タイトル未設定" }
            </h2>
            <div className="item-footer clearfix">
              <p className="last-edited">
                {`Last Edited ${post.updated_at}`}
              </p>
              <div className="menu-wrapper">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleClickDisplayMenu(post.uuid)
                  }}
                >
                  <i
                    className="fa fa-chevron-down draft-menu-down"
                    aria-hidden="true"
                  />
                </button>
                {
                  menuDisplayedPostUuid === post.uuid && (
                    <div
                      role="button"
                      tabIndex="0"
                      onClick={(e) => {
                        e.stopPropagation()
                      }}
                      className="draft-menu"
                    >
                      <a
                        className="edit-button"
                        href={`http://localhost:3000/posts/${post.uuid}/edit`}
                      >
                        Edit
                      </a>
                      <a
                        className="delete-button"
                        role="button"
                        tabIndex="0"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleClickDeleteMenu(post.uuid)
                        }}
                      >
                        Delete
                      </a>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  </div>
)

cpnt.propTypes = {
  posts: PropTypes.array, // eslint-disable-line
  menuDisplayedPostUuid: PropTypes.string,
  toBeDeletedPostUuid: PropTypes.string,
  handleClickDisplayMenu: PropTypes.func.isRequired,
  handleClickCloseMenu: PropTypes.func.isRequired,
  handleClickDeleteMenu: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
  handleClickCancelDelete: PropTypes.func.isRequired,
}

cpnt.defaultProps = {
  posts: [],
  menuDisplayedPostUuid: null,
  toBeDeletedPostUuid: null,
}

const mapStateToProps = state => ({
  posts: state.posts,
  menuDisplayedPostUuid: state.menuDisplayedPostUuid,
  toBeDeletedPostUuid: state.toBeDeletedPostUuid,
})

const mapDispatchToProps = dispatch => ({
  handleClickDisplayMenu: (postUuid) => {
    dispatch(displayMenu(postUuid))
  },
  handleClickCloseMenu: () => {
    dispatch(closeMenu())
  },
  handleClickDeleteMenu: (postUuid) => {
    dispatch(clickDeleteMenu(postUuid))
  },
  handleClickDelete: (postUuid) => {
    dispatch(clickDelete(postUuid))
  },
  handleClickCancelDelete: () => {
    dispatch(clickCancelDelete())
  },
})

const Root = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default Root
