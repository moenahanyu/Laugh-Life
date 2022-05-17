import React from "react"
import '../utils/global.css'
import './../../src/styles/global/_reset.scss'
import './../../src/styles/global/_base.scss'
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children }) => (
  <> {/* <React.Fragment>の省略形 */}
    <Header />
    <main>
    {children}
    </main>
    <Footer />
  </>
)