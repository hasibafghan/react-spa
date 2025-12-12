import './Navbar.css'

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";

function MyNavbar() {
  const expand = "md";
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        style={{ backgroundColor: "rgb(186, 182 ,253)" }}
        className="mb-3"
      >
        <Container >
          <Navbar.Brand href="#" style={{fontFamily:'Lalezar' , fontSize: '27px'}}>افغانستان من</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink to='/' className='nav-link'>صفحه اصلی</NavLink>
                <NavLink to='/about' className='nav-link'>درباره ما</NavLink>
                <NavLink to='/blog' className='nav-link'>مقالات</NavLink>
                <NavLink to='/panel' className='nav-link'>پنل</NavLink>
                <NavLink to='/login' className='nav-link'>ورود</NavLink>
              </Nav>

              {/* <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>صفحه اصلی</NavLink>
                  <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>درباره ما</NavLink>
                  <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>مقالات</NavLink>
                  <NavLink to="/panel" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>پنل</NavLink>
                  <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>ورود</NavLink>
               </Nav>   */}

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
