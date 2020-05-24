import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.scss'
import Menu from '../Menu/menu'

const Header = () => (
  <header>
    <div className={styles.myname_desktop}>
      <h1>
        <Link
          to="/"
        >
          <span>Àlex</span><br />
          <span>Peracaula</span><br />
          <span>Ruiz</span>
        </Link>
      </h1>
    </div>
    <div className={styles.myname_mobile}>
      <h1>
        <Link
          to="/"
        >
          <span>Àlex Peracaula Ruiz</span>
        </Link>
      </h1>
    </div>
    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
