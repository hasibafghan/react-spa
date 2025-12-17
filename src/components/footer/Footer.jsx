import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col>
              <h4>درباره ما:</h4>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </Col>
            <Col style={{textAlign:'left'}}><img  src="https://cdn.zarinpal.com/badges/trustLogo/1.png" alt="" /></Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
