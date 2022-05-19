import React from "react"
import { Link } from "gatsby" //追加
import Layout from "../components/layout"
import FvSlider from "./../slider/fvSlider";
import * as styles from '../styles/_top.module.scss'
import SEO from "../components/seo"
import SubTitle from '../components/subTitle';
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
      </div>
    </section>
  </Layout>
)