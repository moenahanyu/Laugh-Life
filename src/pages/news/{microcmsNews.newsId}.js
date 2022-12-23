import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SubHeader from '../../components/subHeader'
import * as styles from '../../styles/_news.module.scss'

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title={data.microcmsNews.title} description="ダニ捕りダディを始めとする、様々な暮らしに役立つ商品を自社サイトをメインに販売しております。" />
    <SubHeader enTitle="NEWS" jaTitle="最新情報" />
    <div className="container">
      <div className={styles.newsDetailWrap}>
        <p className={styles.newsDate}>{data.microcmsNews.createdAt}</p>
        <h3 className={styles.newsTitle}>{data.microcmsNews.title}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: `${data.microcmsNews.body}`,
          }} className={styles.newsText}
        />
      </div>
    </div>
  </Layout>
)

export default BlogPage

export const query = graphql`
  query($id: String!) {
    microcmsNews(id: { eq: $id }) {
      newsId
      title
      body
      createdAt(formatString: "YYYY.MM.DD")
    }
  }
`