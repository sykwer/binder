import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { clickProfileLink, clickPostLink } from "../store/actions"

const cpnt = ({
  notification,
  handleClickProfileLink,
  handleClickPostLink,
}) => (
  <div
    className={`notifications-list-item${notification.isRead ? "" : " not-read"}`}
  >
    {
      notification.type === "Follow" && (
        <div
          className="cancel-focus-outline"
          role="button"
          tabIndex="0"
          onClick={(e) => {
            e.stopPropagation()
            handleClickProfileLink(notification.id, notification.sourceUserUsername)
          }}
        >
          <img
            className="source-user-image"
            src={notification.sourceUserImageUrl}
            alt={notification.sourceUserName}
          />
          <div className="list-item-right">
            <p className="list-item-msg">
              <strong>{notification.sourceUserName}</strong>さんがあなたをフォローしました
            </p>
            <p className="list-item-datetime">
              {notification.createdAt}
            </p>
          </div>
        </div>
      )
    }
    {
      notification.type === "Clap" && (
        <div
          className="cancel-focus-outline"
          role="button"
          tabIndex="0"
          onClick={(e) => {
            e.stopPropagation()
            handleClickProfileLink(notification.id, notification.sourceUserUsername)
          }}
        >
          <img
            className="source-user-image"
            src={notification.sourceUserImageUrl}
            alt={notification.sourceUserName}
          />
          <div className="list-item-right">
            <p className="list-item-msg">
              <strong>
                {notification.sourceUserName}
              </strong>
              さんがあなたの
              <strong>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    handleClickPostLink(notification.id, notification.destinationPostUuid)
                  }}
                >
                  投稿
                </button>
              </strong>
              に{notification.clapsCount}拍手を送りました
            </p>
            <p className="list-item-datetime">
              {notification.createdAt}
            </p>
          </div>
        </div>
      )
    }
    {
      notification.type === "Bookmark" && (
        <div
          className="cancel-focus-outline"
          role="button"
          tabIndex="0"
          onClick={(e) => {
            e.stopPropagation()
            handleClickProfileLink(notification.id, notification.sourceUserUsername)
          }}
        >
          <img
            className="source-user-image"
            src={notification.sourceUserImageUrl}
            alt={notification.sourceUserName}
          />
          <div className="list-item-right">
            <p className="list-item-msg">
              <strong>
                {notification.sourceUserName}
              </strong>
              さんがあなたの
              <strong>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    handleClickPostLink(notification.id, notification.destinationPostUuid)
                  }}
                >
                  投稿
                </button>
              </strong>
              をブックマークしました
            </p>
            <p className="list-item-datetime">
              {notification.createdAt}
            </p>
          </div>
        </div>
      )
    }
  </div>
)

cpnt.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    isRead: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
    sourceUserName: PropTypes.string.isRequired,
    sourceUserUsername: PropTypes.string.isRequired,
    sourceUserImageUrl: PropTypes.string.isRequired,
    destinationPostUuid: PropTypes.string,
    clapsCount: PropTypes.number,
  }).isRequired,
  handleClickProfileLink: PropTypes.func.isRequired,
  handleClickPostLink: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  handleClickProfileLink: (notificationId, username) => {
    dispatch(clickProfileLink(notificationId, username))
  },
  handleClickPostLink: (notificationId, postUuid) => {
    dispatch(clickPostLink(notificationId, postUuid))
  },
})

const NotificationsListItem = connect(
  null,
  mapDispatchToProps,
)(cpnt)

export default NotificationsListItem
