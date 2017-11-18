import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import PostsList from "./PostsList"
import BottomFixedWindow from "./BottomFixedWindow"
import DeleteScreen from "./DeleteScreen"
import UnpublishScreen from "./UnpublishScreen"
import BottomObserver from "./BottomObserver"

const cpnt = ({
  isBottomWindowDisplayed,
  isDeleteScreenOpen,
  isUnpublishScreenOpen,
}) => (
  <div>
    <PostsList />
    {
      isBottomWindowDisplayed && (
        <BottomFixedWindow />
      )
    }
    {
      isDeleteScreenOpen && (
        <DeleteScreen />
      )
    }
    {
      isUnpublishScreenOpen && (
        <UnpublishScreen />
      )
    }
    <BottomObserver />
  </div>
)

cpnt.propTypes = {
  isBottomWindowDisplayed: PropTypes.bool.isRequired,
  isDeleteScreenOpen: PropTypes.bool.isRequired,
  isUnpublishScreenOpen: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isBottomWindowDisplayed: state.selectedPostUuids.length > 0,
  isDeleteScreenOpen: state.screenMode === "DELETE",
  isUnpublishScreenOpen: state.screenMode === "UNPUBLISH",
})

const Root = connect(
  mapStateToProps,
)(cpnt)

export default Root
