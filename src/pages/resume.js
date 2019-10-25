import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/timeline.scss'
import { Row, Col } from 'reactstrap'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
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
          <ul className="timeline">

              <li>
                <div className="timeline-badge primary"><a><FontAwesomeIcon icon={faBullseye} color="#C5C7C5" /></a></div>

                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <Img className="img-fluid" fluid={data.emem_digital.childImageSharp.fluid} />
                  </div>
                  <div className="timeline-body p-4">
                    
                    <h5 className="museo resume-date"><FontAwesomeIcon icon={faBriefcase} color="#252734" /> &nbsp;December 2018 to present</h5>
                    <h3 className="museo-700">Em Em Digital</h3>
                    <h4 className="museo">Owner &amp; Creative Director</h4>

                    <hr />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod ultrices laoreet.</p>
                    <p>Fusce tincidunt sem nec tincidunt tincidunt. Phasellus vel neque suscipit, dignissim lectus ut, volutpat sem. Aenean blandit felis vitae accumsan consequat. Fusce semper odio eu elit sagittis placerat.</p>
                    <p>Fusce consectetur varius neque, nec cursus velit accumsan vel. In hac habitasse platea dictumst. Proin varius ligula vel ligula porta, sit amet commodo felis euismod. Nam dolor lacus, auctor quis tincidunt sit amet, semper at nibh. Nam efficitur mauris non velit iaculis laoreet. Sed lacus ipsum, mollis tempus mi ac, faucibus dapibus enim. Curabitur ut massa non diam fermentum ultricies vitae eu dolor. Suspendisse nec facilisis mauris.</p>



                  </div>

                </div>
              </li>
              
              <li className="timeline-inverted">
                <div className="timeline-badge primary"><a><FontAwesomeIcon icon={faBullseye} color="#C5C7C5" /></a></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                  <Img className="img-fluid" fluid={data.zuno_studios.childImageSharp.fluid} />
                  </div>
                  <div className="timeline-body p-4">
                    
                    <h5 className="museo resume-date"><FontAwesomeIcon icon={faBriefcase} color="#252734" /> &nbsp;July 2018 to December 2018</h5>
                    <h3 className="museo-700">Zuno Studios</h3>
                    <h4 className="museo">Lead Web Developer</h4>

                    <hr />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod ultrices laoreet. Fusce tincidunt sem nec tincidunt tincidunt. Phasellus vel neque suscipit, dignissim lectus ut, volutpat sem. Aenean blandit felis vitae accumsan consequat. Fusce semper odio eu elit sagittis placerat. Fusce consectetur varius neque, nec cursus velit accumsan vel. In hac habitasse platea dictumst. Proin varius ligula vel ligula porta, sit amet commodo felis euismod. Nam dolor lacus, auctor quis tincidunt sit amet, semper at nibh. Nam efficitur mauris non velit iaculis laoreet. Sed lacus ipsum, mollis tempus mi ac, faucibus dapibus enim. Curabitur ut massa non diam fermentum ultricies vitae eu dolor. Suspendisse nec facilisis mauris.</p>

                  </div>

                </div>
              </li>

              <li>
                <div className="timeline-badge primary"><a><FontAwesomeIcon icon={faBullseye} color="#C5C7C5" /></a></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                  <Img className="img-fluid" fluid={data.dodgers.childImageSharp.fluid} />
                  </div>
                  <div className="timeline-body p-4">
                    
                    <h5 className="museo resume-date"><FontAwesomeIcon icon={faBriefcase} color="#252734" /> &nbsp;January 2015 to June 2018</h5>
                    <h3 className="museo-700">Los Angeles Dodgers</h3>
                    <h4 className="museo">Manager, Social Media, Digital &amp; Print Content<br /><small>Previous: Coordinator, Social Media</small></h4>

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

              <li className="timeline-inverted">
                <div className="timeline-badge primary"><a><FontAwesomeIcon icon={faBullseye} color="#C5C7C5" /></a></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                  <Img className="img-fluid" fluid={data.zuno_studios.childImageSharp.fluid} />
                  </div>
                  <div className="timeline-body p-4">
                    
                    <h5 className="museo resume-date"><FontAwesomeIcon icon={faBriefcase} color="#252734" /> &nbsp;June 2010 to December 2014</h5>
                    <h3 className="museo-700">Zuno Studios</h3>
                    <h4 className="museo">Web Developer<br /><small>Previous: Jr. Web Developer, Intern</small></h4>

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

              <li>
                <div className="timeline-badge primary"><a><FontAwesomeIcon icon={faBullseye} color="#C5C7C5" /></a></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                  <Img className="img-fluid" fluid={data.csulb.childImageSharp.fluid} />
                  </div>
                  <div className="timeline-body p-4">
                    
                    <h5 className="museo resume-date"><FontAwesomeIcon icon={faGraduationCap} color="#252734" /> &nbsp;May 2010</h5>
                    <h3 className="museo-700">CSU Long Beach</h3>
                    <h4 className="museo">Bachelor of Arts, Journalism<br /><small>Minor: Philosophy</small></h4>

                    <hr />

                    <p>GO BEACH!</p>

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
        header_img: file(relativePath: { eq: "contact_header.jpg" }) {
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
