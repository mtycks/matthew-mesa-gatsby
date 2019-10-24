import PropTypes from "prop-types"
import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import {  Row, Col } from 'reactstrap';

const Menu = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
        <span className="text-black">{ isVisible ? 'isVisible' : 'isNOTvisible' }</span>
        <nav id="main_menu" className={ isVisible ? 'slide-in-top' : 'slide-out-top' }>
          <div className="container">
            
            <Row>
              <Col xs={{size:12, offset:0}}>
                <div className="menu-toggle-close text-right p-2">
                    <span className="museo close-menu" onClick={toggleVisible}>X</span>
                  </div>
                  
                  <ul className="list-unstyled text-center">
                    <li><a href="#">home</a></li>
                    <li>
                      <a href="#">portfolio</a>
                    
                    <ul className="list-unstyled">
                      <li><a href="#">web dev</a></li>
                      <li><a href="#">social media</a></li>
                      <li><a href="#">graphic design</a></li>
                      <li><a href="#">photo</a></li>
                      <li><a href="#">video</a></li>
                    </ul>
                    
                    </li>
                    <li><a href="#">resume</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                  </ul>
              </Col>
            </Row>
            
          </div>
        </nav>
    </>
  );

}

export default Menu
