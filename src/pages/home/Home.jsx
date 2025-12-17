import "./Home.css";
import MyNavbar from "../../components/navbar/Navbar";
import HomeImage from "../../assets/images/programming.svg";
import CourseItem from "../../components/course/CourseItem";
import { Container, Row, Col } from "react-bootstrap";
// images
import bootstrap from "../../assets/images/CourseItem/bootstrap.png";
import github from "../../assets/images/CourseItem/github.jpg";
import nextjs from "../../assets/images/CourseItem/nextjs.jpg";
import react from "../../assets/images/CourseItem/react.jpg";
import { useState } from "react";

function Home() {
  const [courses, setCouses] = useState([
    {
      id: 1,
      title: "بوترسترپ",
      text: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ",
      image: bootstrap,
    },
    {
      id: 2,
      title: "گیت هاب",
      text: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ",
      image: github,
    },
    {
      id: 3,
      title: "نکس جی اس",
      text: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ",
      image: nextjs,
    },
    {
      id: 4,
      title: "ریکت",
      text: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ",
      image: react,
    },
  ]);
  return (
    <>
      <MyNavbar />
      <Container>
        <Row className="align-items-center my-4 mx-1 mx-sm-0">
          {/* lower then 992 we have one col below. Upper 992 we have two col. */}
          <Col lg={6}>
            <h1>افغانستان خانه همه افغان ها</h1>
            <p style={{ textAlign: "justify" }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </Col>
          {/* lower then 992 we have one col below. Upper 992 we have two col. */}
          <Col lg={6}>
            <img src={HomeImage} className="img-fluid" alt="" />
          </Col>

          <Row className="my-5">
            <h2 style={{ padding: "10px 0px" }}>دوره های اموزشی :</h2>
            {courses.map(course => (
              <Col key={course.id} md={6} lg={4} xl={3} className="py-3">
                <CourseItem {...course} />
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default Home;
