import React from 'react'
import Layout from "../components/layout"
import MMSEO from "../components/seo_mm"
import {graphql, StaticQuery, Link} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Button} from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../../util/utilityFunctions'

const IndexPage = ({ data }) => (

  <Layout>

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


  <div className="container pt-3 pb-3">

    <MMSEO 
      title="Home"
      description="Matthew Mesa is an experienced freelance web developer, graphic designer and former manager of social media for the Los Angeles Dodgers, seeking employment in all things digital"
      image={data.ogimage.childImageSharp.fixed.src}
      />

    <Row>

    <Col>

      <Row>
        <Col md={{size:8, offset:2}}>

          <div className="text-center pt-2">

            <p className="lead">Hi, I'm Matthew Mesa and <br className="d-block d-sm-none" />I'm a free agent.</p>
            <p>Professionally, I’ve been a web developer, social media manager, graphic designer, photographer, video editor and writer. I used to work for the Los Angeles Dodgers and Zuno Studios, a small web design studio based in Signal Hill, CA.</p>
            <p>Personally, I'm a husband and father who just really loves to create cool stuff—hopefully my wife and kids never get tired of me pointing a camera in their faces.</p>

          </div>


        </Col>
      </Row>

      <section id="hp_portfolio">
        <StaticQuery query={indexQuery} render={data => {

          return (
            <Row>

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

              <Col md={{size:6, offset:3}}>
                <Button color="primary" block href="/portfolio">View Full Portfolio</Button>
              </Col>
            
            </Row>
          )

          }}>


        </StaticQuery>
      </section>

      </Col>

    </Row>
  </div>


  </Layout>
)

const indexQuery = graphql`


query{

  allMarkdownRemark(
    sort: { fields: [frontmatter___order], order: ASC}
    limit: 8
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

}

`


export default IndexPage
