import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const cpnt = ({
  name,
  username,
  userImage,
  logoImage,
}) => (
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
      </div>
      <div className="header-right">
        <nav className="header-menu">
          <ul>
            <li className="menu-item publish-button">
              <button>
                {"Publish "}
                <i
                  className="fa fa-angle-down"
                  aria-hidden="true"
                />
              </button>
            </li>
            <li className="menu-item profile-window">
              <a href={`/${username}`}>
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

cpnt.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  logoImage: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  name: state.user.name,
  username: state.user.username,
  userImage: state.user.image,
  logoImage: state.logoImage,
})

const Header = connect(
  mapStateToProps,
)(cpnt)

export default Header
