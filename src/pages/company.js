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
            <div className={styles.subSubTitle}>
              <p>経営理念</p>
            </div>
            <p className={styles.messageText}>
              生活に笑顔を。新しい商品にときめきを。
            </p>
          </div>
        </div>
        <div className={styles.companyDataWrap}>
          <div className={styles.subSubTitle}>
              <p>会社情報</p>
          </div>
          <table className={styles.table}>
            <tr>
              <th>会社名</th>
              <td>株式会社Laugh Life</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>〒150-0002<br></br>東京都渋谷区道玄坂３丁目１０番１８号パークハビオ渋谷３０５</td>
            </tr>
            <tr>
              <th>代表者名</th>
              <td>長谷川　公希</td>
            </tr>
            <tr>
              <th>運営責任者・代表取締役</th>
              <td>長谷川　公希</td>
            </tr>
            <tr>
              <th>電話</th>
              <td>03-6625-4456</td>
            </tr>
            <tr>
              <th>メールアドレス</th>
              <td>support@laughlife.inc</td>
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
