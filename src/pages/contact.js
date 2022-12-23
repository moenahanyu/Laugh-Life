import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo';
import SubHeader from '../components/subHeader';
import ContactForm from '../components/contactForm'; 


export default () => (
  <Layout>
    <Seo title="お問い合わせ" description="お問い合わせページです。" />
    <SubHeader enTitle="CONTACT" jaTitle="お問い合わせ" />
    <div>
      <ContactForm />　
    </div>
  </Layout>
)
