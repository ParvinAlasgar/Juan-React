import { Col, Container, Row } from "react-bootstrap";
import Blog1 from "../../assets/images/blog-1.webp";
import Blog2 from "../../assets/images/blog-2.webp";
import Blog3 from "../../assets/images/blog-3.webp";
import "./style.scss";

const Blog = () => {
  return (
    <>
      <section id="blog" className="py-4">
        <Container>
          <div className="blog-content text-center mb-4">
            <h2 className="fw-bold">Our Blog</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing</h3>
          </div>
          <Row className="justify-content-center row-gap-3">
            <Col xs={6} sm={4}>
              <div className="blog-card">
                <div className="card-img">
                  <img className="img-fluid w-100" src={Blog1}></img>
                </div>
                <div className="card-content">
                  <a
                    className="text-decoration-none text-dark fw-bold fs-5"
                    href="#"
                  >
                    Celebrity Daughter Opens About to Having Her Eye color
                  </a>
                  <p className="text-secondary mt-2">
                    <strong>By</strong> : Admin, <strong>On</strong>: 14.07.2029
                  </p>
                  <a className="text-decoration-none text-secondary" href="#">
                    Read More...
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={4}>
              <div className="blog-card">
                <div className="card-img">
                  <img className="img-fluid w-100" src={Blog2}></img>
                </div>
                <div className="card-content">
                  <a
                    className="text-decoration-none text-dark fw-bold fs-5"
                    href="#"
                  >
                    Sotto Winner Offering Money To Any Man That Will Date Her
                  </a>
                  <p className="text-secondary mt-2">
                    <strong>By</strong> : Admin, <strong>On</strong>: 14.07.2029
                  </p>
                  <a className="text-decoration-none text-secondary" href="#">
                    Read More...
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={4}>
              <div className="blog-card">
                <div className="card-img">
                  <img className="img-fluid w-100" src={Blog3}></img>
                </div>
                <div className="card-content">
                  <a
                    className="text-decoration-none text-dark fw-bold fs-5"
                    href="#"
                  >
                    Children Left Home Alone For 4 Days In TV Series Experiment
                  </a>
                  <p className="text-secondary mt-2">
                    <strong>By</strong> : Admin, <strong>On</strong>: 14.07.2029
                  </p>
                  <a className="text-decoration-none text-secondary" href="#">
                    Read More...
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blog;
