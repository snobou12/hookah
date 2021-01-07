import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Navbar, Container, NavbarBrand, Nav } from 'react-bootstrap';
import headerLogo from '../../assets/image/logo.png';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

import '../css/Header.css';
function Header({ activeItemProp, clickSmooth }) {
  const [backgroundImageHeader, setBackgroundImageHeader] = React.useState('defaultHeader');

  const liItems = [
    { name: 'О НАС', link: 'aboutUs', id: 0 },
    { name: 'МЕНЮ', link: 'menu', id: 1 },
    { name: 'НОВОСТИ', link: 'news', id: 2 },
  ];
  const listenScrollEvent = () => {
    if (window.scrollY > 0) {
      setBackgroundImageHeader('changeHeader');
    } else {
      setBackgroundImageHeader('defaultHeader');
    }
  };

  const navbarStyle = {
    height: '80px',
  };

  React.useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div>
      <Navbar
        className={
          backgroundImageHeader === 'defaultHeader' && activeItemProp === null
            ? 'navbarBackGroundTop'
            : 'navbarBackGroundDefault'
        }
        style={navbarStyle}
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
                    className={activeItemProp === obj.id ? 'active' : ''}
                    key={`${obj.name}:${obj.id}`}>
                    <Link key={obj.id} to={`/${obj.link}`}>
                      {obj.name}{' '}
                    </Link>
                  </li>
                ))}
              </div>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
}
Header.propTypes = {
  activeItemProp: PropTypes.string.isRequired,
  clickSmooth: PropTypes.func.isRequired,
};

Header.defaultProps = {
  activeItemProp: null,
};

export default Header;
