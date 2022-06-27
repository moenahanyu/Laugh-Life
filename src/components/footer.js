import React from "react"
import { Link } from "gatsby"
import Image from "../components/image" //追加

import * as styles from '../styles/_footer.module.scss'

export default () => (
  <footer>
    <div className={styles.contact}>
     <div class="container">
       <h2 className={`sub-title ${styles.subTitle}`}>
         <span class="en">CONTACT</span>
         <span>お問い合わせ</span>
      </h2>
      <div className={styles.circleContainer}>
        <Link to={"/contact/"} className={styles.circle}>
          <p class="en">View Contact</p>
        </Link>
        <div className={styles.item}></div>
      </div>
     </div>
    </div>
    <div className={styles.footer}>
      <div class="container">
        <div className={styles.footerWrap}>
          <div className={styles.footerLeft}>
            <h1 className={styles.logo}><Image filename="logo.png" alt="株式会社ラフライフ" /></h1>
            <p>株式会社Laugh Life</p>
          </div>
          <div className={styles.footerRight}>
            <dl>
              <dt>Address</dt>
              <dd>東京都渋谷区道玄坂３丁目１０番１８号パークハビオ渋谷３０５</dd>
            </dl>
            <dl>
              <dt>Tell</dt>
              <dd>03-6631-1740</dd>
            </dl>
            <dl>
              <dt>Mail</dt>
              <dd>support@laughlife.inc</dd>
            </dl>
          </div>
        </div>
        <small className={styles.copy}>Copyright © 株式会社ラフライフ All Rights Reserved.</small>
      </div>
    </div>
  </footer>
)