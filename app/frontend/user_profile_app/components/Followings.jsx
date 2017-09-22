import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const cpnt = ({ username }) => (
  <div
    className="followers-follows-component"
    role="button"
    tabIndex="0"
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
      const node = document.getElementById("followings-to-mypage")
      node.click()
    }}
  >
    <Link to={`/@${username}`} id="followings-to-mypage" />
  </div>
)

cpnt.propTypes = {
  username: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  username: state.username,
})

const Followings = connect(
  mapStateToProps,
)(cpnt)

export default Followings
