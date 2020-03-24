import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import { Container, Row, Col, Badge } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../../util/utilityFunctions'

const SinglePost = ({ data }) => {

    const post = data.markdownRemark.frontmatter

    return (

        <Layout secondary="true">
            <SEO title={post.title} />

            <section id="top" className="portfolio-item">
                
                <Container>
                    <Row>
                        <Col  md={{size:6, order: 1}} xs={{size:12, order:2}}>
                            <Img className="portfolio-main-image" fluid={post.image.childImageSharp.fluid} />
                        </Col>
                        <Col className="portfolio-details" md={{size:5, offset:1, order: 2}} xs={{size:12, offset: 0, order:1}}>
                            <h2 className="museo text-white mb-0 portfolio-item-title">{post.title}</h2>
                            <h5 className="museo text-green portfolio-item-subtitle">{post.subtitle}</h5>
                            {post.liveURL &&
                                <p><a href={post.liveURL} className="btn btn-primary" target="_blank" rel="nofollow">View live project</a></p>
                            }
                        </Col>

                        {post.images &&

                            
                            <Col className="portfolio-item-images"  md={{size:6, order: 3}} xs={{size:12, order:2}}>
                                <Row>
                                {post.images.map((additionalImage, index) => (
                                    <Col xs="3" key={index}>
                                        <Img className="portfolio-main-image" fluid={additionalImage.childImageSharp.fluid} objectPosition="top center" />
                                    </Col>
                                ))}
                                </Row>
                            </Col>
                            
                        }

                    </Row>
                </Container>
                
            </section>

            <div id="main" className={(post.mockup || post.videoSourceURL) ? 'secondary-page' : 'secondary-page no-mockup'}>

                <div className="container">

                    <Row>
                        <Col md={{size:8, offset:2}}>

                        <div className="pb-5 pt-5">

                                {post.videoSourceURL ? <>
                                    <div className="text-center mb-5">
                                      <div class="embed-responsive embed-responsive-16by9">
                                            <iframe class="embed-responsive-item" src={post.videoSourceURL} allowfullscreen></iframe>
                                        </div>
                                    </div></>
                                : ''}

                                <div className="portfolio-item-body" dangerouslySetInnerHTML={ {__html: data.markdownRemark.html} } />

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
                liveURL
                image{
                    childImageSharp{
                        fluid(maxWidth: 1200, quality: 100){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                images{
                    childImageSharp{
                        fluid(maxWidth:200, maxHeight:200, quality: 75){
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