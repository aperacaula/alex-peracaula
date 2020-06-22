// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Poema from "../components/Poema/poema";

const Poesia = (props) => (
  <Layout page={'poesia'} lan={'ca'}>
    <SEO title="Poesia Alex Peracaula" lang="ca" description="Blog de poesia de l'Alex Peracaula Ruiz. Sóc un aficionat a la poesia i a l'escriptura i per això he decidit compartir aquí alguns dels meus poemes."/>
    <h1>Poemes</h1>
    <Poema title="No ta g a" first>
      En las lágrimas de alguien<br/>
      anidan todos los pájaros<br/>
      que no verán mi balcón.<br/>
      Y la araña en la esquina<br/>
      de una habitación hastiada<br/>
      poco a poco tejerá<br/>
      los días que aún nos quedan,<br/>
      fuel futuro de nostalgia.<br/>
      No escasean los niveles<br/>
      profundos y ya maltrechos<br/>
      de batallas rutinarias,<br/>
      y es por eso que detesto<br/>
      no saber cómo dotarme<br/>
      a mí, a mi otro yo,<br/>
      de nuevos abrazos torpes,<br/>
      de olor a asfalto mojado,<br/>
      de dominós y marfiles,<br/>
      de primeros escenarios.<br/>
    </Poema>
    <Poema title="Tiaviva">
      Cuando<br />
      pienso en ti<br />
      y sólo siento euforia,<br />
      de golpe añoro sudores de botellas,<br />
      volver a llevar joyas,<br />
      y que te rías en<br />
      mayúsculas.<br />
      Que huelas a pasado,<br />
      como el primer aire cálido de mayo.<br />
      Recordar que lo eres todo<br />
      porque aún no te<br />
      has concretado<br />
      en nada,<br />
      y por eso poder.<br />
      Escojo el caballo más bonito,<br />
      semiunicornio, y decido no mirar<br />
      más que al frente,<br />
      que ya es<br />
      detrás.<br />
      La grandísima<br />
      ventaja del ahora<br />
      serviría de moneda de cambio<br />
      al más caro<br />
      carrusel.<br />
    </Poema>
    <Poema title="Coronas">
    Sigo aturdido y flexionado,<br />
    seducido por un girasol borroso<br />
    y el murmullo de lluvia fría.<br />
    Ahora vivo instantes sin contexto<br />
    y pierdo el pudor a carraspear<br />
    porque me siento solo, estático.<br />
    Y si no fuera por mis dedos<br />
    raquíticos y destemplados<br />
    que rastrean páramos lejanos,<br />
    juraría que floto en un cuenco<br />
    estigio y de aroma exótico.<br />
    Quizás, ahora lo veo, sí que hay<br />
    un contexto. Una red de hiedras<br />
    y lianas que gotean savia dulce<br />
    al ser mordidas. Pasaría mi lengua<br />
    por esos tallos del tiempo<br />
    ficticio y de aroma erótico,<br />
    las veces que fuera necesario<br />
    con tal de entender, ni que fuera<br />
    por una sola vez, por qué no puede<br />
    ser siempre primavera.<br />

    </Poema>
    <Poema title="Normal">
    Un estrepitoso dolor muscular<br />
    apacigua el rebomborio del exterior:<br />
    La calma, que nos riñe por habernos<br />
    creido que algo podía llegar a ser<br />
    normal.<br />
    Normal como qué?<br />
    Normal como cuando?<br />
    Si, lleno de propósito, te disponías<br />
    a saltar de hora en hora;<br />
    ahora añoras cada minuto sin valorar,<br />
    cada segundo azul oscuro<br />
    de tu privilegiada y aria rutina.<br />
    Dar por sentado poder levantarse,<br />
    sillas con ruedas, sillas blancas<br />
    y sillas negras.<br />
    </Poema>
    <Poema title="101">
    Quieto en una esquina y más vivo que nunca,<br />
    sabe a chocolate y duele a frescura, se está bien, abierto.<br />
    Abierto al arte ajeno, a la poesía de incubadora.<br />
    Urticaria con crosta y qué sonrisa,<br />
    con ella me he tomado mi tiempo y me he quedado quieto.<br />
    Por este cuento teledirigido campan a sus anchas arenas movedizas, de grano fino. Cógelas si tienes huevos,<br />
    pues hay salitre en la memoria,<br />
    y a veces no bastará con regarla<br />
    para que se acuerde de estar mojada.<br />
    Nunca sabré estar en mi tiempo,<br />
    por las yemas queman las palabras<br />
    escritas y por mis ojos vuelan los mundos invisibles. Y todo me lo como yo, en ayer o mañana pero nunca en hoy.<br />
    </Poema>
    <Poema title="Peanuts">
    Era una familia, sí, una<br />
    de muchas posibles,<br />
    encajaba y era un completo,<br />
    un enjambre de personalidades<br />
    fantásticas y diferentes entre sí.<br />
    Era una familia, sí, una<br />
    la que ocupaba aquellos días<br />
    esa habitación de hotel<br />
    que es la vida, todo.<br />
    Fugaz cáscara y capullo de complejidad<br />
    por donde levitan historias,<br />
    carne de coco en bucle.<br />
    Fue una familia, sí, una<br />
    entre desconocidos,<br />
    pegamento y aliento,<br />
    osadía a toca teja, la que me regaló<br />
    muchos amaneceres y muchas puestas.<br />
    </Poema>
    <Poema title="Si por gotas fuera">
    Si por gotas fuera...<br />
    El no saber hacer,<br />
    deslumbrado por un<br />
    rectángulo de luz,<br />
    deviene el entero.<br />
    Ya no recuerdo qué<br />
    se hace cuando no<br />
    se hace nada,<br />
    cuando se engulle<br />
    aburrimiento.<br />
    He matado musarañas<br />
    sólo con mirarlas,<br />
    de tanto hacerlo, y<br />
    la culpa me atormenta.<br />
    Sí, siempre hay culpa.<br />
    </Poema>
    <Poema title="Medio">
    Hace poco pensé que quería ser famoso.<br />
    Que ya no me pongo por delante<br />
    un velo vacío y una sonrisa falsa,<br />
    una amabilidad cruel hacia los principios.<br />
    Soy más y quiero más,<br />
    verme en torres de piedra doradas<br />
    por el ritmo del halago, acosado por<br />
    la lente infinita de una cámara.<br />
    Adulación y admiración van por el décimo asalto y yo estoy saciado de palomitas,<br />
    pero engullo por poder.<br />
    Dinero, mayoría de edad, te doy por sentado.<br />
    Mi uretra riega la porcelana de vuestras horas.<br />
    Me hago centro de la vanidad (vanalidad) y demuestro así por qué no sólo me baño en la mediocridad<br />
    sino que me ahogo en ella,<br />
    </Poema>
    <Poema title="C<|">
    Vengo perdiendo llaves, las dejo en repisas<br />
    escondidas, olvidadas y peso menos.<br />
    Me olvido. Me libero de puertas, vehículos,<br />
    ventanas y candados. Cuánto pesan las llaves<br />
    de los candados, esas son las que me encanta perder, casi a propósito.<br />
    Liviano y estéril mi llavero tiene hambre,<br />
    hambre hueca y punzante, suelta pedos<br />
    de enfermo terminal y se deshace.<br />
    Le pido, por favor, que deje su música estridente a otros llaveros, que si no quiere<br />
    estar conmigo yo le regalo a un hermano, una amiga, que lo cargará de llaves y peluches,<br />
    pero que conmigo eso se acabó. Mis llaves<br />
    tienen que caberme en el bolsillo trasero<br />
    y no deben sonar cuando yo me acerque.<br />
    </Poema>
    <Poema title="Sonar">
    Luces que cerca brillan<br />
    en una noche sin final<br />
    de desencuentros altos<br />
    y bajos. Dónde estáis?<br />
    No estoy en tu aquí, eso si,<br />
    pero floto en una oscuridad<br />
    que arropa mi aire en el espacio<br />
    sin oxigeno, alzo la barbilla<br />
    y miro todo por encima del codo.<br />
    </Poema>
    <Poema title="Errores">
    Sabías que te habías equivocado,<br />
    coqueteabas con el error desnudo<br />
    y te parecía bien, corrías sin pisar.<br />
    Porque debe ser eso, no?<br />
    Me lo he creído, aquello que me han dicho,<br />
    me lo he creído<br />
    y se me imponen tormentos agudos,<br />
    tragos de saliva agria y silbante,<br />
    ahogos ácidos en ciénagas de recuerdos.<br />
    Suenan sirenas y velocidades muertas<br />
    transportan un algo de lo que fuimos<br />
    y de lo que pudimos ser.<br />
    </Poema>
    <Poema title="Altar y micrófono">
    Oportunidades inciertas llevadme a buen puerto,<br />
    que yo a ciegas os tomaré, no sin temor.<br />
    Renuncia cruel y sacrificio hostil el que me parte el alma, la que me rompe el pecho.<br />
    Qué raíces se oyen entre las lluvias?<br />
    Llueve y solea y nubla y euforia.<br />
    Sin quererlo el cambio ya es y nos abraza,<br />
    nos rebolca y nos impulsa en este mar picado que es el tiempo.<br />
    Flotamos en él, hundidos a tres metros, arqueando la espalda, libres,<br />
    y soltamos burbujas de mercurio que juegan a ser ilusiones, alegrías del ahora.<br />
    Mientras riamos no nos faltará el aire.<br />
    </Poema>
    <Poema title="Resaca, simple y llana">
      Jaqueca tremenda,<br />
      migraña puntiaguda<br />
      hedor de mierda<br />
      y plomo raído.<br />
      Salud te sientes<br />
      lejana y no te has ido,<br />
      deseo cuanto tengo<br />
      y sin embargo<br />
      no tengo lo que quiero<br />
      o lo que deseo,<br />
      sería fácil y vulgar.<br />
      No me interesa.<br />
    </Poema>
    <Poema title="Sin título">
      When you try your best and you don t succeed,<br />
      cuando todo tiembla y sientes miedo ajeno<br />
      miedo podrido de imposición, terror de contrariedad, cambio de planes, camino de zarzas incierto<br />
      y por tu persona quema la taquicardia del insomnio, noches de luces y sombras.<br />
      Temo encontrarme con ella,<br />
      tanto tiempo teniendo una mano que agarrar,<br />
      que cuando la vea no sabré qué decirle,<br />
      cómo mirarla, ni siquiera cómo hablar del tiempo. Del tiempo.<br />
    </Poema>
    <Poema title="Octubre">
      Libra, ideal ciego, yo te quiero<br />
      para mi en nosotros<br />
      y sólo encuentro libre<br />
      o libro, abierto, pero por el final,<br />
      veinte por acabar y doscientas leídas,<br />
      que pesan y huelen a quemado.<br />
      Arrastrado por su peso en este colchón<br />
      mullido, mi lado sigue fresco y yo<br />
      sudo, pegado, enredado entre unas piernas<br />
      que estrangulan para hacer sentir sofoco.<br />
      Mano abierta que aún te agarras a la mitad que me corresponde, arrástrame y llévame contigo al frío lugar donde quiero estar.<br />
    </Poema>
    <Poema title="irresponsable">
      un respiro de ahogo<br />
      una bocanada de agua<br />
      déjame acabar con esto<br />
      no por ti ni por mi<br />
      por nuestras ideas<br />
      por lo que sabemos que tiene que ser<br />
      que la responsabilidad no pinte la angustia<br />
      ni curve las vértebras hasta la mueca<br />
      inhala y exhala, porque al final<br />
      tu tienes sólo eso<br />
    </Poema>
    <Poema title="A. Manchado.">
      Hoy no vuelve<br />
      y no hay porqué.<br />
      En hoy no hay<br />
      ni es, germen<br />
      de mañana,<br />
      la razón de mi,<br />
      y la tuya<br />
      cae muy lenta<br />
      sin saber que<br />
      en nada y poco<br />
      dejará de ser.<br />
    </Poema>
    <Poema title="-.-">
      Sería un buen momento<br />
      para uno de esos dilemas vitales,<br />
      Una disyuntiva certera<br />
      Paliada por punzadas de vitalidad.<br />
      Dolorosa por su innegable asertividad,<br />
      Un regalo de la vida para probarse a sí misma,<br />
      Para reafirmarse cuando ya te olvidabas de ella.<br />
      Sin estos muñones sin ramas<br />
      Nos estaríamos perdiendo un sentido,<br />
      Simno el sentido, de todo junto.<br />
      Y ahora quiero una. Una prueba irrefutable<br />
      De que yo sigo siendo y sigo feliz de serlo.<br />
      Quiero la agitación y la sombra del error,<br />
      Sentir el potencial de la precipitación,<br />
      El hormigueo del acierto,<br />
      Los posibles futuros que nunca se darán<br />
      Pero que amo con fuerza y aprieto<br />
      Contra mi pecho y mi pulmón.<br />
      De todos ellos me basta uno,<br />
      Y en uno yo lo querré absolutamente todo.<br />
    </Poema>
    <Poema title="Ya no escribo.">
      Ya no escribo. No hay tiempo.<br />
      Sin poder empujas el reto,<br />
      tu compromiso se deshace<br />
      en culpa picante y pesa,<br />
      cae.<br />
      Qué hacía antes que no hago<br />
      ahora? Es el cansancio,<br />
      de vivir, sin ser malo, siendo<br />
      sólo pereza. Un estado<br />
      pleno,<br />
      tumbado en un diván, hundido,<br />
      latiendo, latiendo. El tiempo<br />
      que no hay se para y se torna <br />
      aire de dentro, y aire de fuera.<br />
      Fluye en ti, en tus muelas húmedas.<br />
      Cuidado al levantarte, no verás nada,<br />
      ni dónde han ido quién, ni cómo<br />
      ni cuando, pero sabrás<br />
      que ciento volando dan más que un mañana.<br />
    </Poema>
    <Poema title="{>|<}">
      Que hay en el alma del deseo?<br />
      Observa los centros rebosando ansiedad,<br />
      Dame impaciencia derivada de ganas y de hambre<br />
      que haré de ella sangre,<br />
      inflamable y con olor químico.<br />
      Te escapas tanto de mis manos, deseo,<br />
      que temo que tales todo mi bosque<br />
      tan sólo para ver un atardecer.<br />
      O que lo tales incluso para verlo.<br />
      No sé cuál, sinceramente, sería peor.<br />
      Lo que si sé, es que si lo haces,<br />
      quiero que cuides de mi, de mi cordura,<br />
      y de mi persona. Quiero que seques las<br />
      lágrimas antes de que caigan y que me<br />
      brilles la sonrisa antes de reír.<br />
      Hagas lo que hagas, compañero egoísta,<br />
      manzana de esquizofrenia,<br />
      quiéreme, por favor, que yo<br />
      ya lo hago sin quererlo.<br />
    </Poema>
    <Poema title="IX">
      Calma que te irrita los ojos,<br />
      Paz que lleva resto,<br />
      Un punto de break que separa<br />
      Un instante del tiempo.<br />
      Sin ti cómodo, por ahora,<br />
      Añoro un abrazo<br />
      ¿Dónde estarás?<br />
      Lánzame una obviedad<br />
      Que me distinga de todos<br />
      Un recorte que me engañe,<br />
      Porque quiero tus pecas<br />
      Y tus almendras.<br />
      Pero tu no llegas.<br />
      Me pides lucha<br />
      Y me exiges óxido de fe.<br />
      Por eso dudo mucho,<br />
      ¿Existirás?<br />
    </Poema>
    <Poema title="NA">
      Ahora (o ahorra) que me he quedado solo<br />
      veo contra las paredes de un caleidoscopio<br />
      cambiantes e ilusas<br />
      falsas<br />
      que nunca fue esto lo que quería<br />
      que siempre busqué para abrirme<br />
      y dejar entrar,<br />
      pero tardío tu, como de costumbre,<br />
      ahora vulnerable te jodes y callas,<br />
      y escribes, solamente.<br />
    </Poema>
    <Poema title="Si dijera que no">
    Hay preguntas con una sola respuesta.<br />
    Metidas y enredadas en un instante,<br />
    una hora, una o un mañana,<br />
    ahogadas por un contexto<br />
    con todo el agobio que eso supone;<br />
    tienen una única salida. Porque<br />
    no se concibe un escenario,<br />
    de teatro o no, en donde se diga<br />
    un si y no un no. Desataría tal tormenta<br />
    que los cimientos mismos del tiempo,<br />
    rellenos de cristal roto, sucumbirían<br />
    y arrastrarían consigo todo lo que uno es,<br />
    quizás, ojalá, solamente por ese instante que enreda,<br />
    pero seguramente, joder, por y para siempre.<br />
    </Poema>
    <Poema title="Defecar oscuro">
      No me fío de los baños <br />
      Que huelen fuertemente a ambientador.<br />
      El lápiz se me pega en los dedos<br />
      Y repudio algún pelo enredado.<br />
      Deber y cama,<br />
      Reposo y responsable.<br />
      Sin ver muy bien cómo<br />
      esta corriente huele<br />
      a verano mojado y a risas.<br />
      Trae suavidad a mis gestos<br />
      Que esquivan coches por calles<br />
      de un solo carril.<br />
      La insistencia de alguno<br />
      No basta para romperme el espacio.<br />
      Ya no huele bien ni mal,<br />
      Ahora sólo llena de verde el gris.<br />
      Raíces y lagos naturales,<br />
      Pertenezco al todo que es<br />
      estar sin hacer nada.<br />
    </Poema>
    <Poema title="Tormenta de verano">
    Las mismas ancianas recostadas<br />
    riendo a carcajadas<br />
    De lo cotidiano,<br />
    De la octava historia.<br />
    Y una se alza<br />
    En cuerpo y voz<br />
    Para recordar relámpagos,<br />
    Lluvia cálida,<br />
    Que te sorprende mientras pedaleas<br />
    Y te empapas.<br />
    Lo compartido por el espacio<br />
    Y el tiempo late entre nosotros<br />
    aunque seamos diferentes:<br />
    Una plaga en el planeta,<br />
    Estornudo del tiempo,<br />
    Escupitajo de la historia.<br />
    </Poema>
    <Poema title="Visceral">
    Las vísceras de las vísperas<br />
    Toman un suspiro en un nido de águilas<br />
    Y me llevan al sueño intranquilo<br />
    de quien va a conocerla por primera vez.<br />
    <br />
    Y dan paso a las playas de noche,<br />
    Al aislamiento abierto con un hilo de música.<br />
    Se mueven tus labios silenciosos, incapaces<br />
    De alcanzar el tono deseado, que sí humedece tu mente.<br />
    Esa habitación oscura y vacía, también lúcida y concurrida, incorpórea.<br />
    Óleo sin límites de pericia, píntame en tu lienzo con tu mano talentosa<br />
    Todo cuanto mi arpa pueda darte. Que yo nunca te enseñé,<br />
    Y sin darte nada a conciencia me haces consciente.<br />
    Me entretienes y me tienes por toda tu extensión<br />
    De dudas y admiración.<br />
    La curiosidad rompe unas líneas vírgenes e inocentes<br />
    Que mis ojos siembran en el aire,<br />
    Entre yo y el mundo,<br />
    Y éste ve lo que ellos ven.<br />
    <br />
    Acaríciame, cuerda enmarañada,<br />
    Las palmas curtidas de barras y sudor,<br />
    Y sepárame del verde y el mar. Crepita<br />
    en tu madera cuando yo te balancee<br />
    mientras lo haga, consciente de que el ahora ya está.<br />
    </Poema>
    <br/>
    <br />
    <Link to="/">- Volver al inicio -</Link>    
  </Layout>
)

export default Poesia
