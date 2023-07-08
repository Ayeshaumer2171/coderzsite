import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CiSearch } from 'react-icons/ci';
import { BsCart, BsHeart } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import MyImage from './ayeshalogo.png';

function Menu() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="sticky z-50 top-0">
      {[false].map((expand) => (
        <Navbar key={expand} bg="light transparent" expand={expand} className="mb-0">
          <Container fluid className="flex justify-between">
            <Navbar.Toggle className="ml-10" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="#" className="mx-auto">
              <img src={MyImage} alt="My Image" width={80} height={100} />
            </Navbar.Brand>
            <Navbar.Brand className="icon flex">
              <div className="relative">
                <CiSearch onClick={toggleSearch} />
                {showSearch && (
                  <div className="search-popup">
                    <input type="text" placeholder="Search" />
                  </div>
                )}
              </div>
                <BsHeart className="w-10" />
                <div className="absolute bottom-4 text-xs ml-7"></div>
                <VscAccount className="w-10" />
              <BsCart className="w-10" />
              <div className="text-xs pt-1">(0)</div>
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>MENU</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="menus bg-[#f6f6f6]">
                <Link
                  to="/shawls"
                  className="no-underline text-black block py-2 px-4 hover:bg-gray-200 rounded"
                >
                    SHAWLS
                </Link>
                <Link
                  to="/unstiched"
                  className="no-underline text-black block py-2 px-4 hover:bg-gray-200 rounded"
                >
                  UNSTITCHED
                </Link>
                <Link
                  to="/readytowear"
                  className="no-underline text-black block py-2 px-4 hover:bg-gray-200 rounded"
                >
                  READY TO WEAR
                </Link>
                <Link
                  to="/dupattas"
                  className="no-underline text-black block py-2 px-4 hover:bg-gray-200 rounded"
                >
                  DUPATTAS
                </Link>
                <Link
                  to="/bottoms"
                  className="no-underline text-black block py-2 px-4 hover:bg-gray-200 rounded"
                >
                  BOTTOMS
                </Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Menu;
