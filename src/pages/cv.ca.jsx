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
      <br/>
      <h2>Audiovisual</h2>
      <ul>
        <li>
          2021, <strong>"Honorarios, Baby"</strong>, Curtmetratge, Protagonista, Alex Peracaula, Compass Studios
        </li>
        <li>
          2021, <strong>"Dies d'estiu i de pluja"</strong>, Llargmetratge, Secundari, codir. Mireia Labazuy, Àlex Serra i Clàudia Vila, Prod. UPF
        </li>
        <li>
          2021, <strong>"Washed Away"</strong>, Curtmetratge, Secundari, Omar Bradosti
        </li>
        <li>
          2021, <strong>"The Weekend Thief"</strong>, Curtmetratge, Protagonista, Omar Bradosti (link a 'Vídeos')
        </li>
        <li>
          2020, <strong>"Transhumanismo"</strong> de Alan Neil, Videoclip Musical, Protagonista, Kinki Factory, Kinki Factory Prod.
        </li>
        <li>
          2020, <strong>"Arriving Somewhere"</strong>, Curtmetratge, Protagonista, Luís Dickinson, ESCAC
        </li>
        <li>
          2018, <strong>"Entre Hilos"</strong>, Curtmetratge, Protagonista, Judith Oliver, ECIB
        </li>
        <li>
          2018, <strong>“La última posibilidad”</strong>, Curtmetratge, Protagonista, Luís Dickinson, ESCAC
        </li>
        <li>
          2018, <strong>"Danza"</strong>, Curtmetratge, Protagonista, Gabriel Floro, ECIB
        </li>
        <li>
          2017, <strong>"Café con Sal"</strong>, Curtmetratge, Protagonista, Albert Picola, Blanquerna
        </li>
        <li>
          2017, <strong>"Os Genios São Loucos ou Semi-deuses"</strong>, Curtmetratge, Secundari, Beactriz Guerreiro, ICA Port.
        </li>
      </ul>
      <h2>Teatre</h2>
      <ul>
        <li>
        2020, "La Pols", Jacob, Text, Pepa Fluvià, <strong>Sala Versus</strong>, Barcelona     
        </li>
        <li>
        2019, "Almost, Maine", Steve, Text, Pepa Fluvià, <strong>Estudi Nancy Tuñón</strong>, Barcelona     
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
      <h2>Formació</h2>
      <ul>
        <li>
          2020- present, Entrenament Actoral a <strong>Estudi Laura Jou</strong>, Barcelona
        </li>
        <li>
          2020, Curs de càsting con <strong>Rosa Estévez</strong>, Actores Madrid
        </li>
        <li>
          2020, <strong>Acting in English</strong>, with Luci Lenox and Stephanie Figueira
        </li>
        <li>
          2017-2020, <strong>Graduat Formació professional de l'actor a Nancy Tuñón</strong>, Barcelona
        </li>
        <li>
          2019, Curs de l'actor davant la <strong>càmara</strong> impatrit per <strong>Esteve Rovira</strong>
        </li>
        <li>
          2019, Curs de <strong>càsting</strong> impatrit per <strong>Pep Armengol</strong>
        </li>
        <li>
          2017-2018, <strong>Cant</strong>, clases impartidas per Martina Tresserra
        </li>
        <li>
          2018, Curs de <strong>creació teatral</strong> per Bárbara Mestanza (The Mamzelles)
        </li>
        <li>
          2019, Modern Jazz, Escuela de <strong>baile</strong> Bailongu, Barcelona
        </li>
      </ul>
      <br/>
      <p className={styles.languages}>Idiomes: <span><strong>Català</strong>, <strong>Espanyol</strong> (accents variats), <strong>Anglès</strong> (nivell bilingüe), <strong>Portuguès</strong> (portugal/brasileny)</span></p>
      <p className={styles.languages}>Habilitats: <span> Enginyer Industrial, programador web, batería (nocions), guitarra (nocions), ukelele (nocions), surf (12 anys), futbol, tennis (federat), ski, snowboard, natació, muntar a cavall, carnet conduir B1.</span></p>
    </div>
    <Link to="/ca">- Torna a l'inici -</Link>
  </Layout>
)

export default CV
