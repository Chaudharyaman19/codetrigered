import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/100 backdrop-md" : "bg-black/100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center lg:justify-center md: justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white">
              <img
                className=" md:h-8 w-8 rounded-full bg-white"
                src={logo}
              ></img>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-5 flex items-baseline space-x-1">
              <NavLink to="/" current={location.pathname === "/"}>
                Home
              </NavLink>
              <NavLink
                to="/services"
                current={location.pathname === "/services"}
              >
                Services
              </NavLink>
              <NavLink to="/about" current={location.pathname === "/about"}>
                About
              </NavLink>
              <NavLink to="/contact" current={location.pathname === "/contact"}>
                Contact
              </NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" current={location.pathname === "/"}>
              Home
            </MobileNavLink>
            <MobileNavLink
              to="/services"
              current={location.pathname === "/services"}
            >
              Services
            </MobileNavLink>
            <MobileNavLink to="/about" current={location.pathname === "/about"}>
              About
            </MobileNavLink>
            <MobileNavLink
              to="/contact"
              current={location.pathname === "/contact"}
            >
              Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  to,
  current,
  children,
}: {
  to: string;
  current: boolean;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className={`${
      current ? "text-white" : "text-gray-300 hover:text-white"
    } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  to,
  current,
  children,
}: {
  to: string;
  current: boolean;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className={`${
      current
        ? "bg-gray-900 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    } block px-3 py-2 rounded-md text-base font-medium`}
  >
    {children}
  </Link>
);

export default Navbar;
