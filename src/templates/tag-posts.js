import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { Row, Col} from 'reactstrap'
import { slugify } from '../../util/utilityFunctions'

const tagPosts = ({ data, pageContext }) => {

    const { tag } = pageContext

    return(

        <Layout>

            <section id="top" className="mb-3">
                    
                <Img className="card-image-top" fluid={data.header_img.childImageSharp.fluid} />
                
                <div className="text-box pt-5">

                    <div className="text-center portfolio-header">

                        <h1 className="h2 tag-header-title">{tag}</h1>

                    </div>
                    
                </div>
                
            </section>

            <section id="hp_portfolio">
                <div className="container">
                    <Row className="d-flex justify-content-center">
                        
                        {data.allMarkdownRemark.edges.map(({node}) => (

                            <Col xs={{ size: 6, offset: 0 }} md={{ size: 3, offset: 0 }}>
                                <Link to={`/portfolio/${slugify(node.fields.slug)}`} className="portfolio-item">			    
                                    <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
                                </Link>
                            </Col>

                        ))}

                    </Row>
                </div>
            </section>


        </Layout>

    )

}

export const tagQuery = graphql`

    query($tag: String!){

        header_img: file(relativePath: { eq: "portfolio_tags_header.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }

        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { 
                frontmatter: { tags: { in: [$tag] } } 
                fileAbsolutePath: {regex: "/(portfolio-items)/"  }
            }
        ){
            totalCount
            edges{
                node{
                    id
                    frontmatter{
                        title
                        date(formatString: "MMM D, YYYYY")
                        author
                        tags
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
    }

`

export default tagPosts