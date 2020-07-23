// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import styles from "../styles/cv.module.scss"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const CV = (props) => (
  <Layout page={'cv'} lan={'en'}>
    <SEO title="CV Alex Peracaula" lang="en" description="Acting CV of Alex Peracaula. Summary of the formation, dramatic education, theatre and cinema projects in which I have participated, together with the languages that I know."/>
    <h1>CV</h1>
    <div className={styles.cv_container}>
    <h2>Training</h2>
      <ul>
        <li>
          Casting course with <strong>Rosa Estévez</strong>, Actores Madrid, 2020
        </li>
        <li>
          <strong>Acting in English</strong>, with <strong>Luci Lenox</strong> and Stephanie Figueira, 2020
        </li>
        <li>
          Professional Acting Degree in <strong>Nancy Tuñón</strong>, Barcelona, 2017-2020
        </li>
        <li>
          <strong>Camera</strong> Acting by <strong>Esteve Rovira</strong>, 2019
        </li>
        <li>
          <strong>Casting</strong> Course by <strong>Pep Armengol</strong>, 2019
        </li>
        <li>
          <strong>Singing</strong> classes by Martina Tresserra, 2017-2018
        </li>
        <li>
          <strong>Play Creation</strong> Course by Bárbara Mestanza (The Mamzelles), 2018
        </li>
        <li>
          Modern Jazz, Escuela de <strong>baile</strong> Bailongu, Barcelona 2019
        </li>
      </ul>
    <h2>Theatre</h2>
      <ul>
        <li>
        "La Pols" directed by <strong>Pepa Fluvià</strong>, Barcelona 2019     
        </li>
        <li>
        "Almost, Maine" directed by <strong>Pepa Fluvià</strong>, Barcelona 2019     
        </li>
        <li>
        “A por quienes” by Raimundo Morte y creación colectiva, <strong>Porta 4</strong>, Barcelona 2019 
        </li>
        <li>
        "Much Ado About Nothing" by William Shakespeare, <strong>The Lisbon Players</strong> at Estrella Hall, Lisboa 2017     
        </li>
        <li>
        "The Stone Flower" by Elettra Sacchi, <strong>The Lisbon Players</strong> at Estrella Hall, Lisboa 2017     
        </li>
        <li>
          "Olvida los Tambores" by Ana Diosdado,<strong> La Teatral</strong>, Barcelona 2014    
        </li>
        <li>
        “La dama del alba” by Alejandro Casona,<strong> La Teatral</strong>, Barcelona 2013      
        </li>
        <li>
        "Casats per Amor a la Pasta" by Lluís Coquard,<strong> La Teatral</strong>, Barcelona 2012      
        </li>
        <li>
        "El Bon Doctor" d'Anton Tchéjov,<strong> La Teatral</strong>, Barcelona 2010    
        </li>
      </ul>
    <h2>Camera</h2>
      <ul>
        <li>
          Musical Clip <strong>"Transhumanismo"</strong>, of Alan Neil, 2020
        </li>
        <li>
          Short Film <strong>"Vino a un lugar"</strong>, of Luís Dickinson, 2020
        </li>
        <li>
          Short Film <strong>"Entre Hilos"</strong>, of Judith Oliver, ECIB 2018
        </li>
        <li>
          Short Film <strong>“La última posibilidad”</strong>, of Luís Dickinson, ESCAC 2018
        </li>
        <li>
          Short Film <strong>"Danza"</strong>, of Gabriel Floro, ECIB 2018
        </li>
        <li>
          Short Film <strong>"Café con Sal"</strong>, of Albert Picola, 2017
        </li>
        <li>
          Short Film <strong>"Os Genios São Loucos ou Semi-deuses"</strong>, of Beactriz Guerreiro 2017
        </li>
      </ul>
      <p className={styles.languages}>Languages: <span><strong>Catalan</strong>, <strong>Español</strong> (acentos varios), <strong>Inglés</strong> (americano/británico), <strong>Portugués</strong> (Portugal/brasileño)</span></p>
      <p className={styles.languages}>Instruments: <span>Drums (basic), guitar (basic), ukelele (medium)</span></p>
      <p className={styles.languages}>Sports: <span>Surf, soccer, tennis, ski, snowboard, swimming, horse riding.</span></p>
    </div>
    <Link to="/">- Back to Home -</Link>
  </Layout>
)

export default CV
