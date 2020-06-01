import React from 'react';
import styles from './footer.module.scss';
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
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
      linkedin: file(relativePath: { eq: "linkedin-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
    <footer>
        <div className={styles.first_container}>
            © {new Date().getFullYear()}, by
            {` `}
            Àlex Peracaula Ruiz
            <div className={styles.logos_container}>
                <div className={styles.mail}>
                    <a href="mailto:aperacaularuiz@gmail.com" target="blank"><Img fluid={icons.mail.childImageSharp.fluid} /></a>
                </div>
                <div className={styles.instagram}>
                    <a href="https://www.instagram.com/aperacaula" target="blank"><Img fluid={icons.instagram.childImageSharp.fluid} /></a>
                </div>
                <div className={styles.linkedin}>
                    <a href="https://www.linkedin.com/in/alex-peracaula-9b4b1b11a/" target="blank"><Img fluid={icons.linkedin.childImageSharp.fluid} /></a>
                </div>
            </div>
        </div>
    </footer>
    )
}


export default Footer;