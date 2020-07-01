// Gatsby supports TypeScript natively!
import React from "react"
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from '../styles/contact.module.scss'
import emailjs from 'emailjs-com'

const Contacto = (props) => {
  const sendEmail = (e) => {
    e.preventDefault();
    e.persist()
    emailjs.sendForm('gmail', 'template_SvHU5xYT', e.target, 'user_KW4VbZqb4wplFhtpIqGWA')
      .then((result) => {
          console.log(result.text, e.target);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <Layout page={'contacto'}>
      <SEO title="Contacto Alex Peracaula" lang="es" description="Página de contacto Alex Peracaula"/>
      <h1>Contáctame</h1>
      <div className={styles.contact_content}>
        <div className={styles.media}>
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
        <form className="contact-form" className={styles.form} onSubmit={sendEmail}>
          <label>Nombre</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Mensaje</label>
          <textarea name="message" />
          <div className={styles.button_container}>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Contacto
