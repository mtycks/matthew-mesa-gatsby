import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import {graphql} from 'gatsby'
import {Row, Col} from 'reactstrap'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />

    <section id="top">
        
        <Img className="card-image-top" fluid={data.header_img.childImageSharp.fluid} />
        
        <div className="text-box pt-5">

            <div className="text-center portfolio-header">

                <h1 className="h2 contact-header-title">About</h1>

            </div>
            
        </div>
        
    </section>

    <section id="about_body">
      <Row>
        <Col md={{size:12}}>
          <div className="mm_masonry_row">
            <Img className="img-masonry" fluid={data.mm_wedding_day.childImageSharp.fluid} />
            <Img className="img-masonry" fluid={data.mm_fam_disney_world.childImageSharp.fluid} />
            <Img className="img-masonry" fluid={data.mm_vs_hotwing.childImageSharp.fluid} />
            <Img className="img-masonry" fluid={data.mm_fam_ws.childImageSharp.fluid} />
            <Img className="img-masonry" fluid={data.mm_ap_lv.childImageSharp.fluid} />
            <Img className="img-masonry" fluid={data.mm_milo_beach.childImageSharp.fluid} />
            <Img className="img-masonry" fluid={data.mm_jb_fiji.childImageSharp.fluid} />
            <Img className="img-masonry" fluid={data.mm_magic.childImageSharp.fluid} />
          </div>
        </Col>
      </Row>
      <div className="container mt-5">
        <Row>
          <Col md={{size:8, offset:2}}>
            <h2 className="museo-700 mb-3">Hi, I'm Matt!</h2>
            <h5 class="museo-700">Professional Life</h5>
            <p>I'm currently a freelance web developer, graphic designer and all-around digital specialist looking to join a team full-time.</p>
            <p>I have over three years of experience managing the social media accounts for the Los Angeles Dodgers and over five years of experience building and designing websites.</p>
            <p>My web specialty is in content managment system (CMS) development but I still love learning new technologies (e.g., this site is built using <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a>, a static site generator built on top of <a href="https://reactjs.org/" target="_blank">React</a>).</p>
            <h5 class="museo-700">Personal Life</h5>
            <p>Here are ten facts about me in case you're ever put in a life-or-death scenario where you're forced to answer questions about me:</p>
            <ol class="museo">
              <li>I'm Guamanian (<a href="https://en.wikipedia.org/wiki/Chamorro_people" target="_blank">Chamorro</a>) and part Japanese</li>
              <li>I'm the middle child of five</li>
              <li>My middle name is Anthony</li>
              <li>I have a cartoon-like fear of lizards</li>
              <li>My typical coffee order is one sugar, no cream</li>
              <li>The first place I visited outside of the U.S. was Japan in 2001</li>
              <li>I have four tattoos</li>
              <li>I've never seen <em>Scarface</em> or any of <em>The Godfather</em> movies</li>
              <li>My favorite superhero is Batman (I even enjoyed <em>Batman Forver</em>)</li>
              <li>I played the <a href="https://en.wikipedia.org/wiki/Baritone_horn">baritone</a> in my middle school concert band</li>
            </ol>
          </Col>
        </Row>
      </div>
    </section>

  </Layout>
)

export const query = graphql`
  query {
    header_img: file(relativePath: { eq: "header_about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mm_wedding_day: file(relativePath: { eq: "mm_wedding_day.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mm_fam_disney_world: file(relativePath: { eq: "mm_fam_disney_world.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mm_vs_hotwing: file(relativePath: { eq: "mm_vs_hotwing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mm_fam_ws: file(relativePath: { eq: "mm_fam_ws.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mm_ap_lv: file(relativePath: { eq: "mm_ap_lv.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mm_jb_fiji: file(relativePath: { eq: "mm_jb_fiji.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mm_milo_beach: file(relativePath: { eq: "mm_milo_beach.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mm_magic: file(relativePath: { eq: "mm_magic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
