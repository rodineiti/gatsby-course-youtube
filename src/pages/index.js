import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Bem vindo ao site</h1>
    <p>Estudando um pouco sobre Gatsby.</p>
  </Layout>
)

export default IndexPage
