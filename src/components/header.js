/**@jsxRuntime classic */
/**@jsx jsx */

import React from "react"
import {useState} from "react";
import { Link } from "gatsby"
import { css } from '@emotion/react'
import { jsx } from '@emotion/react'
import Image from "../components/image" //追加

import * as styles from '../styles/_header.module.scss'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuFunction = () => {
      setOpenMenu(!openMenu);
    }
  
    return(
        <header className={styles.header}>
        <Link to={"/"}>
            <h1 className={styles.logo}>
                <Image filename="logo.png" alt="株式会社ラフライフ" /> 
            </h1>
        </Link>
        <div className={styles.navWrap}>
            <div className={styles.nav}>
            <Link to={"/company/"}>Company</Link>
            {/* <Link to={"/business/"}>Business</Link> */}
            <Link to={"/products/"}>Products</Link>
            {/* <Link to={"/news/"}>News</Link> */}
            <Link to={"/contact/"} className={styles.contact}>Contact</Link>
            </div>
            <div className={styles.openMenu} onClick={menuFunction}>
                <span className={openMenu ? styles.open : styles.close}></span>
                <span className={openMenu ? styles.open : styles.close}></span>
            </div>
        </div>
        <div className={openMenu ? styles.humNavWrapOpen : styles.humNavWrap} onClick={menuFunction}>
            <div className={styles.nav}>
            <Link to={"/company/"} onClick={menuFunction}>Company</Link>
            {/* <Link to={"/business/"} onClick={menuFunction}>Business</Link> */}
            <Link to={"/products/"} onClick={menuFunction}>Products</Link>
            {/* <Link to={"/news/"} onClick={menuFunction}>News</Link> */}
            <Link to={"/contact/"} onClick={menuFunction} className={styles.contact}>Contact</Link>
            </div>
            <div className={styles.openMenu} onClick={menuFunction}>
                <span className={openMenu ? styles.open : styles.close}></span>
                <span className={openMenu ? styles.open : styles.close}></span>
            </div>
        </div>
      </header>
    );
  };
  
  export default Header;