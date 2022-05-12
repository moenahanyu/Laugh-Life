import React from "react"
import { Link } from "gatsby" //追加
import Layout from "../components/layout"
import FvSlider from "./../slider/fvSlider";
import * as styles from '../styles/_top.module.scss'


export default () => (
  <Layout>
    <div className={styles.fv}>
      <FvSlider />
    </div>
  </Layout>
)