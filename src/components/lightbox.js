import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import '../../node_modules/react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { Row, Col } from 'reactstrap'
import Img from 'gatsby-image'

// const images = [
//   '//placekitten.com/1500/500',
//   '//placekitten.com/4000/3000',
//   '//placekitten.com/800/1200',
//   '//placekitten.com/1500/1500',
// ];

export default class LightboxGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      images: props.images,
    };
  }

  render() {

    const { photoIndex, isOpen } = this.state;
    const {images} = this.state;

    return (
      <Row className="portfolio-gallery">
          
        {images.map((additionalImage, index) => (
            
            <Col xs="6" sm="4" lg="3" key={index}>
                <div className="openModal" onClick={() => this.setState({ isOpen: true, photoIndex:index })}>
                    <Img 
                        className="portfolio-main-image" 
                        fluid={additionalImage.childImageSharp.fluid} objectPosition="top center"
                    />
                </div>
            </Col>

        ))}

        

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].publicURL}
            nextSrc={images[(photoIndex + 1) % images.length].publicURL}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].publicURL}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </Row>
    );
  }
}