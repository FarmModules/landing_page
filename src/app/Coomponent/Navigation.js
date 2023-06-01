import Link from 'next/link';

const Navigation = () => {
  return (
    <nav class="fixed-top bg-white shadow-sm">
      <div class="container mx-auto flex justify-content-center">
        <Link href="/" class="py-2 flex items-center text-xl font-bold text-gray-800">
          <img src="https://www.farmmodules.tech/wp-content/uploads/2021/09/cropped-FMlogo.png" alt="" class="h-10 mr-2"  />
        </Link>
        <ul class="flex flex-col md:flex-row justify-content-between mx-auto justify-content-center py-8 ">
          <li class="nav-item">
            <Link href="/" class="nav-link py-2 px-4 text-gray-600 text-align:center">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/about" class="nav-link py-2 px-4 text-gray-600 text-align:center">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/service" class="nav-link py-2 px-4 text-gray-600 text-align:center">
              Service
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/portfolio" class="nav-link py-2 px-4 text-gray-600 text-align:center">
              Portfolio
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/testmonial" class="nav-link py-2 px-4 text-gray-600 text-align:center">
              Testmonial
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/blog" class="nav-link py-2 px-4 text-gray-600 text-align:center">
              Blog
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/contact" class="nav-link py-2 px-4 text-gray-600 text-align:center">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;