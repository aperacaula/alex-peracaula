// Gatsby supports TypeScript natively!
import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
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


// const imagesUrls = [
//   { original: 'https://i.ibb.co/JyCmTjp/alex-book-1-min.jpg' },
//   { original: 'https://i.ibb.co/rQRYxwX/2.jpg' },
//   { original: 'https://i.ibb.co/WDTRQL9/3.jpg' },
//   { original: 'https://i.ibb.co/fxcLzcB/IMG-5029-min.jpg'},
//   { original: 'https://i.ibb.co/st102p6/5.jpg'},
//   { original: 'https://i.ibb.co/DtZZjgb/IMG-5030-min.jpg'},
//   { original: 'https://i.ibb.co/SNkT8cT/IMG-2861-min.jpg'},
//   { original: 'https://i.ibb.co/WvR1M0B/IMG-2889-min.png'},
//   { original: 'https://i.ibb.co/yWC6Ltk/9.jpg'},
//   { original: 'https://i.ibb.co/Jrzq538/10.jpg'},
//   { original: 'https://i.ibb.co/h8RLp0y/11.jpg'},
//   { original: 'https://i.ibb.co/WW7PKg3/12.png'},
//   { original: 'https://i.ibb.co/DQ15374/13.png'},
//   { original: 'https://i.ibb.co/ct8m6Q9/14.png'},
//   { original: 'https://i.ibb.co/RgKjcGB/15.jpg'},
//   { original: 'https://i.ibb.co/VHDMXHF/16.jpg'},
//   { original: 'https://i.ibb.co/zbRQLTZ/17.jpg'},
//   { original: 'https://i.ibb.co/QrksVKL/18.jpg'},
//   { original: 'https://i.ibb.co/d494L9H/19.jpg'},
//   { original: 'https://i.ibb.co/qr79Q7f/20.jpg'},
//   { original: 'https://i.ibb.co/51B3bZX/21.jpg'},
//   { original: 'https://i.ibb.co/M6VRZY0/22.jpg'},
//   { original: 'https://i.ibb.co/WDTRQL9/3.jpg'},
//   { original: 'https://i.ibb.co/RCDWJcr/24.jpg'},
//   { original: 'https://i.ibb.co/pvN5vsf/25.jpg'},
//   { original: 'https://i.ibb.co/M9xZv4v/26.jpg'},
//   { original: 'https://i.ibb.co/84qnDpd/27.jpg'},
//   { original: 'https://i.ibb.co/qDPY2Yj/28.jpg'},
//   { original: 'https://i.ibb.co/FDBVHzB/29.jpg'},
//   { original: 'https://i.ibb.co/2vXtX2Q/30.jpg'},
//   { original: 'https://i.ibb.co/Mk34Gcx/31.jpg'},  
//   { original: 'https://i.ibb.co/thh73CT/32.jpg'},
//   { original: 'https://i.ibb.co/x1K3RGr/33.jpg'},
//   { original: 'https://i.ibb.co/F5hD7nc/34.jpg'},
//   { original: 'https://i.ibb.co/vmp0FBb/35.jpg'},
//   { original: 'https://i.ibb.co/q0Lx66f/36.jpg'},
//   { original: 'https://i.ibb.co/QnGKKFD/37.jpg'},
// ]

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
    <Layout page={'galeria'}>
      <SEO title="Galería" lang="es" description="Galería de fotografías de Alex Peracaula"/>
      <h1>Galería de fotografías de Alex</h1>
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
      <Link to="/">- Volver al inicio -</Link>
      
    </Layout>
)}

export default Galeria
