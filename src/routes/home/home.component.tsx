import { Col, Nav, Row } from "react-bootstrap";
import { CustomButton } from "../../components/button/custom-button.component";
import "./home.styles.scss";
import { LinkContainer } from "react-router-bootstrap";

const Home = () => {
  return (
    <div className="home-container">
      <Row style={{ justifyContent: "center", alignItems: "center" }}>
        <Col sm={12} xxl={6}>
          <div className="text-start animated animatedFadeInLeft fadeInLeft">
            <p className="font-face-hatton-b display-4">Welcome to the</p>
            <p className="font-face-hatton-b display-1">POSITIVE BLOG</p>
            <p style={{ margin: "2em 0 5em 0" }}>
              Explore the vast horizons of coding and technology with us. Dive
              into insightful articles, ride the waves of innovation, and
              connect with a thriving community of fellow programmers. Whether
              you are a beginner or a seasoned pro, join us on this coding
              adventure.
            </p>
            <LinkContainer to="/blog">
              <Nav.Link>
                <CustomButton
                  text="BROWSE"
                  size="large"
                  type="outline"
                  backgroundColor="transparent"
                />
              </Nav.Link>
            </LinkContainer>
          </div>
        </Col>
        <Col
          sm={12}
          xxl={6}
          style={{ marginTop: "1em" }}
          className="animated animatedFadeInRight fadeInRight"
        >
          <img src="assets/home/home-background.svg" style={{ maxWidth: "100%" }} />
        </Col>
      </Row>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
};

export default Home;
