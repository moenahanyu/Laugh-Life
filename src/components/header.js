/**@jsxRuntime classic */
/**@jsx jsx */

import React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/react'
import { jsx } from '@emotion/react'

import * as styles from '../styles/_header.module.scss'

export default () => (
  <header className={styles.header}>
    <h1 className={styles.logo}>Laugh Life</h1>
    <div className={styles.navWrap}>
        <div className={styles.nav}>
        <Link to={"/company/"}>Company</Link>
        <Link to={"/Business/"}>Business</Link>
        <Link to={"/Products/"}>Products</Link>
        <Link to={"/News/"}>News</Link>
        <Link to={"/contact/"} className={styles.contact}>Contact</Link>
        </div>
        <div className={styles.humbtn}>

        </div>
    </div>
  </header>
)

