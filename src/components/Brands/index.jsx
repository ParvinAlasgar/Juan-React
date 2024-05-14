import { Col, Container, Row } from "react-bootstrap";
import Brand1 from "../../assets/images/br1.webp";
import Brand2 from "../../assets/images/br2.webp";
import Brand3 from "../../assets/images/br3.webp";
import Brand4 from "../../assets/images/br4.webp";
import "./style.scss";

const Brands = () => {
  return (
    <>
      <section id="brands" className="py-3">
        <Container>
          <Row className="justify-content-center row-gap-3">
            <Col xs={6} sm={4} md={3}>
              <div className="brand-img">
                <img className="img-fluid w-100" src={Brand1}></img>
              </div>
            </Col>
            <Col xs={6} sm={4} md={3}>
              <div className="brand-img">
                <img className="img-fluid w-100" src={Brand2}></img>
              </div>
            </Col>
            <Col xs={6} sm={4} md={3}>
              <div className="brand-img">
                <img className="img-fluid w-100" src={Brand3}></img>
              </div>
            </Col>
            <Col xs={6} sm={4} md={3}>
              <div className="brand-img">
                <img className="img-fluid w-100" src={Brand4}></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Brands;
