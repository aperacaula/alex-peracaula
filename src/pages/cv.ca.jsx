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
      <h2>Formació</h2>
      <ul>
        <li>
          Acting in English, with Luci Lenox and Stephanie Figueira, 2020
        </li>
        <li>
          Formació professional de l'actor a Nancy Tuñón, Barcelona, 2017-2020
        </li>
        <li>
          Curs del actor delante de la cámara impartido por Esteve Rovira, 2019
        </li>
        <li>
          Curs de casting impartido por Pep Armengol, 2019
        </li>
        <li>
          Cant, clases impartides per Martina Tresserra, 2017-2018
        </li>
        <li>
          Curs de creació teatral amb Bàrbara Mestanza (The Mamzelles), 2018
        </li>
        <li>
          Modern Jazz 1, Escuela de baile Bailongu, Barcelona 2019
        </li>
      </ul>
    <h2>Teatro</h2>
      <ul>
        <li>
        "Almost, Maine" dirigida per Pepa Fluvià, Barcelona 2019
        </li>
        <li>
        “A por quienes” de Raimundo Morte y creació col.lectiva, Porta 4, Barcelona 2019
        </li>
        <li>
        "Much Ado About Nothing" by William Shakespeare, The Lisbon Players at Estrella Hall, Lisboa 2017
        </li>
        <li>
        "The Stone Flower" by Elettra Sacchi, The Lisbon Players at Estrella Hall, Lisboa 2017
        </li>
        <li>
          "Olvida los Tambores" de Ana Diosdado, La Teatral, Barcelona 2014
        </li>
        <li>
        “La dama del alba” de Alejandro Casona, La Teatral, Barcelona 2013
        </li>
        <li>
        "Casats per Amor a la Pasta" de Lluís Coquard, La Teatral, Barcelona 2012
        </li>
        <li>
        "El Bon Doctor" d'Anton Tchéjov, La Teatral, Barcelona 2010
        </li>
      </ul>
    <h2>Cámara</h2>
      <ul>
        <li>
          Videoclip Musical "Tengo Lágrimas", de Alan Neil, 2020
        </li>
        <li>
          Curtmetratge "Vino a un lugar", de Luís Dickinson, 2020
        </li>
        <li>
          Curtmetratge "Entre Hilos", de Judith Oliver, ECIB 2018
        </li>
        <li>
          Curtmetratge “La última posibilidad”, de Luís Dickinson, ESCAC 2018
        </li>
        <li>
          Curtmetratge "Danza", de Gabriel Floro, ECIB 2018
        </li>
        <li>
          Curtmetratge "Café con Sal", de Albert Picola, 2017
        </li>
        <li>
          Curtmetratge "Os Genios São Loucos ou Semi-deuses", de Beactriz Guerreiro 2017
        </li>
      </ul>
      <br/>
      <p className={styles.languages}>Idiomes: <span><strong>Català</strong>, <strong>Espanyol</strong> (diferents accents), <strong>Anglès</strong> (americà/britànic), <strong>Portuguès</strong> (Portugal/brasileny)</span></p>
      <p className={styles.languages}>Instruments: <span>Bateria (bàsic), guitarra (bàsic), ukelele (mig)</span></p>
      <p className={styles.languages}>Esports: <span>Surf, futbol, tennis, ski, snowboard, natació</span></p>
    </div>
    <Link to="/ca">- Torna a l'inici -</Link>
  </Layout>
)

export default CV
