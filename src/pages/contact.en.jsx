// Gatsby supports TypeScript natively!
import React from "react"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from '../styles/contact.module.scss'

const Contacto = (props) => {
  return (
    <Layout page={'contacto'} lan={'en'}>
      <SEO title="Contact Alex Peracaula" lang="en" description="Contact page of Alex Peracaula" />
      <h1>Contact me</h1>
      <div className={styles.contact_content}>
        <div style={{ textAlign: 'center' }}>Currently without an agent</div>
        <div className={styles.contact_section}>
          <div styles={styles.image_container}>
            <PermContactCalendarIcon />
          </div>
          <a href="https://www.instagram.com/aperacaula/" target="blank">@aperacaula</a>
        </div>
        <div className={styles.contact_section}>
          <div styles={styles.image_container}>
            <MailOutlineIcon />
          </div>
          <a href="mailto:aperacaularuiz@gmail.com" target="blank">aperacaularuiz@gmail.com</a>
        </div>
        <br />
      </div>
    </Layout>
  )
}

export default Contacto
