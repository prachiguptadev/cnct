
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Compassion in Action
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Empowering lives through hope, healing, and sustainable support. Join us in making a difference today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate" className="btn-primary text-center">
              Donate Now
            </Link>
            <Link to="/get-involved" className="btn-outline text-center">
              Get Involved
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-fixed opacity-5 mix-blend-overlay"></div>
    </section>
  );
};

export default HeroSection;
