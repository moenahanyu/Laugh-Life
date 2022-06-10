import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo';
import SubHeader from '../components/subHeader';

export default () => (
  <Layout>
    <Seo title="最新情報" description="これは最新情報ページです。" />
    <SubHeader enTitle="NEWS" jaTitle="最新情報" />
    <div>
    </div>
  </Layout>
)