import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/timeline.scss'
import { Row, Col, Button } from 'reactstrap'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'

const ResumePage = ({data}) => {

  return (

    <Layout>
      <SEO title="Resume" />

      <section id="top" className="mb-3">
                      
          <Img className="card-image-top" fluid={data.header_img.childImageSharp.fluid} />
          
          <div className="text-box pt-5">

              <div className="text-center portfolio-header">

                  <h1 className="h2 contact-header-title">Resume</h1>

              </div>
              
          </div>
          
      </section>

      <div className="container">
        <Row>
          <Col md={{size:8, offset:2}}>
            <div className="text-center pb-3 pt-3">
              <h2 className="museo-700">Hi, I'm Matthew.</h2>
              <p>An experienced freelance web developer, graphic designer and former manager of social media for the Los Angeles Dodgers.</p>
              <p><Button tag={Link} to={`/about`} color="primary">More About Me</Button> <Button tag={Link} to={`/contact`} color="primary">Contact Me</Button></p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="container-fluid">
          <ul className="timeline">

              <li id="emem_digital">
                <div className="timeline-badge primary"><a href="#emem_digital" title="1 year"><FontAwesomeIcon icon={faBullseye} /></a></div>

                <div className="timeline-panel">

                  <div className="timeline-body p-4">
                    
                    <Row className="align-items-center">
                      <Col xs={{size:6, offset:3}} sm={{size:3, offset:0}}>
                        <Img className="img-fluid rounded-circle" fluid={data.emem_digital.childImageSharp.fluid} />
                      </Col>
                      <Col xs="12" sm="9" className="resume-item-details">
                        <h5 className="museo resume-date"><FontAwesomeIcon icon={faBriefcase} color="#252734" /> &nbsp;December 2018 to present</h5>
                        <h3 className="museo-700">Em Em Digital</h3>
                        <h4 className="museo">Owner &amp; Creative Director<br /><small>development, design, marketing, photography, video</small></h4>
                      </Col>
                    </Row>

                    <hr />

                    <p>Em Em Digital (DBA) is a company I started as a freelance web developer and graphic designer. This sole proprietorship serves over 10 clients and provides an array of digital services: web development; web design; graphic design; digital and social media marketing; photography; video editing.</p>

                    <ul className="museo">
                      <li>Worked with 10+ clients in various industries to build, maintain and upgrade their digital assets</li>
                      <li>Designed and developed websites using CMSs and static website generators (GatsbyJS)</li>
                      <li>Platforms included Joomla, WordPress, WooCommerce and Shopify</li>
                      <li>Developed user interface (UI) and user experience (UX) updates for existing websites</li>
                      <li>Support for email marketing campaigns (MailChimp) and built custom HTML email templates</li>
                      <li>Updated SSL certificates for existing websites</li>
                      <li>Provided creative and technical direction for updates to existing websites</li>
                    </ul>


                  </div>

                </div>
              </li>
              
              <li className="timeline-inverted" id="zuno_redux">
                <div className="timeline-badge primary"><a href="#zuno_redux" title="6 months"><FontAwesomeIcon icon={faBullseye} /></a></div>
                <div className="timeline-panel">

                  <div className="timeline-body p-4">
                    
                    <Row className="align-items-center">
                    <Col xs={{size:6, offset:3}} sm={{size:3, offset:0}}>
                        <Img className="img-fluid rounded-circle" fluid={data.zuno_studios.childImageSharp.fluid} />
                      </Col>                      
                      <Col xs="12" sm="9" className="resume-item-details">
                        <h5 className="museo resume-date"><FontAwesomeIcon icon={faBriefcase} color="#252734" /> &nbsp;July 2018 to December 2018</h5>
                        <h3 className="museo-700">Zuno Studios</h3>
                        <h4 className="museo">Lead Web Developer<br /><small>CMS Development (Joomla &amp; WordPress)</small></h4>
                      </Col>
                    </Row>

                    <hr />

                    <p>I returned to the company as the agency's lead web developer in July of 2018. Zuno Studios, unfortunately, closed its doors at the end of 2018 but three of their clients took me on as a freelance digital specialist.</p>
                    <p><em><a href="#zuno">See below</a> for additional duties listed in my previous stint with the company.</em></p>

                  </div>

                </div>
              </li>

              <li className="timeline-inverted" id="dodgers">
                <div className="timeline-badge primary"><a href="#dodgers" title="3+ years"><FontAwesomeIcon icon={faBullseye} /></a></div>
                <div className="timeline-panel">

                  <div className="timeline-body p-4">
                    
                  <Row className="align-items-center">
                      <Col xs={{size:6, offset:3}} sm={{size:3, offset:0}}>
                        <Img className="img-fluid rounded-circle" fluid={data.dodgers.childImageSharp.fluid} />
                      </Col>
                      <Col xs="12" sm="9" className="resume-item-details">
                        <h5 className="museo resume-date"><FontAwesomeIcon icon={faBriefcase} color="#252734" /> &nbsp;January 2015 to June 2018</h5>
                        <h3 className="museo-700">Los Angeles Dodgers</h3>
                        <h4 className="museo">Manager, Social Media, Digital &amp; Print Content<br /><small>Previous: Coordinator, Social Media</small></h4>
                      </Col>
                    </Row>


                    <hr />

                    <ul className="museo">
                      <li>Responsible for all social media initiatives and activations for the organization including the overall social
                      voice in marketing messages as well as one-to-one fan engagement.</li>	
                      <li>Ideation and implementation of social media campaigns across all platforms.</li>
                      <li>Work closely with all departments to ensure organizational goals are met.</li>
                      <li>Lead a gameday team to properly cover every single game on the schedule.</li>
                      <li>Manage the budget of the Digital Marketing and Publications sub-department.</li>
                      <li>Create reports on the performance of our accounts to VP and executive team.</li>
                      <li>Proficient in Adobe’s Creative Suite (Photoshop, Premiere, After Effects and Illustrator).</li>
                      <li>Knowledgeable of all social media platforms</li>
                    </ul>
                  </div>

                </div>
              </li>

              <li id="zuno">
                <div className="timeline-badge primary"><a href="#zuno" title="4+ years"><FontAwesomeIcon icon={faBullseye} /></a></div>
                <div className="timeline-panel">

                  <div className="timeline-body p-4">
                    
                  <Row className="align-items-center">
                      <Col xs={{size:6, offset:3}} sm={{size:3, offset:0}}>
                        <Img className="img-fluid rounded-circle" fluid={data.zuno_studios.childImageSharp.fluid} />
                      </Col>
                      <Col xs="12" sm="9" className="resume-item-details">
                        <h5 className="museo resume-date"><FontAwesomeIcon icon={faBriefcase} color="#252734" /> &nbsp;June 2010 to December 2014</h5>
                        <h3 className="museo-700">Zuno Studios</h3>
                         <h4 className="museo">Web Developer<br /><small>Previous: Jr. Web Developer; Intern</small></h4>
                      </Col>
                    </Row>
                    <hr />

                    <ul className="museo">
                      <li>Work directly with designers and clients to create functional webpages and websites which include customized web applications on a per-project basis.</li>
                      <li>Provide technical support as well as project management for clients.</li>
                      <li>Manage the updating of all client websites to ensure they meet the company’s standards and security guidelines.</li>
                      <li>Write blog posts on the latest trends in the industry.</li>
                      <li>Proficient in PHP, HTML, CSS and JavaScript with an emphasis on Content Management Systems.</li>
                      <li>Troubleshooting complex problems in the code as well as in the user interface.</li>
                    </ul>
                  </div>

                </div>
              </li>

              <li className="timeline-inverted" id="csulb">
                <div className="timeline-badge primary"><a href="#csulb"><FontAwesomeIcon icon={faBullseye} /></a></div>
                <div className="timeline-panel">

                  <div className="timeline-body p-4">
                    <Row className="align-items-center">
                      <Col xs={{size:6, offset:3}} sm={{size:3, offset:0}}>
                        <Img className="img-fluid rounded-circle" fluid={data.csulb.childImageSharp.fluid} />
                      </Col>
                      <Col xs="12" sm="9" className="resume-item-details">
                        <h5 className="museo resume-date"><FontAwesomeIcon icon={faGraduationCap} color="#252734" /> &nbsp;May 2010</h5>
                        <h3 className="museo-700">CSU Long Beach</h3>
                        <h4 className="museo">Bachelor of Arts, Journalism<br /><small>Minor: Philosophy</small></h4>
                      </Col>
                    </Row>
                  </div>

                </div>
              </li>
              
              <li class="clearfix" style={{float:'none'}}></li>
          </ul>

        </div>

    </Layout>

  )

}

export const query = graphql`

    query{
        header_img: file(relativePath: { eq: "header_resume.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        emem_digital: file(relativePath: { eq: "resume-emem_digital.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        zuno_studios: file(relativePath: { eq: "resume-zuno_studios.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        dodgers: file(relativePath: { eq: "resume-los_angeles_dodgers.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        csulb: file(relativePath: { eq: "resume-csulb.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        
    }

`

export default ResumePage
