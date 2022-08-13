// Gatsby supports TypeScript natively!
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import styles from '../styles/contact.module.scss';

const Contacto = (props) => {
  return (
    <Layout page={'contacto'}>
      <SEO title="Contacto Alex Peracaula" lang="es" description="Página de contacto Alex Peracaula"/>
      <h1>Contáctame</h1>
      <div className={styles.contact_content}>
        <div style={{textAlign: 'center'}}>Representante</div>
        <div className={styles.contact_section}>
          <div styles={styles.image_container}>  
            <PermContactCalendarIcon />
          </div>
          <a href="https://www.lucesdemar.com" target="blank">www.lucesdemar.com</a>
        </div>
        <div className={styles.contact_section}>
          <div styles={styles.image_container}>  
            <MailOutlineIcon />
          </div>
          <a href="mailto:lucesdemar2@gmail.com" target="blank">lucesdemar2@gmail.com</a>
        </div>
      </div>
    </Layout>
  )
}

export default Contacto
