/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import '../styles/index.scss'

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
      <div className="full-width" id="content">
        <main>{children}</main>
        <footer>

          <div className="container">
		    
          <div className="row">
            
            <div className="col-12">
              
              <div className="text-center pt-5">
                <p className="museo-700" style={ {color: '#51566e', marginBottom: '.25rem'} }>resume &bull; contact &bull; about | &copy; matthewmesa.com</p>
                <p>web dev &bull; social media &bull; graphic design &bull; photo &bull; video</p>
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
