import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, StaticQuery, Link} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col} from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../../util/utilityFunctions'

const PortfolioPage = ({ data }) => (

  <Layout>

  <section id="top">
      
      <Img className="card-image-top" fluid={data.image1.childImageSharp.fluid} />
      
      <div className="text-box pt-5">

        <div className="text-center portfolio-header">

            <h1 className="h2 contact-header-title">Portfolio</h1>

        </div>

      </div>

  </section>


  <div className="container pt-3 pb-3">

    <SEO title="Home" />

      <section id="hp_portfolio">
        <StaticQuery query={indexQuery} render={data => {

          return (
            <Row>

              {data.allMarkdownRemark.edges.map(({ node }, index) =>(

                <Col key={index} xs={{ size: 6, offset: 0 }} md={{ size: 3, offset: 0 }}>
                  <Link to={`/portfolio/${slugify(node.fields.slug)}`} className="portfolio-item">			    
                    <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
                  </Link>
                </Col>

              ))}
            
            </Row>
          )

          }}>


        </StaticQuery>
      </section>

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

  image1: file(relativePath: { eq: "header_social_media.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }

}

`


export default PortfolioPage
