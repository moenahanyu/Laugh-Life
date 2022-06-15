import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo';
import SubHeader from '../components/subHeader';
import * as styles from '../styles/_company.module.scss'

export default () => (
  <Layout>
    <Seo title="会社概要" description="これは会社概要ページです。" />
    <SubHeader enTitle="COMPANY" jaTitle="会社概要" />
    <div className="container">
      <div class={styles.companyWrap}>
        <div className={styles.companyMessageWrap}>
          <div className={styles.messageTitleWrap}>
            <div className={styles.messageTitle}>
              <p>経営理念</p>
            </div>
            <p className={styles.messageText}>
              テキストが入ります。テキストが入ります。<br></br>テキストが入ります。テキストが入ります。テキストが入ります。
            </p>
          </div>
        </div>
        <div className={styles.companyDataWrap}>
          <table className={styles.table}>
            <tr>
              <th>会社名</th>
              <td>株式会社ラフライフ</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>住所が入ります。住所が入ります。住所が入ります。</td>
            </tr>
            <tr>
              <th>代表者</th>
              <td>名前が入ります。</td>
            </tr>
            <tr>
              <th>電話</th>
              <td>000-0000-0000</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>商品企画、EC事業、メディア戦略・PR</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </Layout>
)
