import { Col, Container, Row } from "react-bootstrap";
import "./style.scss";

const Footer = () => {
  return (
    <>
      <section id="footer" className="py-4">
        <Container>
          <Row>
            <Col xs={12} sm={6} md={3}>
              <h5>My Account</h5>
              <ul className="list-unstyled">
                <li>184 Main Rd E, St Albans VIC 3021, Australia</li>
                <li>
                  Mail Us:
                  <a
                    className="text-decoration-none text-dark"
                    href="mailto:yourmail@gmail.com"
                  >
                    yourmail@gmail.com
                  </a>
                </li>{" "}
                <li>
                  Phone:{" "}
                  <a
                    className="text-decoration-none text-dark"
                    href="tel:+00254 254565"
                  >
                    + 00 254 254565
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <h5>Categories</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Ecommerce
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Shopify
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Prestashop
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Opencart
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Magento
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Jigoshop
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <h5>Information</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Returns & Exchanges
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Shipping & Delivery
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Store Location
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    My Account
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Orders Tracking
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Shopping Rates
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
