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
       de l'actor a l'Estudi Nancy Tuñón-Jordi Oliver, on he pogut aprofundir en l'art més enllà de la practicitat
       amb la que m'havia format fins ara, aprenent sobre els meus mecanismes emocionals com actor i treballar les tècniques de cos i veu.
       Les meves ganes i voluntat d'interpretar m'han portat a complementar aquesta formació amb una altra
       que considero més personal i que passa per consumir teatre, cinema, llegir, escriure,
       participar en curtmetratges, obres de creació col.lectiva, cursos complementaris i, en definitiva,
       preocupar-me per créixer com a artista dia rere dia.</p>
     
      <p>Paral.lelament l'esport sempre ha estat present a la meva vida, sent el surf el meu
        esport preferit i el tennis el que fa més temps que practico. També escric poesia, que 
        es pot llegir a la secció web corresponent i actualment complemento amb la interpretació
        la professió de desenvolupador web, que practico des de fa dos anys.</p>


    <Link to="/ca">- Tornar a l'inici -</Link>
  </Layout>
)

export default SobreMi
