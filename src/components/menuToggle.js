import PropTypes from "prop-types"
import React, { useState } from "react"
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import {  Row, Col } from 'reactstrap';

const MenuToggle = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="menu-toggle pt-3">
        <div className="container">
          <Row>
            <Col xs={{size:12, offset:0}}>
              <span onClick={toggleVisible}><FontAwesomeIcon icon={faBars} color="white" size="2x" className="menuOpen" /></span> <Link to="/" className="mm_home museo text-white float-right">&nbsp;matthewmesa.com</Link>
            </Col>
          </Row>
        </div>
      </div>

      <nav id="main_menu" className={`${ isVisible ? 'slide-in-top' : 'closed' }`}>
          <div className="container">
            
            <Row>
              <Col xs={{size:12, offset:0}}>
                <div className="menu-toggle-close text-right p-2">
                    <span className="museo close-menu" onClick={toggleVisible}>X</span>
                  </div>
                  
                  <ul className="list-unstyled text-center">
                    <li><Link to="/">home</Link></li>
                    <li>
                      <Link to="/portfolio">portfolio</Link>
                    
                    <ul className="list-unstyled">
                      <li><Link to="/tags/graphic-design">graphic design</Link></li>
                      <li><Link to="/tags/photo">photo</Link></li>
                      <li><Link to="/tags/social-media">social media</Link></li>
                      <li><Link to="/tags/video">video</Link></li>
                      <li><Link to="/tags/web-dev">web dev</Link></li>
                    </ul>
                    
                    </li>
                    <li><Link to="/resume">resume</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                  </ul>
              </Col>
            </Row>
            
          </div>
        </nav>

    </>
  );

}

export default MenuToggle
