import { Col, Container, Row } from "react-bootstrap";
import ProductImg1 from "../../assets/images/product-1.webp";
import ProductImg2 from "../../assets/images/product-2.webp";
import ProductImg3 from "../../assets/images/product-3.webp";
import "./style.scss";

const Product = () => {
  return (
    <>
      <section id="product" className="py-4">
        <Container>
          <div className="product-content text-center">
            <h2>Our Product</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
          <Row>
            <Col xs={12} sm={4}>
              <div className="product border text-center">
                <div className="prduct-img">
                  <img className="img-fluid w-100" src={ProductImg1}></img>
                </div>
                <h6>Leather Mens Slipper</h6>
                <p>
                  $80.00
                  <span className="text-decoration-line-through">$ 70.00</span>
                </p>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="product border text-center">
                <div className="prduct-img">
                  <img className="img-fluid w-100" src={ProductImg2}></img>
                </div>
                <h6>Leather Mens Slipper</h6>
                <p>
                  $80.00
                  <span className="text-decoration-line-through">$ 70.00</span>
                </p>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="product border text-center">
                <div className="prduct-img">
                  <img className="img-fluid w-100" src={ProductImg3}></img>
                </div>
                <h6>Leather Mens Slipper</h6>
                <p>
                  $80.00
                  <span className="text-decoration-line-through">$ 70.00</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Product;
