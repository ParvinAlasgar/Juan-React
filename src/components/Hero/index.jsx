import { Container } from "react-bootstrap";
import HeroImg from "../../assets/images/hero.png";
import "./style.scss";
const Hero = () => {
  return (
    <>
      <section id="hero" className="p-4">
        <Container className="position-relative text-white">
          <img className="img-fluid w-100" src={HeroImg}></img>
          <div className="hero-content position-absolute px-4">
            <h5>Best Selling!</h5>
            <h2 className="fw-bold">Top Collection</h2>
            <p>
              Lorem ipsum dolor is amet, cosectetur adipising elit, sed to
              eiusmod tempor incidid
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
