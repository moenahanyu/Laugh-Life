import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import FvSlider from "./../slider/fvSlider";
import * as styles from '../styles/_top.module.scss'
import SEO from "../components/seo"
import SubTitle from '../components/subTitle';
import MoreButton from '../components/moreButton';
import Image from "../components/image" 
import { Helmet } from "react-helmet";



export default ({ data }) => (
  <Layout>
    <Helmet>
    <meta name="google-site-verification" content="8P5EWhgEP263lAPbER_2K_NOyE2S9IJLeWzJW-Zux_E" />
    </Helmet>
    <SEO title="株式会社Laugh Life" description="ダニ捕りダディを始めとする、様々な暮らしに役立つ商品を自社サイトをメインに販売しております。" />
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
          <p className={styles.message}><span>“</span>生活に笑顔を。<span>”</span></p>
          <p className={styles.messageDetail}>
          新しい商品にときめき、毎日が少しでも幸せになるように。<br></br>
          そんな思いからラフライフは誕生しました。思いを込めた商品を、世の中の人たちに届けます。
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
              <p className={styles.detail}>お客様の生活に寄り添うことをモットーに、毎日の生活に役立つ、お客様第一の商品を企画、開発しております。</p>
              {/* <MoreButton links="/business/"/> */}
            </div>
          </div>
          <div className={styles.businessItem}>
            <div className={styles.contentsWrap}>
              <p className={styles.title}>EC事業</p>
              <p className={styles.detail}>ダニ捕りダディを始めとする、様々な暮らしに役立つ商品を自社サイトをメインに販売しております。</p>
              {/* <MoreButton links="/business/"/> */}
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
              <p className={styles.detail}>豊かな発想力と特異性のある商品を生み出す企画力とデザイン力を軸に、様々なマーケティングプランをご提案します。</p>
              {/* <MoreButton links="/business/"/> */}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.product}>
      <div className="container">
       <SubTitle enTitle="PRODUCTS" jaTitle="商品紹介" />
       <div className={styles.productsWrap}>
          <Link to="products" className={styles.productsItem}>
           <div className={styles.productImageWrap}>
            <div className={styles.productImageItem}>
                <Image className={styles.productImage} filename="product01" alt="商品" />
            </div>
           </div>
          </Link>
          <div className={`${styles.productsItem} ${styles.productsItemNone}`}>
            <div className={styles.productImageItem}></div>
          </div>
          <div className={`${styles.productsItem} ${styles.productsItemNone}`}>
            <div className={styles.productImageItem}></div>
          </div>
          <div className={`${styles.productsItem} ${styles.productsItemNone}`}>
            <div className={styles.productImageItem}></div>
          </div>
       </div>
       <MoreButton links="/products/"/>
      </div>
    </section>

    <section className={styles.news}>
      <div className="container">
        <div className={styles.newsContainer}>
          <div className={styles.subTitleWrap}>
            <SubTitle enTitle="NEWS" jaTitle="最新情報" />
          </div>
          <div className={styles.newsWrap}>
            {data.allMicrocmsNews.edges.map(({ node }) => (
              <Link to={`/news/${node.newsId}`} key={node.newsId} className={styles.newsItem}>
                <p className={styles.newsItemDay}>{node.createdAt}</p>
                <p className={styles.newsItemDetail}>{node.title}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* <MoreButton links="/news/"/> */}
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    allMicrocmsNews {
      edges {
        node {
          newsId
          title
          body
          createdAt(formatString: "YYYY.MM.DD")
        }
      }
    }
  }
`