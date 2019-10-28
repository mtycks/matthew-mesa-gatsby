import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import { Row, Col, Card, CardBody, CardSubtitle, Badge } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../../util/utilityFunctions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import YouTubeEmbed from "../components/YouTube"

const SinglePost = ({ data }) => {

    const post = data.markdownRemark.frontmatter

    return (

        <Layout>
            <SEO title={post.title} />

            <section id="top" className="portfolio-item">
		
                <Img className="card-image-top" fluid={post.image.childImageSharp.fluid} />
                
            </section>

            <div id="main" className="secondary-page">

                <div className="container">

                    <Row>
                        <Col md={{size:8, offset:2}}>

                        <div className="pb-3 pt-3">
						
                                <h2 className="museo text-white mb-0 portfolio-item-title">{post.title}</h2>
                                <h5 className="museo text-green portfolio-item-subtitle mb-4">{post.subtitle}</h5>
                                
                                <div className="text-center">
                                    <Img className="img-fluid" fluid={post.mockup.childImageSharp.fluid} />
                                </div>

                                <div className="portfolio-item-body text-center" dangerouslySetInnerHTML={ {__html: data.markdownRemark.html} } />

                                <ul className="post-tags">
                                    {post.tags.map(tag => (
                                        <li key={tag}>
                                            <Link to={`/tags/${slugify(tag)}`}>
                                                <Badge color="primary">{tag}</Badge>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                
                            </div>

                        </Col>
                    </Row>

                </div>
            </div>
        </Layout>

    )

}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug }}){
            id
            html
            frontmatter{
                title
                subtitle
                videoSourceURL
                videoTitle
                author
                date(formatString: "MMM D, YYYY")
                tags
                image{
                    childImageSharp{
                        fluid(maxWidth: 1200){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                mockup{
                    childImageSharp{
                        fluid(maxWidth: 1200){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default SinglePost