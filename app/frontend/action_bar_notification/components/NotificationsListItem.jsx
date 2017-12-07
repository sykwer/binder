import React from "react"
import PropTypes from "prop-types"

import { binderRootUrl } from "../../settings/endpoints"

const NotificationsListItem = ({ notification }) => (
  <div className="notifications-list-item">
    {
      notification.type === "Follow" && (
        <div>
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
              {notification.updatedAt}
            </p>
          </div>
        </div>
      )
    }
    {
      notification.type === "Clap" && (
        <div>
          <img
            className="source-user-image"
            src={notification.sourceUserImageUrl}
            alt={notification.sourceUserName}
          />
          <div className="list-item-right">
            <p className="list-item-msg">
              <strong>{notification.sourceUserName}</strong>さんがあなたの
              <strong><a href={`${binderRootUrl}/posts/${notification.destinationPostUuid}`} onClick={(e) => { e.stopPropagation() }}>投稿</a></strong>
              に{notification.clapsCount}拍手を送りました
            </p>
            <p className="list-item-datetime">
              {notification.updatedAt}
            </p>
          </div>
        </div>
      )
    }
    {
      notification.type === "Bookmark" && (
        <div>
          <img
            className="source-user-image"
            src={notification.sourceUserImageUrl}
            alt={notification.sourceUserName}
          />
          <div className="list-item-right">
            <p className="list-item-msg">
              <strong>{notification.sourceUserName}</strong>さんがあなたの
              <strong><a href={`${binderRootUrl}/posts/${notification.destinationPostUuid}`} onClick={(e) => { e.stopPropagation() }}>投稿</a></strong>
              をブックマークしました
            </p>
            <p className="list-item-datetime">
              {notification.updatedAt}
            </p>
          </div>
        </div>
      )
    }
  </div>
)

NotificationsListItem.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    sourceUserName: PropTypes.string.isRequired,
    sourceUserUsername: PropTypes.string.isRequired,
    sourceUserImageUrl: PropTypes.string.isRequired,
    destinationPostUuid: PropTypes.string,
    clapsCount: PropTypes.number,
  }).isRequired,
}

export default NotificationsListItem
