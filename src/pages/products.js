import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo';
import SubHeader from '../components/subHeader';

export default () => (
  <Layout>
    <Seo title="商品紹介" description="これは商品紹介ページです。" />
    <SubHeader enTitle="PRODUCTS" jaTitle="商品紹介" />
    <div>
    </div>
  </Layout>
)
