import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import yt from "../images/yt.svg"
import pp from "../images/pp.svg"
import tgt from "../images/tgt.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Ian & Jesse's Wedding" />
    <h2>We're Getting Married!</h2>
    <p>1:00pm Friday, October 16th, 2020, in Des Moines, IA.</p>
    <section id="links">
      <div className="link">
        <a href="#">
          <button><img src={yt} alt="YouTube logo" />Live Stream</button>
        </a>
        <p>Stay safe from covid-19 and join us virtually via YouTube Live. Join at 12:45pm to get settle, and at 1pm you'll witness our ceremony!</p>
      </div>
      <div className="link">
        <a href="/page-2/">
          <button><img src={pp} alt="PayPal logo" />Wedding Fund</button>
        </a>
        <p>If you'd like to pitch in, we're accepting donations to help cover the cost of our small wedding.</p>
      </div>
      <div className="link">
        <a href="tgt.gifts/beckenson">
          <button><img src={tgt} alt="Target logo" />Registry</button>
        </a>
        <p>We're registered at Target. Please don't feel obligated to get us anything, though!</p>
      </div>
    </section>
    <section>
      <span className="fyi">FYI:</span> we're combining our last names to make Beckenson! <span role="img" aria-label="sparkle">✨</span>
    </section>
  </Layout>
)

export default IndexPage
