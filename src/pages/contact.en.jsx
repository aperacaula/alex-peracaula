// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from '../styles/contact.module.scss'

const Contacto = (props) => {
  const icons = useStaticQuery(graphql`
    query {
      instagram: file(relativePath: { eq: "instagram-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mail: file(relativePath: { eq: "email-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout page={'contacto'} lan={'en'}>
      <SEO title="Contact" />
      <h1>Contact me</h1>
      <div className={styles.contact_content}>
        <div className={styles.contact_section}>
          <div styles={styles.image_container}>  
            <Img fluid={icons.mail.childImageSharp.fluid} />
          </div>
          <a href="mailto:aperacaularuiz@gmail.com" target="blank">aperacaularuiz@gmail.com</a>
        </div>
        <div className={styles.contact_section}>
          <div styles={styles.image_container}>  
            <Img fluid={icons.instagram.childImageSharp.fluid} />
          </div>
          <a href="https://www.instagram.com/aperacaula" target="blank">@aperacaula</a>
        </div>
      </div>
    </Layout>
  )
}

export default Contacto
