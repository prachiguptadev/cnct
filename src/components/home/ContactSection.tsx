import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="">
          <div className="">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              Have questions or want to learn more about our work? We'd love to
              hear from you. Reach out to us directly or use the contact form to
              send us a message.
            </p>

            <div className="space-y-6 flex flex-row gap-x-24 ">
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Our Location</h3>
                  <p className="text-gray-600">
                    CARE FOR NEEDY CHARITABLE TRUST
                    <br />
                    Main Office Address
                    <br />B - 250, B - Block, Jahangirpuri, Delhi - 110033
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:careforneedytrust@gmail.com"
                      className="hover:underline text-primary"
                    >
                      careforneedytrust@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="text-gray-600">
                    <a
                      href="tel:+917709113999"
                      className="hover:underline text-primary"
                    >
                      +91 7709 113 999
                    </a>{" "}
                    <br />
                    <a
                      href="tel:+919811319535"
                      className="hover:underline text-primary"
                    >
                      +91 9811 319 535
                    </a>
                    <br />
                    <a
                      href="tel:+919999604559"
                      className="hover:underline text-primary"
                    >
                      +91 9999 604 559
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/contact" className="btn-primary inline-block">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
