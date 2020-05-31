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
    { original: 'https://i.ibb.co/rHv7NJ4/alex-book-3.jpg' },
    { original: 'https://i.ibb.co/fD8yKV8/alex-book-1.jpg' },
    { original: 'https://i.ibb.co/SdtQ9cv/alex-book-2.jpg' },
  ]
  
  return (
  <Layout>
    <SEO title="Alex Peracaula" />
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
    <Link to="/page-2/">Galería</Link>
    <div className={styles.container_slider}>
      <ImageGallery items={imagesUrls} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} autoPlay={true} slideInterval={3500} showNav={true}/>
    </div>
  </Layout>
)}

export default IndexPage
