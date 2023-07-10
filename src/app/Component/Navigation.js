'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); // Set initial state

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    if (isMobile) {
      // Close the navigation menu when a link is clicked
      const navbarCollapse = document.querySelector('.navbar-collapse');
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top" data-spy="affix" data-offset-top="0">
      <div className="container">
        <Link href="/" passHref>
          <div className="navbar-brand">
            <Image
              src="https://www.farmmodules.tech/wp-content/uploads/2021/09/cropped-FMlogo.png"
              alt=""
              className="h-10 mr-2"
            />
          </div>
        </Link>
        {isMobile ? (
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        ) : null}

        <div className={isMobile ? 'navbar-collapse collapse' : 'navbar-collapse'} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto align-items-center gap-8">
            <li className="nav-item">
              <Link href="#Solution" passHref style={{ textDecoration: 'none' }}>
                <div className="nav-link" onClick={handleLinkClick}>
                  Solutions
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#About" passHref style={{ textDecoration: 'none' }}>
                <div className="nav-link" onClick={handleLinkClick}>
                  About
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#Team" passHref style={{ textDecoration: 'none' }}>
                <div className="nav-link" onClick={handleLinkClick}>
                  Team
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#Contact" passHref style={{ textDecoration: 'none' }}>
                <div className="nav-link" onClick={handleLinkClick}>
                  Contact
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
