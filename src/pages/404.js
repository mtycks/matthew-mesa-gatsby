import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container, Row, Col} from 'reactstrap'

const NotFoundPage = () => (
  <Layout secondary="true">
    <SEO title="404: Not found" />

    <section id="top" className="portfolio-item" style={{padding:"1.5rem"}}>&nbsp;</section>

    <Container>
      <Row>
        <Col className="text-center pb-5 pt-5">
          <h1 className="museo" style={{color:"#353535", fontSize:"20rem"}}>404</h1>
          <p className="lead">Hmm, looks like this page doesn't exist.</p>
        </Col>
      </Row>
    </Container>
    
  </Layout>
)

export default NotFoundPage
