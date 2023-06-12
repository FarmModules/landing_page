import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top border border-primary" data-spy="affix" data-offset-top="0">
      <div className="container">
        <Link href="/" passHref>
          <div className="navbar-brand">
            <img
              src="https://www.farmmodules.tech/wp-content/uploads/2021/09/cropped-FMlogo.png"
              alt=""
              className="h-10 mr-2"
            />
          </div>
        </Link>
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

        <div className="collapse navbar-collapse border border-primary" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item">
              <Link href="/" >
                Solutions
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
              About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Team">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

