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
    const getBaseName = (src) => src.split('/').pop().split('.')[0];
    const normalizeName = (name) => name.startsWith('0') ? name.slice(1) : name;

    const strA = getBaseName(a.node.fluid.src);
    const strB = getBaseName(b.node.fluid.src);

    const normA = normalizeName(strA);
    const normB = normalizeName(strB);

    // Compare normalized names first
    if (normA > normB) return 1;
    if (normA < normB) return -1;

    // If normalized names are equal, prioritize names starting with '0'
    if (strA.startsWith('0') && !strB.startsWith('0')) return -1;
    if (!strA.startsWith('0') && strB.startsWith('0')) return 1;

    return 0; // They are truly equal
  });

  const onClose = () => {
    setVisible(false)
    setClickedUrl('')
  }
  const onOpen = (url) => {
    setVisible(true)
    setClickedUrl(url)
  }
  return (
    <Layout page={'galeria'} lan='ca'>
      <SEO title="Galeria" lang="ca" description="Galeria de fotografies d'Alex Peracaula. Aquesta pàgina serveix com a book fotogràfic i ensenya fotografies de diferents sessions on he participat." />
      <h1>Galeria d'imatges</h1>
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
      <Link to="/ca">- Tornar a l'inici -</Link>

    </Layout>
  )
}

export default Galeria
