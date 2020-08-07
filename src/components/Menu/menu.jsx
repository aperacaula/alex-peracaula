import React from 'react';
import styles from './menu.module.scss'
import { Link, navigate } from "gatsby"
import Slide from "react-reveal/Slide"


const Menu = ({ lan = 'es', slide, page }) => {
    let galeria = 'Galería';
    let galeriaUrl = '/galeria';
    let sobreMi = 'Sobre mí';
    let sobreMiUrl = '/sobre-mi';
    let poesia = 'Poesía';
    let poesiaUrl = '/poesia';
    let cv = 'Currículum';
    let cvUrl = '/cv';
    let contacto = 'Contacto';
    let contactoUrl = '/contacto';
    let videos = 'Vídeos';
    let videosUrl = '/videos';

    const routeDic = {
        galeria: {
            es: '/galeria',
            ca: '/ca/galeria',
            en: '/en/photos'
        },
        videos: {
            es: '/videos',
            ca: '/ca/videos',
            en: '/en/videos'
        },
        contacto: {
            es: '/contacto',
            ca: '/ca/contacte',
            en: '/en/contact'
        },
        sobremi: {
            es: '/sobre-mi',
            ca: '/ca/sobre-mi',
            en: '/en/about-me'
        },
        poesia: {
            es: '/poesia',
            ca: '/ca/poesia',
            en: '/en/poetry'
        },
        cv: {
            es: '/cv',
            ca: '/ca/cv',
            en: '/en/cv'
        }
    }

    switch (lan) {
        case 'en':
            galeria = 'Photos';
            galeriaUrl = '/en/photos';
            sobreMi = 'About me';
            sobreMiUrl = '/en/about-me';
            poesia = 'Poetry';
            poesiaUrl = '/en/poetry';
            cv = 'CV';
            cvUrl = '/en/cv';
            contacto = 'Contact';
            contactoUrl = '/en/contact';
            videos = 'Videos';
            videosUrl = '/en/videos';
            break
        case 'ca':
            galeria = 'Galeria';
            galeriaUrl = '/ca/galeria';
            sobreMi = 'Sobre mi';
            sobreMiUrl = '/ca/sobre-mi';
            poesia = 'Poesia';
            poesiaUrl = '/ca/poesia';
            cv = 'Currículum';
            cvUrl = '/ca/cv';
            contacto = 'Contacte';
            contactoUrl = '/ca/contacte';
            videos = 'Vídeos';
            videosUrl = '/ca/videos';
            break
        default:
            break
    }
    if (!slide) {
        return (
            <div className={styles.menu_container}>
                <Link to={galeriaUrl}>
                    <div className={styles.menu_box}>
                        {page === 'galeria'
                            ? <span><strong>{galeria}</strong></span>
                            : <span>{galeria}</span>
                        }
                    </div>
                </Link>
                <Link to={videosUrl}>
                    <div className={styles.menu_box}>
                        {page === 'videos'
                            ? <span><strong>{videos}</strong></span>
                            : <span>{videos}</span>
                        }
                    </div>
                </Link>
                <Link to={sobreMiUrl}>
                    <div className={styles.menu_box}>
                        {page === 'sobremi'
                            ? <span><strong>{sobreMi}</strong></span>
                            : <span>{sobreMi}</span>
                        }
                    </div>
                </Link>
                <Link to={poesiaUrl}>
                    <div className={styles.menu_box}>
                        {page === 'poesia'
                            ? <span><strong>{poesia}</strong></span>
                            : <span>{poesia}</span>
                        }
                    </div>
                </Link>
                <Link to={cvUrl}>
                    <div className={styles.menu_box}>
                        {page === 'cv'
                            ? <span><strong>{cv}</strong></span>
                            : <span>{cv}</span>
                        }
                    </div>
                </Link>
                <Link to={contactoUrl}>
                    <div className={styles.menu_box}>
                        {page === 'contacto'
                            ? <span><strong>{contacto}</strong></span>
                            : <span>{contacto}</span>
                        }
                    </div>
                </Link>
                <div className={styles.menu_box}>
                    <select
                        value={lan !== 'es' ? lan : 'es'}
                        onChange={(e) => {
                            let newRoute;
                            if (e.target.value !== 'es') {
                                newRoute = routeDic[page]
                                    ? routeDic[page][e.target.value] : `/${e.target.value}`
                            } else {
                                newRoute = routeDic[page]
                                    ? routeDic[page][e.target.value] : `/`
                            }
                            navigate(newRoute)
                            }}
                    >
                        <option value="es">
                            ES
                        </option>
                        <option value="ca">
                            CA
                        </option>
                        <option value="en">
                            EN
                        </option>
                    </select>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.menu_container}>
            <Slide right>
                <Link to={galeriaUrl}>
                    <div className={styles.menu_box}>
                        <span>{galeria}</span>
                    </div>
                </Link>
                <Link to={videosUrl}>
                    <div className={styles.menu_box}>
                        <span>{videos}</span>
                    </div>
                </Link>
                <Link to={sobreMiUrl}>
                <div className={styles.menu_box}>
                    <span>{sobreMi}</span>
                </div>
                </Link>
                <Link to={poesiaUrl}>
                <div className={styles.menu_box}>
                    <span>{poesia}</span>
                </div>
                </Link>
                <Link to={cvUrl}>
                <div className={styles.menu_box}>
                <span>{cv}</span>
                </div>
                </Link>
                <Link to={contactoUrl}>
                <div className={styles.menu_box}>
                    <span>{contacto}</span>
                </div>
                </Link>
                <div className={styles.menu_box}>
                    <select
                        value={lan !== 'es' ? lan : 'es'}
                        onChange={(e) => {
                            const newRoute = routeDic[page]
                                ? routeDic[page][e.target.value] : `/${e.target.value}`
                            navigate(newRoute)
                        }}
                    >
                        <option value="es">
                            ES
                        </option>
                        <option value="ca">
                            CA
                        </option>
                        <option value="en">
                            EN
                        </option>
                    </select>
                </div>
            </Slide>
        </div>
    )
}

export default Menu