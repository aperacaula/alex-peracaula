// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from '../styles/sobremi.module.scss'

const SobreMi = (props) => (
  <Layout page={'sobremi'} >
    <SEO title="Sobre mí" />
    <h1>Sobre mí</h1>
    <p>Em dic Àlex Peracaula Ruiz, i vaig néixer el 7 de octubre de 1993 en Barcelona.
      La meva passió pel teatre va començar ben d'hora. Per influència majoritàriament
      del meu avi, vaig començar a fer teatre a l'escola i al grup de teatre 'La Teatral',
      pertanyent a 'La Caixa'. Allà vaig començar a aprendre a actuar des de la pràctica, 
      cada vegada enfrentant-me a personatges més interessants.</p>
 
     <p>Mantenint el teatre com un hobbie necessari, vaig estudiar Enginyeria Industrial a l'
       UPC de Barcelona i vaig acabar la carrera a l'University of California Irvine, California,
       on podia compaginar diàriament els meus estudis amb la meva passió pel surf. Després de tornar
       a Europa, vaig completar un Màster en Energies Renovables a Lisboa, on vaig viure un any ple d'emocions i
       descobriments. Allà em vaig unir al grup de teatre <a href="http://www.lisbonplayers.com.pt/site/">"The Lisbon Players"</a>,
       el grup de teatre en anglès amb més trajectòria de Portugal. Protagonitzant dos dels seus espectacles,
       'The Stone Flower', una obra original d'Elettra Sachi i 'Much Ado About Nothing' de Shakespeare, 
       vaig poder treballar l'anglès de diferents formes sobre l'escenari i vaig poder ampliar la dominancia
       sobre l'idioma que havia adquirit en l'àmbit professional. Aquesta experiència em va encoratjar
       a perseguir el meu somni sempre present de ser actor.</p>

     <p>Amb aquesta intenció vaig tornar a Barcelona al 2017 per tal de cursar la Formació professional
       de l'actor a l' Estudi Nancy Tuñón-Jordi Oliver, donde he adquirido nuevos conocimientos
       tanto sobre mis mecanismos emocionales como actor, como sobre técnicas
       necesarias para la interpretación. Mis ganas y voluntad de actuar me han llevado a complementar
       esta formación con otra que considero más personal y que pasa por consumir teatro, cine,
       leer, escribir, participar en cortometrajes, obras de creación colectiva, cursos
       complementarios y, en definitiva, preocuparme por crecer como artista día a día.
       </p>
     
      <p>El deporte siempre ha estado presente durante mi vida, y el surf y el tenis son
        mis dos prácticas favoritas. También escribo poemas, que podéis ver en la sección de
        la web correspondiente, y actualmente llevo dos años trabajando como desarrollador
        web de forma paralela a la formación teatral.</p>


    <Link to="/">- Volver al inicio -</Link>
  </Layout>
)

export default SobreMi
