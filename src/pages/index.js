import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import {graphql, StaticQuery, Link} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col} from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../../util/utilityFunctions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const IndexPage = ({ data }) => (

  <Layout>

  <section id="top">

  <Img className="img-fluid" fluid={data.image1.childImageSharp.fluid} alt="Matthew Mesa filming Los Angeles Dodgers' Justin Turner's walk-off home run in the 2017 NLCS vs. Chicago Cubs" />
  <div className="mm_cutout">
    <Img fluid={data.image2.childImageSharp.fluid} alt="Matthew Mesa filming Los Angeles Dodgers' Justin Turner's walk-off home run in the 2017 NLCS vs. Chicago Cubs" />
	</div>

		<div className="text-box bounce-in-top">
			
			<div className="menu-toggle">
        <FontAwesomeIcon icon={faBars} color="white" size="2x" className="menuOpen" />
			</div>
			
			<h1>matthew mesa</h1>
			
			<ul className="list-unstyled">
        <li><Link to={`/tag/graphic-design`}>graphic design</Link></li>
				<li><Link to={`/tag/photo`}>photo</Link></li>
        <li><Link to={`/tag/social-media`}>social media</Link></li>
				<li><Link to={`/tag/video`}>video</Link></li>
        <li><Link to={`/tag/web-dev`}>web dev</Link></li>
			</ul>
			
		</div>
		
	</section>

  <div className="container pt-3 pb-3">
    <Row>
    <SEO title="Home" />

    <Col xs={{ size: 12, offset: 0 }}>

      <div className="text-center pt-2">

      <p className="lead">Hi, I'm Matthew Mesa and <br className="d-block d-sm-none" />I'm looking for a job.</p>
      <p>Professionally, I’ve been a web developer, social media manager, graphic designer, photographer, video editor and writer. I used to work for the Los Angeles Dodgers and Zuno Studios, a small web design studio based in Signal Hill, CA.</p>
      <p className="lead">Blah, blah, blah...I know you just want to see my work. So, here it is:</p>

        
      </div>

      <section id="hp_portfolio">
        <StaticQuery query={indexQuery} render={data => {

          return (
            <Row>

              {data.allMarkdownRemark.edges.map(({ node }) =>(

                <Col xs={{ size: 6, offset: 0 }} md={{ size: 3, offset: 0 }}>
                  <Link to={`/portfolio/${slugify(node.fields.slug)}`} className="portfolio-item">			    
                    <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
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
  </div>


  </Layout>
)

const indexQuery = graphql`


query{

  allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC}){
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
              fluid(maxWidth: 1200){
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

}

`


export default IndexPage
