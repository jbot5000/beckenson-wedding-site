import React from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"

import yt from "../images/yt.svg"
import pp from "../images/pp.svg"
import tgt from "../images/tgt.svg"
import Countdown from "../components/countdown";

// const Countdown = null;

const IndexPage = () => (
  <Layout>
    <SEO title="Ian & Jesse's Wedding" />
    {
      Countdown ? <h2>We're getting married!</h2> : <h2>We're Married!</h2>
    }
    <p><span className="date">1:00pm Friday, October 16th, 2020, in Des Moines, IA.</span>{Countdown ? <Countdown></Countdown> : ''}</p>
    <section id="links">
      {
        Countdown ?
        <div className="link">
          <a href="https://youtu.be/w-uG2LjaPjU">
            <button><img src={yt} alt="YouTube logo" /><span>Live Stream</span></button>
          </a>
          <p>Stay safe from covid-19 and join us virtually via YouTube Live! Join at 12:45pm to see the ceremony at 1pm, or check back later for a recording.</p>
        </div>
        :
        <div className="link">
          <a href="https://youtu.be/w-uG2LjaPjU">
            <button><img src={yt} alt="YouTube logo" /><span>Recording</span></button>
          </a>
          <p>Here's the recording of our ceremony! We did it! <span role="img" aria-label="tada">🎉</span></p>
        </div>
      }
      <div className="link">
        <a href="https://paypal.me/pools/c/8sWeHsq8Lw">
          <button><img src={pp} alt="PayPal logo" /><span>Wedding Fund</span></button>
        </a>
        <p>If you'd like to pitch in, we're accepting donations to help cover the cost of our small wedding.</p>
      </div>
      <div className="link">
        <a href="http://www.target.com/gift-registry/gift/beckenson">
          <button><img src={tgt} alt="Target logo" /><span>Registry</span></button>
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
