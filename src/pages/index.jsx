import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Image from "../components/Image/image"
import SEO from "../components/seo"
import styles from "../styles/index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Me motherfuckin site</h1>
    <p>Portfolio bitchez</p>
    <p>Yesss</p>
    <div className={styles.image_container}>
      <img src="https://www.hola.com/imagenes/actualidad/20190925150138/brad-pitt-habla-sobre-divorcio-gt/0-723-722/brad-divorcio-t.jpg" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
