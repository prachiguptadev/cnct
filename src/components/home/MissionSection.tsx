const MissionSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div>
          <img src="/assets/cnct-logo.png" alt=""  className="h-[150px] w-[150px] mx-auto text-center mt-[-50px] mb-14"/>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700">
            <strong >CARE FOR NEEDY CHARITABLE TRUST</strong>{" "}
            <br />
            <p className="mt-3">
              This is dedicated to uplifting vulnerable communities through
              compassionate service, sustainable development, and empowerment.
              We strive to create lasting change by addressing immediate needs
              while building pathways to self-sufficiency.
            </p>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-primary/5 card-hover">
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
            <p className="text-gray-700">
              We serve with empathy and understanding, recognizing the dignity
              of every individual we help.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-secondary/5 card-hover">
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Empowerment</h3>
            <p className="text-gray-700">
              We believe in equipping individuals with the skills, resources,
              and confidence to transform their lives.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-accent/5 card-hover">
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
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
            <p className="text-gray-700">
              We develop programs that create lasting impact and build
              self-sufficiency within communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
