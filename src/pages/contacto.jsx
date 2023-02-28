// Gatsby supports TypeScript natively!
import React from "react"
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from '../styles/contact.module.scss'

const Contacto = (props) => {
  return (
    <Layout page={'contacto'}>
      <SEO title="Contacto Alex Peracaula" lang="es" description="Página de contacto Alex Peracaula"/>
      <h1>Contáctame</h1>
      <div className={styles.contact_content}>
        <div style={{textAlign: 'center'}}>Actualmente sin representante</div>
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
      </div>
    </Layout>
  )
}

export default Contacto
