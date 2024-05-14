import { Col, Container, Row } from "react-bootstrap";
import Banner1 from "../../assets/images/banner-1.webp";
import Banner2 from "../../assets/images/banner-2.webp";

import "./style.scss";
const Banner = () => {
  return (
    <section id="banner">
      <Container>
        <Row className="py-3 row-gap-4">
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="banner-wrapper position-relative">
              <div className="banner-img overflow-hidden">
                <img className="img-fluid w-100" src={Banner1}></img>
              </div>
              <div className="banner-content position-absolute">
                <h4 className="text-white">SPORTS SHOES</h4>
                <h3 className="text-white">20% OFF</h3>
                <h3 className="text-white">FOR SPORTS MEN</h3>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="banner-wrapper position-relative">
              <div className="banner-img overflow-hidden">
                <img className="img-fluid w-100" src={Banner2}></img>
              </div>
              <div className="banner-content position-absolute">
                <h4 className="text-white">SPORTS SHOES</h4>
                <h3 className="text-white">20% OFF</h3>
                <h3 className="text-white">FOR SPORTS MEN</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
