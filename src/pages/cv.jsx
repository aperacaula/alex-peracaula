// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import styles from "../styles/cv.module.scss"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const CV = (props) => (
  <Layout page={'cv'}>
    <SEO title="Currículum Alex Peracaula" lang="es" description="Currículum artístico de Alex Peracaula. Repaso de la formación, proyectos de teatro, cine y audiovisual en los que he participado así como los idiomas que hablo."/>
    <h1>Currículum</h1>
    <div className={styles.cv_container}>
      <h2>Formación</h2>
      <ul>
        <li>
          Curso de casting con <strong>Rosa Estévez</strong>, Actores Madrid, 2020
        </li>
        <li>
          <strong>Acting in English</strong>, with Luci Lenox and Stephanie Figueira, 2020
        </li>
        <li>
          Formación profesional del actor en <strong>Nancy Tuñón</strong>, Barcelona, 2017-2020
        </li>
        <li>
          Curso del actor delante de la <strong>cámara</strong> impartido por <strong>Esteve Rovira</strong>, 2019  
        </li>
        <li>
          Curso de <strong>casting</strong> impartido por <strong>Pep Armengol</strong>, 2019
        </li>
        <li>
          <strong>Canto</strong>, clases impartidas por Martina Tresserra, 2017-2018
        </li>
        <li>
          Curso de <strong>creación teatral</strong> por Bárbara Mestanza (The Mamzelles), 2018
        </li>
        <li>
          Modern Jazz, Escuela de <strong>baile</strong> Bailongu, Barcelona 2019
        </li>
      </ul>
    <h2>Teatro</h2>
      <ul>
        <li>
        "La Pols" dirigida por <strong>Pepa Fluvià</strong>, Barcelona 2020     
        </li>
        <li>
        "Almost, Maine" dirigida por <strong>Pepa Fluvià</strong>, Barcelona 2019     
        </li>
        <li>
        “A por quienes” de Raimundo Morte y creación colectiva, <strong>Porta 4</strong>, Barcelona 2019 
        </li>
        <li>
        "Much Ado About Nothing" by William Shakespeare,<strong> The Lisbon Players</strong> at Estrella Hall, Lisboa 2017     
        </li>
        <li>
        "The Stone Flower" by Elettra Sacchi,<strong> The Lisbon Players</strong> at Estrella Hall, Lisboa 2017     
        </li>
        <li>
          "Olvida los Tambores" de Ana Diosdado,<strong> La Teatral </strong>, Barcelona 2014    
        </li>
        <li>
        “La dama del alba” de Alejandro Casona,<strong> La Teatral </strong>, Barcelona 2013      
        </li>
        <li>
        "Casats per Amor a la Pasta" de Lluís Coquard,<strong> La Teatral </strong>, Barcelona 2012      
        </li>
        <li>
        "El Bon Doctor" d'Anton Tchéjov,<strong> La Teatral </strong>, Barcelona 2010    
        </li>
      </ul>
    <h2>Cámara</h2>
      <ul>
        <li>
          Videoclip Musical <strong>"Transhumanismo"</strong>, de Alan Neil, 2020
        </li>
        <li>
          Cortometraje <strong>"Vino a un lugar"</strong>, de Luís Dickinson, 2020
        </li>
        <li>
          Cortometraje <strong>"Entre Hilos"</strong>, de Judith Oliver, ECIB 2018
        </li>
        <li>
          Cortometraje <strong>“La última posibilidad”</strong>, de Luís Dickinson, ESCAC 2018
        </li>
        <li>
          Cortometraje <strong>"Danza"</strong>, de Gabriel Floro, ECIB 2018
        </li>
        <li>
          Cortometraje <strong>"Café con Sal"</strong>, de Albert Picola, 2017
        </li>
        <li>
          Cortometraje <strong>"Os Genios São Loucos ou Semi-deuses"</strong>, de Beactriz Guerreiro 2017
        </li>
      </ul>
      <br/>
      <p className={styles.languages}>Idiomas: <span><strong>Catalán</strong>, <strong>Español</strong> (acentos varios), <strong>Inglés</strong> (americano/británico), <strong>Portugués</strong> (Portugal/brasileño)</span></p>
      <p className={styles.languages}>Instrumentos: <span>Batería (básico), guitarra (básico), ukelele (medio)</span></p>
      <p className={styles.languages}>Deportes: <span>Surf, fútbol, tennis, ski, snowboard, natación, montar a caballo.</span></p>
    </div>
    <Link to="/">- Volver al inicio -</Link>
  </Layout>
)

export default CV
