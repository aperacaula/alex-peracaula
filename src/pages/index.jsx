import React, {useState} from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from "../styles/index.module.scss"
import ReactPlayer from "react-player"
import Loader from "react-loader-spinner"
import ImageGallery from 'react-image-gallery'

const IndexPage = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)

  const { allImageSharp: { edges: images } } = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid {
                src
                srcSet
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
  }).slice(0,8)

  const srcSetArray = sortedImages.map(image => ({
    srcSet: image.node.fluid.srcSet,
    original: image.node.fluid.src,
    originalAlt: 'alex peracaula',
    originalTitle: 'alex peracaula'
  }))
  
  return (
  <Layout >
    <SEO
      title="Actor"
      lang="es"
      description="Página web del actor Alex Peracaula, con todo el 
      material disponible (fotos, vídeos, currículum...). En el apartado 
      de poesía, a modo de blog, comparto algunos de mis escritos."/>
    <h2 className={styles.smaller_h1}>Videobook</h2>
    <div className={`${styles.loader_container} ${videoLoaded ? styles.hide: ''}`}>
      <Loader
          type="Puff"
          color="black"
          // height={100}
          // width={100}
          timeout={3000} //3 secs
          className={videoLoaded ? styles.hide : ''}
        />
    </div>
    <div className={ `${styles.video_container} ${videoLoaded ? styles.change : ''}`}>
      <ReactPlayer
        url="https://vimeo.com/442985312"
        controls={true}
        onReady={() => setVideoLoaded(true)}
        className={styles.video_player}
      />
    </div>
    <div className={styles.gallery}>
      <Link to="/galeria"><h2>Galería</h2></Link>
      <Link to="/galeria"><p>(Ver más)</p></Link>
      <div className={styles.container_slider}>
        <ImageGallery
          items={srcSetArray}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
          slideInterval={4000}
          lazyLoad={true}
          showNav={true}/>
      </div>
    </div>
  </Layout>
)}

export default IndexPage
