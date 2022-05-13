import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo';
import ContactForm from '../components/contactForm'; 

export default () => (
  <Layout>
    <Seo title="お問い合わせ" description="これはお問い合わせページです。" />
    <div>
      <p>コンタクトページ！</p>
      <Link to={"/"}>トップページへのリンク</Link>
      <ContactForm />　
    </div>
  </Layout>
)
