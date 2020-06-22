// Gatsby supports TypeScript natively!
import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../styles/videos.module.scss"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import YouTube from 'react-youtube';
import Loader from "react-loader-spinner"
import ReactPlayer from "react-player"


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
  const [videobookLoaded, setVideobookLoaded] = useState(false)
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
    <Layout page={'videos'} lan={'ca'}>
      <SEO
        title="Vídeos Alex Peracaula"
        lang="ca"
        description="Vídeos de l' Alex Peracaula. En aquesta pàgina està el videobook y altres vídeos de comedia sobre 'El Ultimo Superviviente'."/>
      <h1>Vídeos</h1>
      <h2 className={styles.h2}>Videobook</h2>
      <div className={`${styles.loader_container} ${videobookLoaded ? styles.hide: ''}`}>
        <Loader
            type="Puff"
            color="black"
            height={100}
            width={100}
            timeout={3000} //3 secs
            className={videobookLoaded ? styles.hide : ''}
          />
      </div>
      <div className={ `${styles.video_container} ${videobookLoaded ? styles.change : ''}`}>
        <ReactPlayer
          url="https://vimeo.com/408550057"
          controls={true}
          onReady={() => setVideobookLoaded(true)}
          className={styles.video_player}
        />
      </div>
      <h2 className={styles.h2_2}>Vídeos parodia</h2>
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
      <Link to="/ca">- Tornar a l'inici -</Link>
    </Layout>
)}

export default Videos
