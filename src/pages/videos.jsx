// Gatsby supports TypeScript natively!
import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../styles/videos.module.scss"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import YouTube from 'react-youtube';

const videosUrls = [
  'https://youtu.be/w0NcyiahpzI',
  'https://youtu.be/5DCk1i15s8Y',
  'https://youtu.be/5sGKQnpZLFg',
  'https://youtu.be/AV5m2W9MH_w',
  'https://youtu.be/8nyVAJhPAEs',
  'https://youtu.be/5sMrU6zA2kE',
  'https://youtu.be/-1hhBmlEDSE',
  'https://youtu.be/g1olyrnNuF8',
]

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
    <Layout page={'videos'}>
      <SEO title="Videos" />
      <h1>Vídeos parodia</h1>
      {videosIds.map(id => (
        <>
          <YouTube videoId={id} opts={optsDesktop} className={styles.desktop}/>
          <YouTube videoId={id} opts={optsMobile} className={styles.mobile}/>
        </>
      ))}
      <Link to="/">- Volver al inicio -</Link>
    </Layout>
)}

export default Videos
