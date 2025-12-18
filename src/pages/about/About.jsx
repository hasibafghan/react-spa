import MyNavbar from "../../components/navbar/Navbar";
import "./About.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <>
      <MyNavbar />

      <section className="about-hero">
        <Container>
          <h1>درباره ما</h1>
          <p>
            با ما مهارت‌های مدرن را یاد بگیرید، پروژه‌های واقعی بسازید و
            حرفه خود را رشد دهید.
          </p>
        </Container>
      </section>

      <Container className="about-content">
        <Row className="gy-4">
          <Col md={6}>
            <Card className="about-card">
              <Card.Body>
                <h3>🎯 ماموریت ما</h3>
                <p>
                  ماموریت ما ارائه دوره‌های برنامه‌نویسی عملی و با کیفیت
                  است تا دانشجویان از سطح مبتدی تا حرفه‌ای با اعتماد به نفس
                  پیشرفت کنند.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="about-card">
              <Card.Body>
                <h3>🚀 آنچه آموزش می‌دهیم</h3>
                <p>
                  تمرکز ما روی تکنولوژی‌های واقعی مانند React، Bootstrap، GitHub، 
                  توسعه بک‌اند و استانداردهای بهترین کدنویسی است.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="about-card">
              <Card.Body>
                <h3>💡 چرا ما را انتخاب کنید؟</h3>
                <ul>
                  <li>یادگیری پروژه‌محور</li>
                  <li>کدنویسی تمیز و استاندارد</li>
                  <li>توضیحات مناسب برای مبتدیان</li>
                  <li>محیط یادگیری پشتیبان</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="about-card">
              <Card.Body>
                <h3>💡 چرا ما را انتخاب کنید؟</h3>
                <ul>
                  <li>یادگیری پروژه‌محور</li>
                  <li>کدنویسی تمیز و استاندارد</li>
                  <li>توضیحات مناسب برای مبتدیان</li>
                  <li>محیط یادگیری پشتیبان</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
