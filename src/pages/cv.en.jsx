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
    <h2>Appearance</h2>
      <p className={styles.languages}><span><strong>Height:</strong> 178cm   <strong>Hair:</strong> Dark (bald)   <strong>Eyes:</strong> Dark green</span></p>
      <p className={styles.languages}><span><strong>Trousers:</strong> 31   <strong>Shirt:</strong> 50   <strong>Shoe:</strong> 42.5</span></p>
    <br/>    
    <h2>Audiovisual</h2>
      <ul>
        <li>
          2021, <strong>"Honorarios, Baby"</strong>, Short Film, Lead, Alex Peracaula, Compass Studios
        </li>
        <li>
          2021, <strong>"Dies d'estiu i de pluja"</strong>, Feature Film, Supporting Role, codir. Mireia Labazuy, Àlex Serra i Clàudia Vila, Prod. UPF
        </li>
        <li>
          2021, <strong>"Washed Away"</strong>, Short Film, Supporting Role, Omar Bradosti
        </li>
        <li>
          2021, <strong>"The Weekend Thief"</strong>, Short Film, Lead, Omar Bradosti (Linki in 'Videos')
        </li>
        <li>
          2020, <strong>"Transhumanismo"</strong> de Alan Neil, Videoclip Musical, Lead, Kinki Factory, Kinki Factory Prod.
        </li>
        <li>
          2020, <strong>"Arriving Somewhere"</strong>, Short Film, Lead, Luís Dickinson, ESCAC
        </li>
        <li>
          2018, <strong>"Entre Hilos"</strong>, Short Film, Lead, Judith Oliver, ECIB
        </li>
        <li>
          2018, <strong>“La última posibilidad”</strong>, Short Film, Lead, Luís Dickinson, ESCAC
        </li>
        <li>
          2018, <strong>"Danza"</strong>, Short Film, Lead, Gabriel Floro, ECIB
        </li>
        <li>
          2017, <strong>"Café con Sal"</strong>, Short Film, Lead, Albert Picola, Blanquerna
        </li>
        <li>
          2017, <strong>"Os Genios São Loucos ou Semi-deuses"</strong>, Short Film, Secundari, Beactriz Guerreiro, ICA Port.
        </li>
      </ul>
      <h2>Theatre</h2>
      <ul>
        <li>
        2020, "La Pols", Jacob, Text, Pepa Fluvià, <strong>Sala Versus</strong>, Barcelona     
        </li>
        <li>
        2019, "Almost, Maine", Steve, Text, Pepa Fluvià, <strong> Estudi Nancy Tuñon</strong>, Barcelona     
        </li>
        <li>
        2019, “A por quienes”, Oscar, Text, Raimundo Morte y creación colectiva, <strong>Porta 4</strong>, Barcelona 
        </li>
        <li>
        2017, "Much Ado About Nothing", Claudio, Text, Rafaela Lacerda, <strong> The Lisbon Players</strong> at Estrella Hall, Lisboa     
        </li>
        <li>
        2017, "The Stone Flower", Danila, Text, Elettra Sacchi,<strong> The Lisbon Players</strong> at Estrella Hall, Lisboa     
        </li>
        <li>
        2014, "Olvida los Tambores", Pepe, Text, <strong> La Teatral </strong> Caixa Fòrum y APC, Barcelona   
        </li>
        <li>
        2013, “La dama del alba”, Mozo, Text, Magda Caballero, <strong> La Teatral </strong>, Caixa Fòrum y APC, Barcelona     
        </li>
        <li>
        2012, "Casats per Amor a la Pasta", Joan, Text, Magda Caballero,<strong> La Teatral </strong>, Caixa Fòrum y APC, Barcelona  
        </li>
      </ul>
      <h2>Training</h2>
      <ul>
        <li>
          2020- present, Actor Training at <strong>Estudi Laura Jou</strong>, Barcelona
        </li>
        <li>
          2020, Casting course with <strong>Rosa Estévez</strong>, Actores Madrid
        </li>
        <li>
          2020, <strong>Acting in English</strong>, with Luci Lenox and Stephanie Figueira
        </li>
        <li>
          2017-2020, <strong>Graduate in Professional Acting Degree at Nancy Tuñón</strong>, Barcelona
        </li>
        <li>
          2019, Acting for <strong>camera</strong> by <strong>Esteve Rovira</strong>
        </li>
        <li>
          2019, <strong>Casting</strong> course by <strong>Pep Armengol</strong>
        </li>
        <li>
          2017-2018, <strong>Singing</strong>, classes by Martina Tresserra
        </li>
        <li>
          2018, <strong>Theatre writing</strong> by Bárbara Mestanza (The Mamzelles)
        </li>
        <li>
          2019, Modern Jazz, Escuela de <strong>baile</strong> Bailongu, Barcelona
        </li>
      </ul>
      <br/>
      <p className={styles.languages}>Languages: <span><strong>Català (native)</strong>, <strong>Spanish</strong> (native, several accents), <strong>English</strong> (bilingual level), <strong>Portuguese</strong> (Portugal/brasilian)</span></p>
      <p className={styles.languages}>Habilities: <span> Industrial Engineering, web developer, drums (basic), guitar (basic), ukelele (basic), surf (12 years), futbol, tennis (federate), skiing, snowboard, swimming, horse riding, driving license.</span></p>
    </div>
    <Link to="/">- Back to Home -</Link>
  </Layout>
)

export default CV
