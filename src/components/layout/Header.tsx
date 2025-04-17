import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");

  const toggleDropdown = (name: string) => {
    setDropdownOpen(dropdownOpen === name ? "" : name);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setDropdownOpen("");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              <img
                src="/assets/cnct-logo.png"
                alt=""
                className="h-[70px] w-[70px]"
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary font-medium"
            >
              About Us
            </Link>
            {/*             
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-primary font-medium"
                onClick={() => toggleDropdown("programs")}
              >
                Programs <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/programs/rehab" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Drug Addict Rehab Centers
                  </Link>
                  <Link to="/programs/orphanages" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Orphanages (PANNAH)
                  </Link>
                  <Link to="/programs/senior-citizens" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Senior Citizen Centers
                  </Link>
                  <Link to="/programs/widow-training" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Widow Training Centers
                  </Link>
                  <Link to="/programs/education" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Adult Education
                  </Link>
                  <Link to="/programs/emergency" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Emergency Aid
                  </Link>
                </div>
              </div>
            </div>
             */}
            <Link
              to="/get-involved"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Get Involved
            </Link>
            <Link
              to="/media"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Media & Reports
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Donate Button */}
          <Link to="/donate" className="hidden lg:block btn-primary">
            Donate Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white pb-4">
          <nav className="container-custom flex flex-col space-y-4">
            <Link to="/" className="py-2 text-gray-700" onClick={closeMenu}>
              Home
            </Link>
            <Link
              to="/about"
              className="py-2 text-gray-700"
              onClick={closeMenu}
            >
              About Us
            </Link>

            {/* Mobile Programs Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-gray-700"
                onClick={() => toggleDropdown("programs")}
              >
                Programs
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    dropdownOpen === "programs" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen === "programs" && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                  <Link
                    to="/programs/rehab"
                    className="block py-2 text-gray-700"
                    onClick={closeMenu}
                  >
                    Drug Addict Rehab Centers
                  </Link>
                  <Link
                    to="/programs/orphanages"
                    className="block py-2 text-gray-700"
                    onClick={closeMenu}
                  >
                    Orphanages (PANNAH)
                  </Link>
                  <Link
                    to="/programs/senior-citizens"
                    className="block py-2 text-gray-700"
                    onClick={closeMenu}
                  >
                    Senior Citizen Centers
                  </Link>
                  <Link
                    to="/programs/widow-training"
                    className="block py-2 text-gray-700"
                    onClick={closeMenu}
                  >
                    Widow Training Centers
                  </Link>
                  <Link
                    to="/programs/education"
                    className="block py-2 text-gray-700"
                    onClick={closeMenu}
                  >
                    Adult Education
                  </Link>
                  <Link
                    to="/programs/emergency"
                    className="block py-2 text-gray-700"
                    onClick={closeMenu}
                  >
                    Emergency Aid
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/get-involved"
              className="py-2 text-gray-700"
              onClick={closeMenu}
            >
              Get Involved
            </Link>
            <Link
              to="/media"
              className="py-2 text-gray-700"
              onClick={closeMenu}
            >
              Media & Reports
            </Link>
            <Link
              to="/contact"
              className="py-2 text-gray-700"
              onClick={closeMenu}
            >
              Contact
            </Link>

            <Link
              to="/donate"
              className="btn-primary text-center"
              onClick={closeMenu}
            >
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
