// Gatsby supports TypeScript natively!
import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "../styles/galeria.module.scss"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Masonry from "react-masonry-css"
import Dialog from '@material-ui/core/Dialog';
import Img from "gatsby-image"

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};


const Galeria = (props) => {
  const [visible, setVisible] = useState(false);
  const [clickedUrl, setClickedUrl] = useState('');

  const { allImageSharp: { edges: images } } = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `
  )
  // const imagesSrc = images.map(image => image.node.fluid.src)
  const sortedImages = images.sort((a, b) => {
    const strA = Number(a.node.fluid.src.split('/')[a.node.fluid.src.split('/').length - 1].split('.')[0])
    const strB = Number(b.node.fluid.src.split('/')[b.node.fluid.src.split('/').length - 1].split('.')[0])
    if (strA > strB) return 1
    if (strA < strB) return -1
    return 0
  })

  const onClose = () => {
    setVisible(false)
    setClickedUrl('')
  }
  const onOpen = (url) => {
    setVisible(true)
    setClickedUrl(url)
  }
  return (
    <Layout page={'galeria'} lan={'en'}>
      <SEO title="Photos" lang="en" description="Picture gallery of Alex Peracaula. This page works as a photo book and displays pictures from several sessions that I have had."/>
      <h1>Photobook</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.my_masonry_grid}
        columnClassName={styles.my_masonry_grid_column}
      >
        {sortedImages.map((image) => (
          <div style={{ width: '100%' }} onClick={() => onOpen(image.node.fluid.src)}>
            <Img
              alt="alex peracaula"
              fluid={image.node.fluid}
            />
          </div>
        ))}
      </Masonry>
      <Dialog
        open={visible}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <img className={styles.img} alt="" src={clickedUrl} />
      </Dialog>
      <Link to="/en">- Back to Home -</Link>
      
    </Layout>
)}

export default Galeria
