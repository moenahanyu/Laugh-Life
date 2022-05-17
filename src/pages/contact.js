import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo';
import ContactForm from '../components/contactForm'; 
import * as styles from '../styles/_contact.module.scss'

export default () => (
  <Layout>
    <Seo title="お問い合わせ" description="これはお問い合わせページです。" />
    <div class="sub-header container">
        <h2 className={`sub-title ${styles.subTitle}`}>
            <span class="en">CONTACT</span>
            <span>お問い合わせ</span>
        </h2>
    </div>
    <div>
      <ContactForm />　
    </div>
  </Layout>
)
