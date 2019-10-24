import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import {Row, Col, Form, FormGroup, Input, Label, Button} from 'reactstrap'
import MyForm from '../components/contactForm'

const ContactPage = ( {data} ) => (
  <Layout>
    <SEO title="Contact Matthew Mesa" />

    <section id="top" className="mb-3">
                    
        <Img className="card-image-top" fluid={data.header_img.childImageSharp.fluid} />
        
        <div className="text-box pt-5">

            <div className="text-center portfolio-header">

                <h1 className="h2 contact-header-title">Contact Matt</h1>

            </div>
            
        </div>
        
    </section>

    <section id="contact_form">
      <div className="container">
          <Row>
            <Col md={ {size:8, offset:2} }>

              <MyForm />

            </Col>
          </Row>
      </div>
    </section>

  </Layout>
)

export const query = graphql`

    query{
        header_img: file(relativePath: { eq: "contact_header.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        
    }

`

export default ContactPage
