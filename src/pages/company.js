import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo';
import SubHeader from '../components/subHeader';

export default () => (
  <Layout>
    <Seo title="会社概要" description="これは会社概要ページです。" />
    <SubHeader enTitle="COMPANY" jaTitle="会社概要" />
    <div>
    </div>
  </Layout>
)
