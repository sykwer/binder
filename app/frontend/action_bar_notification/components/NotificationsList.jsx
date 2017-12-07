import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { List, AutoSizer } from "react-virtualized"

import NotificationsListItem from "./NotificationsListItem"
import { startFetch } from "../store/actions"

class cpnt extends React.Component {
  componentDidMount() {
    this.props.handleBottomReached()
  }

  render() {
    const { notifications, handleBottomReached } = this.props
    const { isAllFetched } = this.props // eslint-disable-line

    const rowRenderer = ({ index, style }) => {
      const notification = notifications[index]

      return (
        <div key={index} style={style}>
          <NotificationsListItem
            notification={notification}
          />
        </div>
      )
    }

    rowRenderer.propTypes = {
      index: PropTypes.number.isRequired,
      style: PropTypes.any, // eslint-disable-line
    }

    return (
      <AutoSizer>
        {
          ({ height, width }) => (
            <List
              className="notifications-list cancel-focus-outline"
              width={width}
              height={height}
              rowRenderer={rowRenderer}
              rowCount={notifications.length}
              rowHeight={85}
              onRowsRendered={({ stopIndex }) => {
                if (stopIndex === notifications.length - 1) {
                  handleBottomReached()
                }
              }}
            />
          )
        }
      </AutoSizer>
    )
  }
}


cpnt.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    isRead: PropTypes.bool.isRequired,
    updatedAt: PropTypes.string.isRequired,
    sourceUserName: PropTypes.string.isRequired,
    sourceUserUsername: PropTypes.string.isRequired,
    sourceUserImageUrl: PropTypes.string.isRequired,
    destinationPostUuid: PropTypes.string,
    clapsCount: PropTypes.number,
  })).isRequired,
  handleBottomReached: PropTypes.func.isRequired,
  isAllFetched: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  notifications: state.notifications,
  isAllFetched: state.isAllFetched,
})

const mapDispatchToProps = dispatch => ({
  handleBottomReached: () => {
    dispatch(startFetch())
  },
})

const NotificationsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default NotificationsList
