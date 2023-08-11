import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faMedium,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1>Mohammed Elazab</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/mohammed-elazab/"
                target="_blank"
                style={{ color: "white" }}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://github.com/MohammedElazab"
                target="_blank"
                style={{ color: "white" }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://medium.com/@mohammedelazab"
                target="_blank"
                style={{ color: "white" }}
              >
                <FontAwesomeIcon icon={faMedium} />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
