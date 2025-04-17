import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* About Column */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              CARE FOR NEEDY CHARITABLE TRUST
            </h4>
            <p className="text-gray-300 mb-4">
              Empowering lives through compassion and service since 2005. Our
              mission is to provide support to the vulnerable and create
              sustainable change.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-300 hover:text-white">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved"
                  className="text-gray-300 hover:text-white"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-gray-300 hover:text-white">
                  Media & Reports
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-white">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-300 hover:text-white"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-gray-300 hover:text-white"
                >
                  Refund Policy
                </Link>
              </li>

              <li>
                <Link
                  to=""
                  className="text-gray-300 hover:text-white"
                >
                  Invoices


                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="" className="text-gray-300 hover:text-white">
                  Drug Rehab Centers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Orphanages (PANNAH)
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-300 hover:text-white">
                  Senior Citizen Centers
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-300 hover:text-white">
                  Widow Training
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-300 hover:text-white">
                  Adult Education
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-300 hover:text-white">
                  Emergency Aid
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  B - 250, B - Block, Jahangirpuri, Delhi - 11003
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a
                  href="tel:+919762863222"
                  className="text-gray-300 hover:text-white"
                >
                  +91 9762863222
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a
                  href="tel:+918698299995"
                  className="text-gray-300 hover:text-white"
                >
                  +91 8698299995
                </a>
              </li>

              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a
                  href="mailto:careforneedytrust@gmail.com"
                  className="text-gray-300 hover:text-white"
                >
                  careforneedytrust@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} CARE FOR NEEDY CHARITABLE TRUST. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0 text-sm text-gray-400">
              <span>
                Registered under 12AA, 80G & Niti Aayog | PAN: AACTC2910K | LEI:
                9845009CC0C8CDO6B805
              </span>
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-gray-400">
            <span>📍 Delhi | Pune | Rajasthan | Bihar | Haryana | UP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
