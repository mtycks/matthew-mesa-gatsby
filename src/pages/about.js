import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import {graphql} from 'gatsby'
import {Container, Row, Col} from 'reactstrap'
import LightboxGallery from '../components/lightbox'

const AboutPage = ({ data }) => (

  <Layout secondary="true">
    <SEO title="About" />

    <section id="top" className="portfolio-item">
                
        <Container>
            <Row>
                <Col  md={{size:6, order: 1}} xs={{size:12, order:2}}>
                    <Img className="portfolio-main-image" fluid={data.header_img.childImageSharp.fluid} />
                </Col>
                <Col className="portfolio-details" md={{size:5, offset:1, order: 2}} xs={{size:12, offset: 0, order:1}}>
                    <h2 className="museo text-white mb-0 portfolio-item-title">About me</h2>
                    <h5 className="museo text-green portfolio-item-subtitle">matthew mesa</h5>
                </Col>

                <Col className="portfolio-item-images"  md={{size:12, order: 3}} xs={{size:12, order:2}}>
                      <LightboxGallery images={[data.wedding_img, data.kiddos_img, data.emmy_img, data.milo_img]} />
                  </Col>

            </Row>
        </Container>
        
    </section>

    <section id="about_body">
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
              <li>I bowled a <a href="https://californiabowlingnews.businesscatalyst.com/assets/042910.pdf" target="_blank">300 game in 2010</a></li>
              <li>I have a cartoon-like fear of lizards</li>
              <li>My typical coffee order is one sugar, no cream</li>
              <li>The first place I visited outside of the U.S. was Japan in 2001</li>
              <li>I have four tattoos</li>
              <li>I've never seen <em>Scarface</em> or any of <em>The Godfather</em> movies</li>
              <li>My favorite superhero is Batman (I even enjoyed <em>Batman Forever</em>)</li>
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
    header_img: file(relativePath: { eq: "about_header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    wedding_img: file(relativePath: { eq: "about_wedding.jpg" }) {
      publicURL,
      childImageSharp {
        fluid(maxWidth:300, maxHeight:300, quality: 75, cropFocus:NORTH){
          ...GatsbyImageSharpFluid
        }
      }
    },
    kiddos_img: file(relativePath: { eq: "about_kiddos.jpg" }) {
      publicURL,
      childImageSharp {
        fluid(maxWidth:300, maxHeight:300, quality: 75, cropFocus:NORTH){
          ...GatsbyImageSharpFluid
        }
      }
    },
    emmy_img: file(relativePath: { eq: "about_1.jpg" }) {
      publicURL,
      childImageSharp {
        fluid(maxWidth:300, maxHeight:300, quality: 75, cropFocus:NORTH){
          ...GatsbyImageSharpFluid
        }
      }
    },
    milo_img: file(relativePath: { eq: "milo_portraits/milo_5.jpg" }) {
      publicURL,
      childImageSharp {
        fluid(maxWidth:300, maxHeight:300, quality: 75, cropFocus:NORTH){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
