import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <h2 className="text-2xl text-primary mb-4">
              Temple of Humanity - मानवता का मंदिर
            </h2>
            <p className="text-xl text-gray-600">
              CARE FOR NEEDY CHARITABLE TRUST has been serving vulnerable
              communities since 2005, guided by our mission to create
              sustainable change through compassionate action.
            </p>
          </div>
        </div>
      </section>

      {/* History and Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                We are a non-profit charitable trust working since 2005 to serve
                the underprivileged in India. We run Drug De-addiction Centers,
                Orphanages, Adult Education for Women, Rehabilitation Centers
                for Senior Citizens, and organize emergency relief during
                natural calamities.
              </p>
              <p className="text-gray-700 mb-4">
                Throughout our journey, we have remained committed to our
                founding principle: serving with compassion and dignity. Our
                vision, as articulated by our Founder & Chairman Dr. Ajay Lall:
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-gray-700 my-6">
                "With our little sacrifice, we can bring big change to someone's
                life."
              </blockquote>
              <p className="text-gray-700">
                Today, we operate in multiple locations across India, serving
                thousands of individuals annually. Our growth reflects both the
                critical needs in our communities and the generous spirit of our
                supporters and volunteers.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Children at CNCT Orphanage"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Where We Work</h2>
            <p className="text-xl text-gray-600">
              Our work spans across multiple states in India, reaching those who
              need our help the most.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold">Maharashtra</h3>
              <p className="text-gray-600 mt-2">Lohegaon, Pune</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold">Uttar Pradesh</h3>
              <p className="text-gray-600 mt-2">
                Jagatpur, Sabalpur, Chandapur & Fatehgarh
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold">Bihar</h3>
              <p className="text-gray-600 mt-2">Kishan Gunj, Patna</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold">Haryana</h3>
              <p className="text-gray-600 mt-2">Sonipat, Gurugram</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold">Rajasthan</h3>
              <p className="text-gray-600 mt-2">Jaiselmer, Jaipur</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold">Delhi</h3>
              <p className="text-gray-600 mt-2">
                Nangloi, Jahangirpuri, Burari
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600">
              These core values guide our work and define our approach to
              service and community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Compassion</h3>
              <p className="text-gray-600">
                We approach every individual with empathy, respect, and
                understanding.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in the power of community to heal, support, and
                transform lives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of transparency and
                accountability in all we do.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-charity-highlight rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Empowerment</h3>
              <p className="text-gray-600">
                We focus on building skills, confidence, and self-reliance in
                those we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Our Leadership
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-x-44">
            <div className="text-center max-w-md">
              <div className="mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="/assets/chairman.jpeg"
                  alt="Dr. Chairman"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Dr. Ajay Lall</h3>
              <p className="text-gray-600">Founder & Chairman</p>
              <div className="flex items-center">
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
                  <p className="text-gray-600">
                    <a
                      href="tel:+917709113999"
                      className="hover:underline text-primary"
                    >
                      +91 7709 113 999
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center max-w-md">
              <div className="mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="/assets/treasurer.jpeg"
                  alt="Dr. Treasurer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Mr. Inderjeet Upadhyay</h3>
              <p className="text-gray-600">Treasurer</p>
              <div className="flex items-center">
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
                  <p className="text-gray-600">
                    <a
                      href="tel:+919811319535"
                      className="hover:underline text-primary"
                    >
                      +91 9811 319 535
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center max-w-md">
              <div className="mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="/assets/secretary.jpeg"
                  alt="Dr. Secretary"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Dr. Satish C. Chauhan</h3>
              <p className="text-gray-600">Secretary</p>
              <div className="flex items-center">
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
                  <p className="text-gray-600">
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
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="section-padding bg-white">
        <p className="text-xl text-gray-600 text-center container-custom">
          We would like to inform you that “CARE FOR NEEDY CHARITABLE TRUST” (
          CNCT ) a voluntary organization registered under society registration
          act 1860. The organization registered on. 11/Oct./2017 vides
          registration no. 1410/2017/ Pune. The Society also registration under
          act 1950 /29- F- 50182/Pune , under section 12A & 80G Income Tax Act
          1961. This NGO is also registered with Darpan - Niti Aayog, GST, CSR
          registration & LEI registration.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Together, we can make a lasting difference in the lives of
            vulnerable individuals and communities. Support our work through
            donations or by volunteering your time and skills.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/donate"
              className="bg-white text-primary hover:bg-gray-100 py-3 px-6 rounded-md font-medium transition-all"
            >
              Donate Now
            </Link>
            <Link
              to="/get-involved"
              className="border-2 border-white text-white hover:bg-white hover:text-primary py-3 px-6 rounded-md font-medium transition-all"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
