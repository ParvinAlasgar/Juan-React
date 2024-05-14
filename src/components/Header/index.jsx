import { Col, Container, Row } from "react-bootstrap";
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { GiEuropeanFlag } from "react-icons/gi";
import logo from "../../assets/images/logo.webp";

import "./style.scss";
import { BiBasket, BiSearch } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";

const Header = () => {
  return (
    <section id="header">
      <div className="header-top bg-warning py-2">
        <Container>
          <Row className="d-flex justify-content-between align-items-center">
            <Col xs={6} sm={6} md={6} lg={6}>
              <p className="text-white m-0">Welcome to Juan online store</p>
            </Col>
            <Col
              xs={6}
              sm={6}
              md={6}
              lg={6}
              className="d-flex justify-content-end"
            >
              <ul className="list-unstyled d-flex gap-3 m-0">
                <li className="position-releative">
                  <a className="text-white text-decoration-none" href="#">
                    $ Dollar (US)
                    <IoMdArrowDropdown />
                  </a>
                  <ul className="list-unstyled dropdown position-absolute border bg-white p-2 px-4 d-none">
                    <li>
                      <a className="text-dark text-decoration-none" href="#">
                        $ Usd
                      </a>
                    </li>
                    <li>
                      <a className="text-dark text-decoration-none" href="#">
                        € Euro
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="text-white text-decoration-none" href="#">
                    <LiaFlagUsaSolid className="text-danger" />
                    English
                    <IoMdArrowDropdown />
                  </a>
                  <ul className="list-unstyled dropdown position-absolute border bg-white p-2 px-6 d-none">
                    <li>
                      <a className="text-dark text-decoration-none" href="#">
                        <LiaFlagUsaSolid className="text-danger" />
                        English
                      </a>
                    </li>
                    <li>
                      <a className="text-dark text-decoration-none" href="#">
                        <GiEuropeanFlag className="text-danger" />
                        France
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-bottom py-2">
        <Container>
          <Row className="d-flex justify-content-between align-items-center">
            <Col md={3} className="d-none d-md-block">
              <div className="logo">
                <img src={logo}></img>
              </div>
            </Col>
            <Col sm={12} md={7} className="d-flex justify-content-center">
              <nav>
                <ul className="menu list-unstyled d-flex gap-2 m-0">
                  <li className="list-unstyled position-relative">
                    <a className="text-dark text-decoration-none" href="#">
                      HOME
                      <IoMdArrowDropdown />
                    </a>
                    <ul className="dropdown d-none list-unstyled position-absolute border bg-white p-3 z-2">
                      <li>
                        <a className="text-dark text-decoration-none" href="#">
                          Home Version 01
                        </a>
                      </li>
                      <li>
                        <a className="text-dark text-decoration-none" href="#">
                          Home Version 02
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="list-unstyled">
                    <a className="text-dark text-decoration-none" href="#">
                      PAGES
                      <IoMdArrowDropdown />
                    </a>
                  </li>
                  <li className="list-unstyled position-relative">
                    <a className="text-dark text-decoration-none" href="#">
                      SHOP
                      <IoMdArrowDropdown />
                    </a>
                    <ul className="dropdown d-none list-unstyled position-absolute border bg-white p-3 z-2">
                      <li>
                        <a className="text-dark text-decoration-none" href="#">
                          Shop Grid Layout
                        </a>
                      </li>
                      <li>
                        <a className="text-dark text-decoration-none" href="#">
                          Shop List Layout
                        </a>
                      </li>
                      <li>
                        <a className="text-dark text-decoration-none" href="#">
                          Products Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="list-unstyled position-relative">
                    <a className="text-dark text-decoration-none" href="#">
                      BLOG
                      <IoMdArrowDropdown />
                    </a>
                    <ul className="dropdown d-none list-unstyled position-absolute border bg-white p-3 z-2">
                      <li>
                        <a className="text-dark text-decoration-none" href="#">
                          Blog Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a className="text-dark text-decoration-none" href="#">
                          Blog Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a className="text-dark text-decoration-none" href="#">
                          Blog Grid No Sidebar
                        </a>
                      </li>
                      <li>
                        <a className="text-dark text-decoration-none" href="#">
                          Blog Details
                        </a>
                      </li>
                      <li>
                        <a className="text-dark text-decoration-none" href="#">
                          Blog Details Audio
                        </a>
                      </li>
                      <li>
                        <a className="text-dark text-decoration-none" href="#">
                          Blog Details Video
                        </a>
                      </li>
                      <li>
                        <a className="text-dark text-decoration-none" href="#">
                          Blog Details Left Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="list-unstyled">
                    <a className="text-dark text-decoration-none" href="#">
                      CONTACT US
                    </a>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col
              md={2}
              className="d-none d-md-block  d-flex justify-content-end align-items-center"
            >
              <div className="wrapper d-flex justify-content-end">
                <ul className="list-unstyled d-flex m-0">
                  <li>
                    <a className="text-dark fs-5" href="#">
                      <BiSearch />
                    </a>
                  </li>
                  <li>
                    <a className="text-dark fs-5" href="#">
                      <CiSettings />
                    </a>
                  </li>
                  <li>
                    <a className="text-dark fs-5" href="#">
                      <BiBasket />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Header;
