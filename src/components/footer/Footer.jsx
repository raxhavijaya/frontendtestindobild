import React from "react";
import { Container, Row, Col } from "reactstrap";
import './footer.css'

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col className="copyright">
        <h3>© 2022 PT. Buana Artha Indopratama</h3>
        </Col>
      </Row>
    </Container>
  </footer>;
};

export default Footer;
