import React from 'react'
import Layout from "../components/layout"
import MMSEO from "../components/seo_mm"
import {graphql, StaticQuery, Link} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container} from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../../util/utilityFunctions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const IndexPage = ({ data }) => (

  <Layout secondary="false">

  <section id="top">

  <Img className="img-fluid d-block d-md-none" fluid={data.image1.childImageSharp.fluid} alt="Matthew Mesa filming Los Angeles Dodgers' Justin Turner's walk-off home run in the 2017 NLCS vs. Chicago Cubs" />
  <Img className="img-fluid d-none d-md-block" fluid={data.wide_bg.childImageSharp.fluid} alt="Matthew Mesa filming Los Angeles Dodgers' Justin Turner's walk-off home run in the 2017 NLCS vs. Chicago Cubs" />
  <div className="mm_cutout">
    <Img className="d-block d-md-none" fluid={data.image2.childImageSharp.fluid} alt="Matthew Mesa filming Los Angeles Dodgers' Justin Turner's walk-off home run in the 2017 NLCS vs. Chicago Cubs" />
    <Img className="d-none d-md-block" fluid={data.wide_cutout.childImageSharp.fluid} alt="Matthew Mesa filming Los Angeles Dodgers' Justin Turner's walk-off home run in the 2017 NLCS vs. Chicago Cubs" />
	</div>


        <div className="text-box bounce-in-top pt-5">
        <div className="container">
          <Row>
            <Col>
              <h1 className="mt-3">matthew mesa</h1>
          
              <ul className="list-unstyled">
                <li><Link to={`/tags/graphic-design`}>graphic design</Link></li>
                <li><Link to={`/tags/photo`}>photo</Link></li>
                <li><Link to={`/tags/social-media`}>social media</Link></li>
                <li><Link to={`/tags/video`}>video</Link></li>
                <li><Link to={`/tags/web-dev`}>web dev</Link></li>
              </ul>
              </Col>
            </Row>
          </div>
        </div>


		
	</section>


  <Container id="hp_main_content" className="pt-5">

    <MMSEO 
      title="Home"
      description="Matthew Mesa is an experienced freelance web developer, graphic designer and former manager of social media for the Los Angeles Dodgers, seeking employment in all things digital"
      image={data.ogimage.childImageSharp.fixed.src}
      />

    <Row>

      <Col>

        <div id="hp_intro__wrapper" className="mb-4">
          <Row id="hp_intro">
            <Col lg={{size:"3", offset:"0"}} md={{size:"4", offset:"4"}} xs={{size:"6", offset:"3"}} className="hp_intro__image">
              <Img alt="Matthew Mesa smiling" fluid={data.mm_profile.childImageSharp.fluid} className="rounded-circle" />
            </Col>
            <Col lg={{size:"9"}} md={{size:"12"}} className="hp_intro__text">

              <h3 className="museo-700">Hi, I'm Matthew Mesa and I'm a free agent.</h3>
              <p>Professionally, I’ve been a web developer, social media manager, graphic designer, photographer, video editor and writer.</p>
              <p>Personally, I'm a husband and father of two who just really loves to create cool stuff—hopefully my wife and kids never get tired of me pointing a camera in their faces.</p>
              <p><Link to="/about" className="btn btn-primary">About Me</Link> <Link to="/resume" className="btn btn-primary ml-1 mx-2">My Resume</Link> <br className="d-block d-lg-none" /> <a href="https://github.com/mtycks" target="_blank" rel="noreferrer" className="icon-link"><FontAwesomeIcon icon={faGithub} size="lg" /></a> <a href="https://twitter.com/mtycks" target="_blank" rel="noreferrer" className="icon-link"><FontAwesomeIcon icon={faTwitter} size="lg" /></a> <a href="https://instagram.com/mtycks" target="_blank" rel="noreferrer" className="icon-link"><FontAwesomeIcon icon={faInstagram} size="lg" /></a> <a href="https://www.linkedin.com/in/matthew-mesa-0bb8b626/" target="_blank" rel="noreferrer" className="icon-link"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a> </p>

            </Col>
          </Row>
        </div>

        <section id="hp_portfolio">
          <StaticQuery query={indexQuery} render={data => {

            return (
              <Row>

                <Col xs="12">
                  <h2 className="text-center museo-700 mb-3">Portfolio</h2>
                </Col>

                {data.allMarkdownRemark.edges.map(({ node }, index) =>(

                  <Col key={index} xs={{ size: 6, offset: 0 }} md={{ size: 3, offset: 0 }}>
                    <Link to={`/portfolio/${slugify(node.fields.slug)}`} className="portfolio-item">			    
                      <Img alt={node.frontmatter.title} fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
                    </Link>
                  </Col>


                  // <Post title={node.frontmatter.title}
                  //   author={node.frontmatter.author}
                  //   slug={node.fields.slug}
                  //   date={node.frontmatter.date}
                  //   body={node.excerpt} 
                  //   fluid={node.frontmatter.image.childImageSharp.fluid}
                  //   tags={node.frontmatter.tags}
                  // />

                ))}
              
              </Row>
            )

            }}>


          </StaticQuery>
        </section>

      </Col>

    </Row>
  </Container>


  </Layout>
)

const indexQuery = graphql`


query{

  allMarkdownRemark(
    sort: { fields: [frontmatter___order], order: ASC}
    filter: {fileAbsolutePath: {regex: "/(portfolio-items)/"  }}
  ){
    edges{
      node{
        id
        frontmatter{
          title
          date(formatString: "MMM D, YYYY")
          author
          tags
          order
          thumbnail{
            childImageSharp{
              fluid(maxWidth:260, quality:80){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }

  ogimage: file(relativePath: { eq: "ogimage.jpg" }) {
    childImageSharp {
      fixed(width: 1200, quality:100) {
        src
      }
    }
  }

  image1: file(relativePath: { eq: "header_bg.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  image2: file(relativePath: { eq: "header_bg_cutout.png" }) {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  wide_bg: file(relativePath: { eq: "header_wide_bg.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  wide_cutout: file(relativePath: { eq: "header_wide_bg_cutout.png" }) {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  mm_profile: file(relativePath: { eq: "mm_profile.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }

}

`


export default IndexPage
