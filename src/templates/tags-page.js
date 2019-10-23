import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Badge, Button } from 'reactstrap'
import { slugify } from '../../util/utilityFunctions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {graphql, Link} from 'gatsby'

const tagsPage = ( {pageContext, data} ) => {

    const { tags, tagPostCounts } = pageContext;

    return(
        <Layout pageTitle="App tags">
            <SEO title="All tags" keywords="{['tags', 'topics' ]}" />

            <section id="top">
		
                <Img className="card-image-top" fluid={data.fileName.childImageSharp.fluid} />
                
                <div class="text-box autoHeight">
                    
                    <div class="menu-toggle">
                        <FontAwesomeIcon icon={faBars} color="white" size="2x" className="menuOpen" /> <Link to="/" className="mm_home museo text-white float-right">&nbsp;matthewmesa.com</Link>
                    </div>
                    
                </div>
                
            </section>




            <h1>All Tags</h1>
            <ul>
                {tags.map(tag => (
                    <li key={tag} style={{ marginBottom: '10px'}}>
                        <Button color="primary" href={`/tag/${slugify(tag)}`}>
                            {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
                        </Button>
                    </li>
                ))}
            </ul>
        </Layout>
    )

}

export const query = graphql`
  query {
    header_img: file(relativePath: { eq: "portfolio_tags_header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default tagsPage