// Gatsby supports TypeScript natively!
import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../styles/galeria.module.scss"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Masonry from "react-masonry-css"
import Dialog from '@material-ui/core/Dialog';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const imagesUrls = [
  { original: 'https://i.ibb.co/JyCmTjp/alex-book-1-min.jpg' },
  { original: 'https://i.ibb.co/SdtQ9cv/alex-book-2.jpg' },
  { original: 'https://i.ibb.co/wYVgQ8T/rsz-og-image.jpg' },
  { original: 'https://i.ibb.co/fxcLzcB/IMG-5029-min.jpg'},
  { original: 'https://i.ibb.co/KD37x8x/IMG-5067.jpg'},
  { original: 'https://i.ibb.co/DtZZjgb/IMG-5030-min.jpg'},
  { original: 'https://i.ibb.co/SNkT8cT/IMG-2861-min.jpg'},
  { original: 'https://i.ibb.co/WvR1M0B/IMG-2889-min.png'},
  { original: 'https://i.ibb.co/5szxBm2/IMG-2864.jpg'},
  { original: 'https://i.ibb.co/hXBYgB1/IMG-2856.jpg'},
  { original: 'https://i.ibb.co/N3nVwST/IMG-3007.jpg'},
  { original: 'https://i.ibb.co/CJN8XrM/IMG-3949.png'},
  { original: 'https://i.ibb.co/vZzrJqF/IMG-3444.png'},
  { original: 'https://i.ibb.co/y8gbxLh/IMG-3442.png'},
  { original: 'https://i.ibb.co/b2B7ZW1/IMG-5013.jpg'},
  { original: 'https://i.ibb.co/GdtG2F9/IMG-3564.jpg'},
  { original: 'https://i.ibb.co/mC9ypj1/IMG-3559.jpg'},
  { original: 'https://i.ibb.co/mJszJZL/IMG-3560.jpg'},
  { original: 'https://i.ibb.co/BzGjBFz/IMG-3706.jpg'},
  { original: 'https://i.ibb.co/XYtBRK9/IMG-4784.jpg'},
  { original: 'https://i.ibb.co/N7TkKgw/IMG-4264.jpg'},
  { original: 'https://i.ibb.co/s2KbZ1v/IMG-3553.jpg'},
  { original: 'https://i.ibb.co/yQps7wD/IMG-3562.jpg'},
  { original: 'https://i.ibb.co/1bLqsSb/IMG-4560.jpg'},
  { original: 'https://i.ibb.co/XVKDGCc/IMG-4774.jpg'},
  { original: 'https://i.ibb.co/GFNzRzV/IMG-4783.jpg'},
  { original: 'https://i.ibb.co/GxKHpJc/IMG-5035.jpg'},
  { original: 'https://i.ibb.co/S74MCzn/IMG-4263.jpg'},
  { original: 'https://i.ibb.co/MGWP7Ct/IMG-5002.jpg'},
  { original: 'https://i.ibb.co/CmkPBjy/IMG-5008.jpg'},
  { original: 'https://i.ibb.co/TgXVYZq/darks1.jpg'},  
  { original: 'https://i.ibb.co/Gt328Ch/IMG-5010.jpg'},
  { original: 'https://i.ibb.co/6Xy4QpV/peracahula4391final-compressor.jpg'},
  { original: 'https://i.ibb.co/rF6jryv/IMG-5004.jpg'},
  { original: 'https://i.ibb.co/z2kLfGy/IMG-5064.jpg'},
  { original: 'https://i.ibb.co/87H6sZ8/IMG-5077.jpg'},
  { original: 'https://i.ibb.co/vmmq3Z3/peracahula4190fetabw.jpg'},
]

const Galeria = (props) => {
  const [visible, setVisible] = useState(false);
  const [clickedUrl, setClickedUrl] = useState('');

  const onClose = () => {
    setVisible(false)
    setClickedUrl('')
  }
  const onOpen = (url) => {
    setVisible(true)
    setClickedUrl(url)
  }
  return (
    <Layout page={'galeria'} lan={'en'}>
      <SEO title="Photos" lang="en" description="Picture gallery of Alex Peracaula"/>
      <h1>Pictures gallery</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.my_masonry_grid}
        columnClassName={styles.my_masonry_grid_column}
      >
        {imagesUrls.map((url) => (
          <img alt="" src={url.original} onClick={() => onOpen(url.original)}/>
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
      <Link to="/en">- Back to Home -</Link>
      
    </Layout>
)}

export default Galeria
