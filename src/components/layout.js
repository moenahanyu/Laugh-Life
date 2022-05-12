import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import './../../src/styles/global/_reset.scss'
import './../../src/styles/global/_base.scss'

export default ({ children }) => (
  <> {/* <React.Fragment>の省略形 */}
    <Header />
    {children}
    <Footer />
  </>
)