// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import styles from "../styles/cv.module.scss"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const CV = (props) => (
  <Layout page={'cv'} lan={'ca'}>
    <SEO title="Currículum Alex Peracaula" lang="ca" description='Curriculum vitae artístic Alex Peracaula. Repàs de la formació, projectes de teatre, cinema i audiovisuals en els que he participat i idiomes que parlo.'/>
    <h1>Currículum</h1>
    <div className={styles.cv_container}>
      <h2>Dades</h2>
      <p className={styles.languages}><span><strong>Alçada:</strong> 178cm   <strong>Cabells:</strong> Castanys (rapat)   <strong>Ulls:</strong> Verds</span></p>
      <p className={styles.languages}><span><strong>Pantaló:</strong> 31   <strong>Camisa:</strong> 50   <strong>Sabata:</strong> 42.5</span></p>
      <h2>Formació</h2>
      <ul>
        <li>
          Curs de casting amb <strong>Rosa Estévez</strong>, Actores Madrid, 2020
        </li>
        <li>
          <strong>Acting in English</strong>, with Luci Lenox and Stephanie Figueira, 2020
        </li>
        <li>
          Formació professional de l'actor a <strong>Nancy Tuñón</strong>, Barcelona, 2017-2020
        </li>
        <li>
          Curs del actor delante de la <strong>cámara</strong> impartit per <strong>Esteve Rovira</strong>, 2019
        </li>
        <li>
          Curs de <strong>casting</strong> impartit per <strong>Pep Armengol</strong>, 2019
        </li>
        <li>
          <strong>Cant</strong>, clases impartides per Martina Tresserra, 2017-2018
        </li>
        <li>
          Curs de <strong>creació teatral</strong> amb Bàrbara Mestanza (The Mamzelles), 2018
        </li>
        <li>
          Modern Jazz, Escuela de <strong>baile</strong> Bailongu, Barcelona 2019
        </li>
      </ul>
    <h2>Teatre</h2>
      <ul>
        <li>
        "La Pols" dirigida per <strong>Pepa Fluvià</strong>, Barcelona 2019
        </li>
        <li>
        "Almost, Maine" dirigida per <strong>Pepa Fluvià</strong>, Barcelona 2019
        </li>
        <li>
        “A por quienes” de Raimundo Morte y creació col.lectiva, <strong>Porta 4</strong>, Barcelona 2019
        </li>
        <li>
        "Much Ado About Nothing" by William Shakespeare,<strong> The Lisbon Players </strong>at Estrella Hall, Lisboa 2017
        </li>
        <li>
        "The Stone Flower" by Elettra Sacchi,<strong> The Lisbon Players</strong> at Estrella Hall, Lisboa 2017
        </li>
        <li>
          "Olvida los Tambores" de Ana Diosdado,<strong> La Teatral</strong>, Barcelona 2014
        </li>
        <li>
        “La dama del alba” de Alejandro Casona,<strong> La Teatral</strong>, Barcelona 2013
        </li>
        <li>
        "Casats per Amor a la Pasta" de Lluís Coquard,<strong> La Teatral</strong>, Barcelona 2012
        </li>
        <li>
        "El Bon Doctor" d'Anton Tchéjov,<strong> La Teatral</strong>, Barcelona 2010
        </li>
      </ul>
    <h2>Càmera</h2>
      <ul>
        <li>
          Videoclip Musical <strong>"Transhumanismo"</strong>, d' Alan Neil, 2020
        </li>
        <li>
          Curtmetratge <strong>"Vino a un lugar"</strong>, de Luís Dickinson, 2020
        </li>
        <li>
          Curtmetratge <strong>"Entre Hilos"</strong>, de Judith Oliver, ECIB 2018
        </li>
        <li>
          Curtmetratge <strong>"La última posibilidad"</strong>, de Luís Dickinson, ESCAC 2018
        </li>
        <li>
          Curtmetratge <strong>"Danza"</strong>, de Gabriel Floro, ECIB 2018
        </li>
        <li>
          Curtmetratge <strong>"Café con Sal"</strong>, de Albert Picola, 2017
        </li>
        <li>
          Curtmetratge <strong>"Os Genios São Loucos ou Semi-deuses"</strong>, de Beactriz Guerreiro 2017
        </li>
      </ul>
      <br/>
      <p className={styles.languages}>Idiomes: <span><strong>Català</strong>, <strong>Espanyol</strong> (diferents accents), <strong>Anglès</strong> (americà/britànic), <strong>Portuguès</strong> (Portugal/brasileny)</span></p>
      <p className={styles.languages}>Instruments: <span>Bateria (bàsic), guitarra (bàsic), ukelele (mig)</span></p>
      <p className={styles.languages}>Esports: <span>Surf, futbol, tennis, ski, snowboard, natació, muntar a cavall.</span></p>
    </div>
    <Link to="/ca">- Torna a l'inici -</Link>
  </Layout>
)

export default CV
