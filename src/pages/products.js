import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo';
import SubHeader from '../components/subHeader';
import * as styles from '../styles/_products.module.scss'
import Image from "../components/image" 

export default () => (
  <Layout>
    <Seo title="商品紹介" description="これは商品紹介ページです。" />
    <SubHeader enTitle="PRODUCTS" jaTitle="商品紹介" />
    <div className="container">
      <div className={styles.productsWrap}>
        <div className={styles.productItem}>
          <div className={styles.itemTextWrap}>
            <h3 className={styles.itemTitle}>ダニ捕りダディ</h3>
            <p className={styles.itemText}>
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br></br>
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
            </p>
            <a href="/" className={styles.shopLink}>公式オンラインショップ</a>
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
