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
      <p className={styles.languages}>Idiomas: <span>Catalán, Español, Inglés, Portugués</span></p>
      <h2>Formación</h2>
      <ul>
        <li>
          Formación profesional del actor en Nancy Tuñón, Barcelona, 2017-2020
        </li>
        <li>
          Curso del actor delante de la cámara impartido por Esteve Rovira, 2019  
        </li>
        <li>
          Curso de casting impartido por Pep Armengol, 2019
        </li>
        <li>
          Canto, clases impartidas por Martina Tresserra, 2017-2018
        </li>
        <li>
          Curso de creación teatral por Bárbara Mestanza (The Mamzelles), 2018
        </li>
        <li>
          Modern Jazz 1, Escuela de baile Bailongu, Barcelona 2019
        </li>
      </ul>
    <h2>Teatro</h2>
      <ul>
        <li>
        "Almost, Maine" dirigida por Pepa Fluvià, Barcelona 2019     
        </li>
        <li>
        “A por quienes” de Raimundo Morte y creación colectiva, Porta 4, Barcelona 2019 
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
          Cortometraje "Vino a un lugar", de Luís Dickinson, 2020
        </li>
        <li>
          Cortometraje "Entre Hilos", de Judith Oliver, ECIB 2018
        </li>
        <li>
          Cortometraje “La última posibilidad”, de Luís Dickinson, ESCAC 2018
        </li>
        <li>
          Cortometraje "Danza", de Gabriel Floro, ECIB 2018
        </li>
        <li>
          Cortometraje "Café con Sal", de Albert Picola, 2017
        </li>
        <li>
          Cortometraje "Os Genios São Loucos ou Semi-deuses", de Beactriz Guerreiro 2017
        </li>
      </ul>
    </div>
    <Link to="/">- Volver al inicio -</Link>
  </Layout>
)

export default CV
