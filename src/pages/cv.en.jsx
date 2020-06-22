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
          Professional Acting Degree in Nancy Tuñón, Barcelona, 2017-2020
        </li>
        <li>
          Camera Acting by Esteve Rovira, 2019  
        </li>
        <li>
          Casting Course by Pep Armengol, 2019
        </li>
        <li>
          Singing classes by Martina Tresserra, 2017-2018
        </li>
        <li>
          Play Creation by Bárbara Mestanza (The Mamzelles), 2018
        </li>
        <li>
          Modern Jazz 1, Escuela de baile Bailongu, Barcelona 2019
        </li>
      </ul>
    <h2>Theatre</h2>
      <ul>
        <li>
        "Almost, Maine" directed by Pepa Fluvià, Barcelona 2019     
        </li>
        <li>
        “A por quienes” by Raimundo Morte y creación colectiva, Porta 4, Barcelona 2019 
        </li>
        <li>
        "Much Ado About Nothing" by William Shakespeare, The Lisbon Players at Estrella Hall, Lisboa 2017     
        </li>
        <li>
        "The Stone Flower" by Elettra Sacchi, The Lisbon Players at Estrella Hall, Lisboa 2017     
        </li>
        <li>
          "Olvida los Tambores" by Ana Diosdado, La Teatral, Barcelona 2014    
        </li>
        <li>
        “La dama del alba” by Alejandro Casona, La Teatral, Barcelona 2013      
        </li>
        <li>
        "Casats per Amor a la Pasta" by Lluís Coquard, La Teatral, Barcelona 2012      
        </li>
        <li>
        "El Bon Doctor" d'Anton Tchéjov, La Teatral, Barcelona 2010    
        </li>
      </ul>
    <h2>Camera</h2>
      <ul>
        <li>
          Musical Clip "Tengo Lágrimas", of Alan Neil, 2020
        </li>
        <li>
          Short Film "Vino a un lugar", of Luís Dickinson, 2020
        </li>
        <li>
          Short Film "Entre Hilos", of Judith Oliver, ECIB 2018
        </li>
        <li>
          Short Film “La última posibilidad”, of Luís Dickinson, ESCAC 2018
        </li>
        <li>
          Short Film "Danza", of Gabriel Floro, ECIB 2018
        </li>
        <li>
          Short Film "Café con Sal", of Albert Picola, 2017
        </li>
        <li>
          Short Film "Os Genios São Loucos ou Semi-deuses", of Beactriz Guerreiro 2017
        </li>
      </ul>
      <h2>Languages</h2>
      <ul>
        <li>
          Catalan
        </li>
        <li>
          Spanish
        </li>
        <li>
          English
        </li>
        <li>
          Portuguese
        </li>
      </ul>
    </div>
    <Link to="/">- Back to Home -</Link>
  </Layout>
)

export default CV
