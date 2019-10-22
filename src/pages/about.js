import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <h1>About Us&hellip;</h1>

    <Img fluid={data.fileName.childImageSharp.fluid} alt="" />

  </Layout>
)

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "header_bg_cutout.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
