import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Slide from 'react-reveal/Slide'
import styles from './header.module.scss'
import Menu from '../Menu/menu'

const Header = ({ slide, page }) => (
  <header>
    {slide
    ?
      <Slide left>
      <div className={styles.myname_desktop}>
          <Link
            to="/"
          >
            <span>Àlex</span><br />
            <span>Peracaula</span><br />
            <span>Ruiz</span>
          </Link>
      </div>
      </Slide>
    :
      <div className={styles.myname_desktop}>
          <Link
            to="/"
          >
            <span>Àlex</span><br />
            <span>Peracaula</span><br />
            <span>Ruiz</span>
          </Link>
      </div>
    }
    <div className={styles.myname_mobile}>
      <h1>
        <Link
          to="/"
        >
          <span>Àlex Peracaula Ruiz</span>
        </Link>
      </h1>
    </div>
    <Menu slide={slide} page={page}/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
