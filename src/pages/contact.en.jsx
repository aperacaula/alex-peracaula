// Gatsby supports TypeScript natively!
import React from "react"
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from '../styles/contact.module.scss'

const Contacto = (props) => {
  return (
    <Layout page={'contacto'} lan={'en'}>
      <SEO title="Contact" lang="en"/>
      <h1>Contact me</h1>
      <div className={styles.contact_content}>
        <div className={styles.contact_section}>
          <div styles={styles.image_container}>  
            <MailOutlineIcon />
          </div>
          <a href="mailto:aperacaularuiz@gmail.com" target="blank">aperacaularuiz@gmail.com</a>
        </div>
        <div className={styles.contact_section}>
          <div styles={styles.image_container}>  
            <InstagramIcon />
          </div>
          <a href="https://www.instagram.com/aperacaula" target="blank">@aperacaula</a>
        </div>
      </div>
    </Layout>
  )
}

export default Contacto
