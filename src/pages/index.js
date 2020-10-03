import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Ian & Jesse's Wedding" />
    <h2>We're Getting Married!</h2>
    <p>2:00pm Friday, October 16th, 2020, in Des Moines, IA.</p>
    <Link to="/page-2/">Live Stream</Link>
    <p>Stay safe from covid-19 and join us virtually via YouTube Live.</p>
    <Link to="/page-2/">Wedding Fund</Link>
    <p>We're accepting donations to help cover the cost of our small wedding.</p>
    <Link to="/page-2/">Registry</Link>
    <p>We're registered at Target. Please don't feel obligated to get us anything!</p>
  </Layout>
)

export default IndexPage
