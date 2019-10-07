import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import {graphql, StaticQuery} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col} from 'reactstrap'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home page</h1>

    <Row>
      <Col md={{ size: 12, offset: 0 }}>

      <StaticQuery query={indexQuery} render={data => {


        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) =>(
              <Post title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                body={node.excerpt} 
                fluid={node.frontmatter.image.childImageSharp.fluid}
              />
            ))}
          </div>
        )

        }}>


        </StaticQuery>

      </Col>
    </Row>


  </Layout>
)

const indexQuery = graphql`

query{
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}){
    edges{
      node{
        id
        frontmatter{
          title
          date(formatString: "MMM D, YYYY")
          author
          path
          image {
            childImageSharp{
              fluid(maxWidth: 1200){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
}

`

export default IndexPage
