
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import styles from "./poema.module.scss"

const Poema = ({ children, title }) => (
    <div className={`${styles.poema_container} ${title === 'Tiaviva' ? styles.tiaviva : ''}`}>
        <h2>{title}</h2>
        <div>{children}</div>
    </div>
  )

Poema.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Poema
