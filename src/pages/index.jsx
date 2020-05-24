import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Image from "../components/Image/image"
import SEO from "../components/seo"
import styles from "../styles/index.module.scss"
import ReactPlayer from "react-player"
import Loader from "react-loader-spinner"
import Swiper from 'react-id-swiper'
import '../styles/swiper.scss'
import '../styles/swiper.min.scss'

const IndexPage = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }
  
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
    <div>
    <Swiper {...params}>
        <div>   
          <img alt="" src="https://i.ibb.co/rHv7NJ4/alex-book-3.jpg"/>
        </div>
        <div>  
          <img alt="" src="https://i.ibb.co/fD8yKV8/alex-book-1.jpg"/>
        </div>
        <div>
          <img alt=""src="https://i.ibb.co/SdtQ9cv/alex-book-2.jpg"/>
        </div>
      </Swiper>
      </div>
  </Layout>
)}

export default IndexPage
