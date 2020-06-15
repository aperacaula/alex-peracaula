// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from '../styles/sobremi.module.scss'

const SobreMi = (props) => (
  <Layout page={'sobremi'} lan={'en'}>
    <SEO title="About me" />
    <h1>About Me</h1>
    <p>My name is Alex Peracaula Ruiz and I was born in Barcelona on October the 7th 1993.
      My passion for theatre began at an early age. Mainly due to the influence of my grandfather
      I started performing at school and in the theatre group 'La Teatral', owned by 'La Caixa'
      where I kept gathering experience with roles every time more challenging.</p>
 
     <p>Keeping theatre as my necessary hobbie, I studied Mechanical Engineering at Universitat
       Politècnica de Catalunya and I finished my Bachelor in University of California, Irvine, in California,
       where my passion for surfing could coexist with my studies on a daily basis.
       After returning to Europe I completed a Master Degree in Renewable Energies in Lisbon, where
       I lived the most thrilling year. There I joined <a href="http://www.lisbonplayers.com.pt/site/">"The Lisbon Players"</a>
       which is the English theatre group with largest trajectory in Portugal. By leading two of their
       productions (an original play by Elettra Sachi, 'The Stone Flower', and William Shakespeare's 
       'Much Ado About Nothing') I could work my English in different ways and improve my domain on the lenguage.
       This experience encouraged me to pursue my always present dream of becoming an actor.
     </p>

     <p>For this i came back to Barcelona in 2017 where I started the Professional Drama studies
       at Nancy Tuñón-Jordi Oliver Drama School, where I complemented my practical formation with a 
       deeper understanding of my emotional mechanisms and acting techniques. My will to act and my
       ambition have brought me to complement this formation with a rather personal one, by consuming
       tons of series, cinema, reading plays, writing, enrolling in short films, collective creation
        theatre plays, complementary courses and trying to grow as an artist every day.
      </p>
     
      <p>In parallel, sports have allways been present in my live and surfing has come to be
        my other passion. I have also practiced tennis since an early age. I also write poetry,
        which you can check in the proper section and I am currently working as a web developer
        in order to learn about this field that interests me and be able to pursue my acting dream.
       </p>


    <Link to="/">- Volver al inicio -</Link>
  </Layout>
)

export default SobreMi
