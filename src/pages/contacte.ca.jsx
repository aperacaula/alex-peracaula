// Gatsby supports TypeScript natively!
import React, { Suspense, lazy } from "react"
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import styles from '../styles/contact.module.scss'
const Layout = lazy(() => import("../components/Layout/layout"))
const SEO = lazy(() => import("../components/seo")) 

const Contacto = (props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout page={'contacto'} lan={'ca'}>
        <SEO title="Contacte" lang="ca"/>
        <h1>Contacta'm</h1>
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
    </Suspense>
  )
}

export default Contacto
