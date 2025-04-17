
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

// Program data
const programs = [
  {
    id: "rehab",
    title: "Drug Addict Rehab Centers",
    description: "Our rehabilitation centers provide comprehensive support for individuals struggling with addiction. We offer medical detoxification, counseling, therapy, skill development, and reintegration support.",
    impact: "Over 1,200 individuals have successfully completed our rehabilitation program, with a 70% recovery rate.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "orphanages",
    title: "Orphanages (PANNAH)",
    description: "Our PANNAH orphanages provide safe, nurturing homes for children who have lost their parents. We ensure quality education, healthcare, emotional support, and recreational activities for holistic development.",
    impact: "Currently supporting 350 children across our orphanages, with 95% school attendance and 85% pursuing higher education.",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "senior-citizens",
    title: "Senior Citizen Centers",
    description: "Our centers for the elderly provide dignified living conditions, healthcare services, nutritious meals, social engagement activities, and emotional support for seniors who may be alone or vulnerable.",
    impact: "Supporting over 200 seniors in our centers, improving health outcomes and reducing isolation by 60%.",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "widow-training",
    title: "Widow Training Centers",
    description: "We empower widows through vocational training, financial literacy, entrepreneurship guidance, and community support groups to help them achieve economic independence and social integration.",
    impact: "Trained over 750 widows, with 65% now running their own small businesses or employed in sustainable livelihoods.",
    imageUrl: "https://images.unsplash.com/photo-1594708767771-a5f3f4642e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "education",
    title: "Adult Education (Prod Shiksha)",
    description: "Our Prod Shiksha program offers literacy classes, vocational skills training, digital literacy, and life skills education to adults who missed formal education opportunities.",
    impact: "Helped over 1,500 adults achieve functional literacy, with many advancing to vocational training and improved employment.",
    imageUrl: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "emergency",
    title: "Emergency Aid",
    description: "We provide rapid response humanitarian assistance during natural disasters, fires, floods, and other emergencies, offering food, shelter, medical aid, and rehabilitation support.",
    impact: "Assisted over 2,000 families during emergencies in the past 5 years, providing immediate relief and recovery support.",
    imageUrl: "https://images.unsplash.com/photo-1565100160515-b75d262d9618?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  }
];

const ProgramCard = ({ program }: { program: typeof programs[0] }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-64">
        <img 
          src={program.imageUrl} 
          alt={program.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-white text-2xl font-bold p-6">{program.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 mb-6">{program.description}</p>
        
        <div className="mb-6 bg-primary/5 p-4 rounded-md">
          <h4 className="text-lg font-semibold text-primary mb-2">Impact</h4>
          <p className="text-gray-700">{program.impact}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/programs/${program.id}`} 
            className="text-primary font-medium hover:underline inline-flex items-center"
          >
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <Link to="/donate" className="btn-accent">
            Support This Cause
          </Link>
        </div>
      </div>
    </div>
  );
};

const Programs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-gray-600">
              Through our diverse initiatives, we address critical needs in our communities and create pathways to sustainable change.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Support Our Work</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your contribution makes a real difference in the lives of those we serve. Help us continue and expand our programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate" className="bg-white text-primary hover:bg-gray-100 py-3 px-6 rounded-md font-medium transition-all">
              Donate Now
            </Link>
            <Link to="/get-involved" className="border-2 border-white text-white hover:bg-white hover:text-primary py-3 px-6 rounded-md font-medium transition-all">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
