/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import '../styles/index.scss'
import MenuToggle from "../components/menuToggle"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)



  return (
    <>
      <MenuToggle />
      <div className="full-width" id="content">
        <main>{children}</main>
        <footer>

          <div className="container">
		    
          <div className="row">
            
            <div className="col-12">
              
              <div className="text-center pt-5">
                <p className="museo-700" style={ {color: '#51566e', marginBottom: '.25rem'} }>
                <Link style={ {color: '#51566e'} } to={`/resume`}>resume</Link> &bull;&nbsp; 
                <Link style={ {color: '#51566e'} } to={`/contact`}>contact</Link> &bull;&nbsp; 
                <Link style={ {color: '#51566e'} } to={`about`}>about</Link> | &copy; matthewmesa.com</p>
                <p>
                  <Link to={`/tag/graphic-design`}>graphic design</Link> &bull;&nbsp; 
                  <Link to={`/tag/photo`}>photo</Link> &bull;&nbsp;
                  <Link to={`/tag/social-media`}>social media</Link> &bull;&nbsp; 
                  <Link to={`/tag/video`}>video</Link> &bull;&nbsp; 
                  <Link to={`/tag/web-dev`}>web dev</Link></p>
              </div>
              
            </div>
            
          </div>
          
        </div>


        </footer>
      </div>

      

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
