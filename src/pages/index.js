import React from "react"
import { Link } from "gatsby" //追加
import Layout from "../components/layout"
import FvSlider from "./../slider/fvSlider";
import * as styles from '../styles/_top.module.scss'
import SEO from "../components/seo"
import SubTitle from '../components/subTitle';
import MoreButton from '../components/moreButton';
import Image from "../components/image" 


export default () => (
  <Layout>
    <SEO title="トップページ" description="これはトップページです。" />
    <div className={styles.fv}>
      <FvSlider />
    </div>

    <section className={styles.company}>
      <div class="container">
        <SubTitle enTitle="COMPANY" jaTitle="会社概要" />
        <div className={styles.companyImageWrap}>
          <Image className={styles.companyImage} filename="company.jpg" alt="会社概要" /> 
        </div>
        <div className={styles.companyText}>
          <p className={styles.message}><span>“</span>生活に笑顔を<span>”</span></p>
          <p className={styles.messageDetail}>
          テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br></br>
          テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
          <MoreButton links="/company/"/>
        </div>
      </div>
    </section>

    <section className={styles.business}>
      <div className="container">
        <SubTitle enTitle="BUSINESS" jaTitle="事業内容" />
        <div className={styles.businessWrap}>
          <div className={styles.businessItem}>
            <div className={styles.businessImageWrap}>
              <Image className={styles.businessImage} filename="business01.jpg" alt="商品企画" /> 
            </div>
            <div className={styles.contentsWrap}>
              <p className={styles.title}>商品企画</p>
              <p className={styles.detail}>特異性ある商品を生み出す企画力とデザイン力をもとに、一人ひとりのお客様の生涯のパートナーとなる商品を追求しています。</p>
              <MoreButton links="/business/"/>
            </div>
          </div>
          <div className={styles.businessItem}>
            <div className={styles.contentsWrap}>
              <p className={styles.title}>EC事業</p>
              <p className={styles.detail}>自社サイトや楽天市場、Yahoo!ショッピングなどの国内主要モールにて事業を展開。より多くのお客様へ、特異性ある商品をお届けするために、日々試行錯誤しながら店舗運営をしています。</p>
              <MoreButton links="/business/"/>
            </div>
            <div className={styles.businessImageWrap}>
              <Image className={styles.businessImage} filename="business02.jpg" alt="EC事業" /> 
            </div>
          </div>
          <div className={styles.businessItem}>
            <div className={styles.businessImageWrap}>
              <Image className={styles.businessImage} filename="business03.jpg" alt="メディア戦略・PR" /> 
            </div>
            <div className={styles.contentsWrap}>
              <p className={styles.title}>メディア戦略・PR</p>
              <p className={styles.detail}>特異性ある商品を生み出す企画力とデザイン力をもとに、一人ひとりのお客様の生涯のパートナーとなる商品を追求しています。</p>
              <MoreButton links="/business/"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.product}>
      <div className="container">
       <SubTitle enTitle="PRODUCTS" jaTitle="商品紹介" />
      </div>
    </section>
  </Layout>
)