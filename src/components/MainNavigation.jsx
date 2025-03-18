import { NavLink } from "react-router";

import styles from "./MainNavigation.module.css";
import MovieIcon from '../assets/cinema.png';
import HeaderBGImg from '../assets/cherry_bg.png';

function MainNavigation() {
    const navLinks = [
        {to: '/', text: 'Home'},
        {to: '/reviews', text: 'Movie Reviews'},
        {to: '/playing', text: 'Now Playing'},
        {to: '/about', text: 'About'},
    ];

    const activeStyle = {
        color: "#740B39",
        textDecoration: "underline",
    }

    return (
        <header className={styles.header}>
            <nav>
                <img 
                    className={styles.icon} 
                    src={MovieIcon} 
                    alt="movies icon" />
                <ul className={styles.ul}>
                    {
                        navLinks.map((link) => (
                            // Link text is be unique
                            <li key={link.text}>
                                <NavLink 
                                    to={link.to}
                                    style={({isActive}) => (
                                        isActive ? activeStyle : {}
                                    )}>
                                        {link.text}
                                    </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <img 
                src={HeaderBGImg} 
                alt="Cherry blossum tree branch"
                className={styles.bgImg} 
                />
        </header>
    );
}

export default MainNavigation;