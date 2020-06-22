// Gatsby supports TypeScript natively!
import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../styles/videos.module.scss"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import YouTube from 'react-youtube';
import Loader from "react-loader-spinner"


const videosIds = [
  '5DCk1i15s8Y',
  'g1olyrnNuF8',
  '5sGKQnpZLFg',
  'w0NcyiahpzI',
  'AV5m2W9MH_w',
  '8nyVAJhPAEs',
  '5sMrU6zA2kE',
  '-1hhBmlEDSE',
]

const Videos = (props) => {
  const [videoLoaded, setVideoLoaded] = useState(false)
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

  return (
    <Layout page={'videos'} lan={'en'}>
      <SEO
        title="Videos Alex Peracaula"
        lang="en"
        description="Alex Peracaula's video page. In this page you will find the acting reel and also some parody videos about 'Ultimate survival'."/>
      <h1>Parody videos</h1>
      <div className={`${styles.loader_container} ${videoLoaded ? styles.hide : ''}`}>
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
          <YouTube videoId={id} opts={optsDesktop} className={styles.desktop} onReady={() => setVideoLoaded(true)}/>
          <YouTube videoId={id} opts={optsMobile} className={styles.mobile} onReady={() => setVideoLoaded(true)}/>
        </>
      ))}
      <Link to="/en">- Back to Home -</Link>
    </Layout>
)}

export default Videos
