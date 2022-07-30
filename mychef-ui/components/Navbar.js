import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-stone-50">
      <div>
        <Link href="/" passHref>
          <a>
            <img
              className="m-3"
              src="/SVG.logo.purple.dark.svg"
              width={200}
              height={50}
              alt="Strapi Logo"
            ></img>
          </a>
        </Link>
      </div>
      <div  className="hidden w-full md:flex md:items-center md:w-auto"
      id="nav-menu">
        <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 space-x-2">
          <li>
            <Link href="/">
              <a className="md:p-2 py-2 block hover:text-purple-400 font-bold">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/menu">
              <a className="md:p-2 py-2 block hover:text-purple-400 font-bold" href="#">
                Menu
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;