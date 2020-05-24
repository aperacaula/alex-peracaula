import React from 'react';
import styles from './footer.module.scss';

const Footer = () => (
    <footer>
        <div>
            © {new Date().getFullYear()}, by
            {` `}
            <a href="">Àlex Peracaula Ruiz</a>
        </div>
    </footer>
)


export default Footer;