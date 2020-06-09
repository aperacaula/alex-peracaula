import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Image from "../components/Image/image"
import SEO from "../components/seo"
import styles from "../styles/index.module.scss"
import ReactPlayer from "react-player"
import Loader from "react-loader-spinner"
import ImageGallery from 'react-image-gallery'

const IndexPage = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const imagesUrls = [
    { original: 'https://i.ibb.co/fD8yKV8/alex-book-1.jpg' },
    { original: 'https://i.ibb.co/rHv7NJ4/alex-book-3.jpg' },
    { original: 'https://i.ibb.co/SdtQ9cv/alex-book-2.jpg' },
    { original: 'https://i.ibb.co/k0X7hJk/IMG-5029.jpg'},
    { original: 'https://i.ibb.co/KD37x8x/IMG-5067.jpg'},
    { original: 'https://i.ibb.co/rGZdGHf/IMG-5030.jpg'},
    { original: 'https://i.ibb.co/3c8qfjR/IMG-2861.jpg'},
    { original: 'https://i.ibb.co/R4QbH2C/IMG-2889.png'},
  ]
  
  return (
  <Layout slide={true} >
    <SEO title="Home" />
    <h1 className={styles.smaller_h1}>Videobook</h1>
    <div className={`${styles.loader_container} ${videoLoaded ? styles.hide: ''}`}>
      <Loader
          type="Puff"
          color="black"
          height={100}
          width={100}
          timeout={3000} //3 secs
          className={videoLoaded ? styles.hide : ''}
        />
    </div>
    <div className={ `${styles.video_container} ${videoLoaded ? styles.change : ''}`}>
      <ReactPlayer
        url="https://vimeo.com/408550057"
        vimeoConfig={{ iframeParams: { fullscreen: 0 } }}
        onReady={() => setVideoLoaded(true)}
        className={styles.video_player}
      />
    </div>
    <div className={styles.gallery}>
      <Link to="/galeria"><h2>Galería</h2></Link>
      <Link to="/galeria"><p>(Ver más)</p></Link>
      <div className={styles.container_slider}>
        <ImageGallery items={imagesUrls} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} autoPlay={false} slideInterval={3500} showNav={true}/>
      </div>
    </div>
  </Layout>
)}

export default IndexPage
