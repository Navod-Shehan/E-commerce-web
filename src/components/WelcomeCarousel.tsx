import React from 'react';
import Banner1 from '../assets/images/banner5.jpg';
import Carousel from 'react-bootstrap/Carousel';
import {Button, Col, Row} from "react-bootstrap";
import {Link} from 'react-scroll';

const WelcomeCarousel: React.FC = () => {
  return (
    <Row className="mx-0">
      <Col className="px-0">
        <Carousel nextLabel={null} prevLabel={null}  interval={null}>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner1} alt="First Banner" style={{width: 130, height: 650}}/>
            {/* <Row className="absolute-div">
              <Col className="shop-now">
                <Link  to="products" spy={true} smooth={true}>
                  <Button variant="dark" className="rounded-pill">Shop now</Button>
                </Link>
              </Col>
            </Row> */}
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  )
};

export default WelcomeCarousel;