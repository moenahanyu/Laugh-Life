import React from "react"
import { Link } from "gatsby"

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
            <h1 className={styles.logo}>Laugh Life</h1>
            <p>株式会社ラフライフ</p>
          </div>
          <div className={styles.footerRight}>
            <dl>
              <dt>Address</dt>
              <dd>〒000-0000<br></br>住所が入ります。住所が入ります。住所が入ります。住所が入ります。</dd>
            </dl>
            <dl>
              <dt>Tell</dt>
              <dd>000-0000-0000</dd>
            </dl>
            <dl>
              <dt>Mail</dt>
              <dd>test@test.com</dd>
            </dl>
          </div>
        </div>
        <small className={styles.copy}>Copyright © 株式会社ニジアス All Rights Reserved.</small>
      </div>
    </div>
  </footer>
)