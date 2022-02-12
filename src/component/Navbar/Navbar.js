import React from 'react';
import icon from "../../assets/icon/asd21312sadas.PNG"
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <div className={styles.header}>
            <img className={ styles.image } src={ icon } alt="img-icon"/>
            <div className={styles.links}>
                <Link to="/">
                    Swap
                </Link>
                <Link to="/">
                    Pool
                </Link>
                <Link to="/">
                    Vote
                </Link>
                <Link to="/">
                    Charts
                </Link>
            </div>
            <div className={styles.containerthird}>
                <div className={styles.imagecontainer}>
                    <img src={icon} alt="axe"/>
                    <p>Ethereum</p>
                </div>
                <button>
                    Connect Wallet
                </button>
            </div>
        </div>

    );
};

export default Navbar;