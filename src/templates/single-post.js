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

                {!post.mockup ?
                    <div className="portfolio-item-titles">
                        <div className="container">

                            <Row>
                                <Col md={{size:8, offset:2}}>
                                    <h2 className="museo text-white mb-0 portfolio-item-title">{post.title}</h2>
                                    <h5 className="museo text-green portfolio-item-subtitle mb-4">{post.subtitle}</h5>
                                </Col>
                            </Row>

                        </div>
                    </div>
                : ''}
                
            </section>

            <div id="main" className={post.mockup ? 'secondary-page' : 'secondary-page no-mockup'}>

                <div className="container">

                    <Row>
                        <Col md={{size:8, offset:2}}>

                        <div className="pb-3 pt-3">
                                
                                {post.mockup ? <>
                                    <h2 className="museo text-white mb-0 portfolio-item-title">{post.title}</h2>
                                    <h5 className="museo text-green portfolio-item-subtitle mb-4">{post.subtitle}</h5>
                                    <div className="text-center">
                                        <Img className="img-fluid" fluid={post.mockup.childImageSharp.fluid} />
                                    </div></>
                                : ''}

                                <div className="portfolio-item-body text-center" dangerouslySetInnerHTML={ {__html: data.markdownRemark.html} } />

                                <ul className="text-center list-inline">
                                    {post.tags.map(tag => (
                                        <li key={tag} className="list-inline-item">
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
                        fluid(maxWidth: 1200, quality: 100){
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