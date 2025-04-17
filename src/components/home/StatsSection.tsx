
const StatsSection = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="stats-card">
            <h3 className="text-4xl font-bold text-primary mb-2">5558+</h3>
            <p className="text-gray-600">Lives Helped</p>
          </div>
          
          <div className="stats-card">
            <h3 className="text-4xl font-bold text-primary mb-2">19</h3>
            <p className="text-gray-600">Years of Service</p>
          </div>
          
          <div className="stats-card">
            <h3 className="text-4xl font-bold text-primary mb-2">6</h3>
            <p className="text-gray-600">Major Programs</p>
          </div>
          
          <div className="stats-card">
            <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
            <p className="text-gray-600">Communities Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
