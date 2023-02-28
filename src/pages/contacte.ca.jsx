// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from '../styles/contact.module.scss'
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

const Contacto = (props) => {
  return (
    <Layout page={'contacto'} lan={'ca'}>
      <SEO title="Contacte Alex Peracaula" lang="ca" description="Pàgina de contacte Alex Peracaula"/>
      <h1>Contacta'm</h1>
      <div className={styles.contact_content}>
        <div style={{textAlign: 'center'}}>Actualment sense representant</div>
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
        <br/>
      </div>
    </Layout>
  )
}

export default Contacto
