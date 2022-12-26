import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo';
import SubHeader from '../components/subHeader';
import * as styles from '../styles/_products.module.scss'
import Image from "../components/image" 

export default () => (
  <Layout>
    <Seo title="株式会社Laugh Life | 商品紹介" description="ダニ捕りダディを始めとする、様々な暮らしに役立つ商品を自社サイトをメインに販売しております。" />
    <SubHeader enTitle="PRODUCTS" jaTitle="商品紹介" />
    <div className="container">
      <div className={styles.productsWrap}>
        <div className={styles.productItem}>
          <div className={styles.itemTextWrap}>
            <h3 className={styles.itemTitle}>ダニ捕りダディ</h3>
            <p className={styles.itemText}>
            アレルギーの原因物質は、約8割がダニが原因と言われています。<br></br>
            生きているダニそのものがアレルギーを引き起こすのではなく
            ダニの死骸やフンが原因とされています。<br></br>
            そこで、ダニ捕りダディは小さいお子様やペットがいるご家庭でも手軽で簡単にできるダニ対策として誕生しました。
            </p>
            <a href="https://laughlife.inc/lp?u=_ris" target="_blank" className={styles.shopLink}>ご購入はこちら</a>
          </div>
          <div className={styles.itemImageWrap}>
            <div className={styles.imageItem}>
              <Image className={styles.productImage} filename="product01" alt="商品" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
