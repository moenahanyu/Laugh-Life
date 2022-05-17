/**@jsxRuntime classic */
/**@jsx jsx */

import React from "react"
import {useState} from "react";
import { Link } from "gatsby"
import { css } from '@emotion/react'
import { jsx } from '@emotion/react'

import * as styles from '../styles/_header.module.scss'


// const [openMenu, setOpenMenu] = useState(false);
// const menuFunction = () => {
//   setOpenMenu(!openMenu);
// }
// export default () => (
//   <header className={styles.header}>
//     <h1 className={styles.logo}>Laugh Life</h1>
//     <div className={styles.navWrap}>
//         <div className={styles.nav}>
//         <Link to={"/company/"}>Company</Link>
//         <Link to={"/Business/"}>Business</Link>
//         <Link to={"/Products/"}>Products</Link>
//         <Link to={"/News/"}>News</Link>
//         <Link to={"/contact/"} className={styles.contact}>Contact</Link>
//         </div>
//         <div className={styles.openMenu} onClick={menuFunction}>
//             <span className={openMenu ? styles.open : undefined}></span>
//             <span className={openMenu ? styles.open : undefined}></span>
//         </div>
//     </div>
//   </header>
// )

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuFunction = () => {
      setOpenMenu(!openMenu);
    }
  
    return(
        <header className={styles.header}>
        <Link to={"/"}>
            <h1 className={styles.logo}>Laugh Life</h1>
        </Link>
        <div className={styles.navWrap}>
            <div className={styles.nav}>
            <Link to={"/company/"}>Company</Link>
            <Link to={"/Business/"}>Business</Link>
            <Link to={"/Products/"}>Products</Link>
            <Link to={"/News/"}>News</Link>
            <Link to={"/contact/"} className={styles.contact}>Contact</Link>
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