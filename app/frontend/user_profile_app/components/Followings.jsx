import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const cpnt = ({ username, name }) => (
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
    <div className="title-header">
      <h2 className="title">
        {`${name} follows`}
      </h2>
    </div>
  </div>
)

cpnt.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  name: state.name,
  username: state.username,
})

const Followings = connect(
  mapStateToProps,
)(cpnt)

export default Followings
