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
      <h2>Datos</h2>
      <p className={styles.languages}><span><strong>Altura:</strong> 178cm   <strong>Pelo:</strong> Castaño (rapado)   <strong>Ojos:</strong> Verde castaño</span></p>
      <p className={styles.languages}><span><strong>Pantalón:</strong> 31   <strong>Camisa:</strong> 50   <strong>Zapato:</strong> 42.5</span></p>
      <br/>      
      <h2>Audiovisual</h2>
      <ul>
        <li>
          2021, <strong>"Washed Away"</strong>, Cortometraje, Secundario, Omar Bradosti
        </li>
        <li>
          2021, <strong>"The Weekend Thief"</strong>, Cortometraje, Protagonista, Omar Bradosti, (Link en 'Vídeos')
        </li>
        <li>
          2020, <strong>"Transhumanismo"</strong> de Alan Neil, Videoclip Musical, Protagonista, Kinki Factory, Kinki Factory Prod.
        </li>
        <li>
          2020, <strong>"Arriving Somewhere"</strong>, Cortometraje, Protagonista, Luís Dickinson, ESCAC
        </li>
        <li>
          2018, <strong>"Entre Hilos"</strong>, Cortometraje, Protagonista, Judith Oliver, ECIB
        </li>
        <li>
          2018, <strong>“La última posibilidad”</strong>, Cortometraje, Protagonista, Luís Dickinson, ESCAC
        </li>
        <li>
          2018, <strong>"Danza"</strong>, Cortometraje, Protagonista, Gabriel Floro, ECIB
        </li>
        <li>
          2017, <strong>"Café con Sal"</strong>, Cortometraje, Protagonista, Albert Picola, Blanquerna
        </li>
        <li>
          2017, <strong>"Os Genios São Loucos ou Semi-deuses"</strong>, Cortometraje, Secundario, Beactriz Guerreiro, ICA Port.
        </li>
      </ul>
      <h2>Teatro</h2>
      <ul>
        <li>
        2020, "La Pols", Jacob, Texto, Pepa Fluvià, <strong>Sala Versus</strong>, Barcelona     
        </li>
        <li>
        2019, "Almost, Maine", Steve, Texto, Pepa Fluvià, <strong>Estudi Nancy Tuñón</strong>, Barcelona     
        </li>
        <li>
        2019, “A por quienes”, Oscar, Texto, Raimundo Morte y creación colectiva, <strong>Porta 4</strong>, Barcelona 
        </li>
        <li>
        2017, "Much Ado About Nothing", Claudio, Texto, Rafaela Lacerda, <strong> The Lisbon Players</strong> at Estrella Hall, Lisboa     
        </li>
        <li>
        2017, "The Stone Flower", Danila, Texto, Elettra Sacchi,<strong> The Lisbon Players</strong> at Estrella Hall, Lisboa     
        </li>
        <li>
        2014, "Olvida los Tambores", Pepe, Texto, <strong> La Teatral </strong> Caixa Fòrum y APC, Barcelona   
        </li>
        <li>
        2013, “La dama del alba”, Mozo, Texto, Magda Caballero, <strong> La Teatral </strong>, Caixa Fòrum y APC, Barcelona     
        </li>
        <li>
        2012, "Casats per Amor a la Pasta", Joan, Texto, Magda Caballero,<strong> La Teatral </strong>, Caixa Fòrum y APC, Barcelona  
        </li>
      </ul>
      <h2>Formación</h2>
      <ul>
        <li>
          2020- presente, Entrenamiento Actoral en <strong>Laura Jou</strong>, Barcelona
        </li>
        <li>
          2020, Curso de casting con <strong>Rosa Estévez</strong>, Actores Madrid
        </li>
        <li>
          2020, <strong>Acting in English</strong>, with Luci Lenox and Stephanie Figueira
        </li>
        <li>
          2017-2020, <strong>Graduado Formación profesional del actor en Nancy Tuñón</strong>, Barcelona
        </li>
        <li>
          2019, Curso del actor delante de la <strong>cámara</strong> impartido por <strong>Esteve Rovira</strong>
        </li>
        <li>
          2019, Curso de <strong>casting</strong> impartido por <strong>Pep Armengol</strong>
        </li>
        <li>
          2017-2018, <strong>Canto</strong>, clases impartidas por Martina Tresserra
        </li>
        <li>
          2018, Curso de <strong>creación teatral</strong> por Bárbara Mestanza (The Mamzelles)
        </li>
        <li>
          2019, Modern Jazz, Escuela de <strong>baile</strong> Bailongu, Barcelona
        </li>
      </ul>
      <br/>
      <p className={styles.languages}>Idiomas: <span><strong>Catalán</strong>, <strong>Español</strong> (acentos varios), <strong>Inglés</strong> (nivel bilingüe, americano/británico), <strong>Portugués</strong> (Portugal/brasileño)</span></p>
      <p className={styles.languages}>Habilidades: <span> Ingeniero Industrial, programador web, Batería (básico), guitarra (básico), ukelele (medio), Surf (12 años), fútbol, tennis (federado), ski, snowboard, natación, montar a caballo, carnet conducir B1.</span></p>
    </div>
    <Link to="/">- Volver al inicio -</Link>
  </Layout>
)

export default CV
