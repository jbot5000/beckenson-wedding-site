import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo1 from "../images/ianandjesse.svg"
import logo2 from "../images/ianandjesse-line.svg"
import uspic from "../images/uspic.jpg"

const Header = ({ siteTitle }) => (
  <header>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <img className="logo1" src={logo1} alt="Ian and Jesse" />
          <img className="logo2" src={logo2} alt="Ian and Jesse" />
        </Link>
      </h1>
      <img id="uspic" src={uspic} alt="Us smiling." />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
