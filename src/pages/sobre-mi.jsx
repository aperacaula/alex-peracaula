// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from '../styles/sobremi.module.scss'

const SobreMi = (props) => (
  <Layout page={'sobremi'} lan="es">
    <SEO title="Sobre Alex Peracaula" lang="es" description="Algo de información sobre mi, Alex Peracaula" />
    <h1>Sobre mí</h1>
    <p>Me llamo Àlex Peracaula Ruiz, y nací el 7 de octubre de 1993 en Barcelona y actualmente resido en Madrid.
      Mi pasión por la interpretación empezó muy temprano.
     Por influencia mayormente de mi abuelo, empecé a hacer teatro en la escuela y
     en el grupo de teatro amateur "La Teatral", perteneciente a "La Caixa", donde
     fui acumulando experiencia.</p>

    <p>Manteniéndome fiel al teatro, estudié Ingeniería Industrial
      en la Universitat Politècnica de Catalunya y acabé la carrera en Irvine, California,
      donde podían convivir diariamente mis estudios con mi pasión por el surf. Tras volver a Europa,
      completé un Máster de Ingeniería en Energías Renovables, en Lisboa, donde viví
       un año lleno de emociones. Allí fue donde me uní al grupo de teatro <a href="http://www.lisbonplayers.com.pt/site/">"The Lisbon Players"</a>,
     el grupo de teatro en inglés con más trayectoria de Portugal. Protagonizando dos
     de sus espectaculos, una obra original de Elettra Sachi, "The Stone Flower" y una producción de
     "Much Ado About Nothing" de William Shakespeare, pude trabajar con diferentes acentos ingleses
     y aplicar el conocimiento del idioma, hasta el momento profesional, encima de
     las tablas. Esta experiencia me alentó a perseguir mi sueño, siempre presente, de ser actor.
     </p>

    <p>Por ello, volví a Barcelona en 2017, para cursar la Formación Profesional
      del Actor en el Estudi Nancy Tuñón-Jordi Oliver, donde adquirí conocimientos básicos
      tanto sobre mis mecanismos emocionales como actor, como sobre técnicas
      necesarias para la interpretación. Estos fueron posteriormente complementados con muchos entrenamientos
      y cursos que han sumado experiencia al actor que soy hoy. Mis ganas y voluntad de actuar me han llevado a complementar
      esta inacabable formación con otra que considero más personal y que pasa por consumir teatro, cine,
      leer, escribir, participar en cortometrajes, obras de creación colectiva, cursos
      complementarios y, en definitiva, preocuparme por crecer como artista día a día.
       </p>

    <p>En paralelo, el deporte siempre ha estado presente durante mi vida, siendo el surf
      mi deporte favorito y el tenis el deporte que siempre he practicado. Como otras aficiones, también escribo poemas, que podéis ver en la sección de
      la web correspondiente, y como profesión paralela llevo dos años trabajando como desarrollador
        web coexistiendo con la formación teatral.</p>


    <Link to="/">- Volver al inicio -</Link>
  </Layout>
)

export default SobreMi
