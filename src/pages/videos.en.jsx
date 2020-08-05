// Gatsby supports TypeScript natively!
import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../styles/videos.module.scss"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import YouTube from 'react-youtube';
import Loader from "react-loader-spinner"
import ReactPlayer from "react-player"

const videoAbout = 'GWNKNVI95Kc'
const videosIds = [
  'O_4zKb0xn0o',
  'u0b89tU0nag',
  '-1hhBmlEDSE',
  'g1olyrnNuF8',
  '5sGKQnpZLFg',
  'w0NcyiahpzI',
  'AV5m2W9MH_w',
  '5DCk1i15s8Y',
  '8nyVAJhPAEs',
  '5sMrU6zA2kE',
]

const Videos = (props) => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videobookLoaded, setVideobookLoaded] = useState(false)
  const [videoAboutLoaded, setVideoAboutLoaded] = useState(false)
  const [selected, setSelectedTab] = useState(1)
  const optsDesktop = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const optsMobile = {
    height: '183',
    width: '300',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onClickTab = (value) => setSelectedTab(value)

  return (
    <Layout page={'videos'} lan={'en'}>
      <SEO
        title="Videos Alex Peracaula"
        lang="en"
        description="Alex Peracaula's video page. In this page you will find the acting reel, about me videos and also some parody videos about 'Ultimate survival'."/>
      <h1>Videos</h1>
      <div className={styles.tabs}>
        <div className={styles.tab} onClick={() => onClickTab(0)}>
          <h2 className={`${styles.tabTitle} ${selected === 0 ? styles.selected : ''}`}>Showreel</h2>
        </div>
        <div className={styles.tab} onClick={() => onClickTab(1)}>
          <h2 className={`${styles.tabTitle} ${selected === 1 ? styles.selected : ''}`}>About me</h2>          
        </div>
        <div className={styles.tab} onClick={() => onClickTab(2)}>
          <h2 className={`${styles.tabTitle} ${selected === 2 ? styles.selected : ''}`}>Parody</h2>  
        </div>
      </div>
      <div className={`${styles.loader_container} ${videobookLoaded ? styles.hide: ''} ${selected !== 0 ? styles.hide : ''}`}>
        <Loader
            type="Puff"
            color="black"
            height={100}
            width={100}
            timeout={3000} //3 secs
            className={videobookLoaded ? styles.hide : ''}
          />
      </div>
      <div className={
        `
          ${styles.video_container}
          ${videobookLoaded ? styles.change : ''}
          ${selected !== 0 ? styles.hide : ''}
        `}
      >
        <ReactPlayer
          url="https://vimeo.com/442985312"
          controls={true}
          onReady={() => setVideobookLoaded(true)}
          className={styles.video_player}
        />
      </div>
      <div className={`${styles.loader_container} ${videoAboutLoaded ? styles.hide: ''} ${selected !== 1 ? styles.hide : ''}`}>
        <Loader
            type="Puff"
            color="black"
            height={100}
            width={100}
            timeout={3000} //3 secs
            className={videobookLoaded ? styles.hide : ''}
          />
      </div>
      <div>
          <YouTube videoId={videoAbout} opts={optsDesktop} className={`${styles.desktop} ${selected !== 1 ? styles.hide : ''}`} onReady={() => setVideoAboutLoaded(true)}/>
          <YouTube videoId={videoAbout} opts={optsMobile} className={`${styles.mobile} ${selected !== 1 ? styles.hide : ''}`} onReady={() => setVideoAboutLoaded(true)}/>
      </div>
      <div className={`${styles.loader_container} ${videoLoaded ? styles.hide : ''} ${selected !== 2 ? styles.hide : ''}`}>
        <Loader
          type="Puff"
          color="black"
          height={100}
          width={100}
          timeout={3000} //3 secs
          className={videoLoaded ? styles.hide : ''}
        />
      </div>
      {videosIds.map(id => (
        <>
          <YouTube videoId={id} opts={optsDesktop} className={`${styles.desktop} ${selected !== 2 ? styles.hide : ''}`} onReady={() => setVideoLoaded(true)}/>
          <YouTube videoId={id} opts={optsMobile} className={`${styles.mobile} ${selected !== 2 ? styles.hide : ''}`} onReady={() => setVideoLoaded(true)}/>
        </>
      ))}
      <Link to="/" className={styles.back}>- Volver al inicio -</Link>
    </Layout>
)}

export default Videos
