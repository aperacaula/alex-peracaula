
import React from "react"
import PropTypes from "prop-types"
import styles from "./poema.module.scss"

const Poema = ({ children, title, first = false }) => (
    <div
      className={`${styles.poema_container} ${title === 'Tiaviva' ? styles.tiaviva : ''} ${first ? styles.first : ''}`}
    >
        <h2>{title}</h2>
        <div>{children}</div>
    </div>
  )

Poema.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Poema
