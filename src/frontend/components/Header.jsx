import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import backGroundHeader from '../../assets/image/snow.jpg';
import { setMenuItem } from '../redux/actions/headerMenu';
import { useDispatch } from 'react-redux';
import { Navbar, Container, NavbarBrand, Nav } from 'react-bootstrap';
import headerLogo from '../../assets/image/logo.png';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { TableModal } from '../components';
function Header({ activeItemProp, clickSmooth }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setMenuItem(null));
  }, []);
  const liItems = [
    { name: 'О НАС', link: 'aboutUs', id: 0 },
    { name: 'МЕНЮ', link: 'menu', id: 1 },
    { name: 'НОВОСТИ', link: 'news', id: 2 },
  ];

  return (
    <div>
      <Navbar
        style={{ height: '80px', backgroundImage: `url(${backGroundHeader})` }}
        fixed="top"
        expand="md"
        bg="dark"
        variant="dark">
        <Container>
          <NavbarBrand>
            <Link to="/">
              <img
                onClick={() => clickSmooth()}
                src={headerLogo}
                alt=""
                height="100%"
                width="100%"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Link>
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <div className="ulHeader">
                {liItems.map((obj) => (
                  <li
                    onClick={() => clickSmooth()}
                    className={activeItemProp == obj.id ? 'active' : ''}
                    key={`${obj.name}:${obj.id}`}>
                    <Link key={obj.id} to={`/${obj.link}`}>
                      {obj.name}{' '}
                    </Link>
                  </li>
                ))}
                <li id="reserveBtn">ЗАБРОНИРОВАТЬ</li>
              </div>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
