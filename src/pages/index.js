import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Ian & Jesse's Wedding" />
    <h2>We're Getting Married!</h2>
    <p>1:00pm Friday, October 16th, 2020, in Des Moines, IA.</p>
    <a href="#">Live Stream</a>
    <p>Stay safe from covid-19 and join us virtually via YouTube Live.</p>
    <a href="/page-2/">Wedding Fund</a>
    <p>We're accepting donations to help cover the cost of our small wedding.</p>
    <a href="tgt.gifts/beckenson">Registry</a>
    <p>We're registered at Target. Please don't feel obligated to get us anything, though!</p>
  </Layout>
)

export default IndexPage
