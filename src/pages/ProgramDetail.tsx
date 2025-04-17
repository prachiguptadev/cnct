
import Layout from "@/components/layout/Layout";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Heart, Users, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Program data with detailed information
const programsData = {
  rehab: {
    title: "Reclaiming Lives: Drug De-Addiction Program",
    tagline: "Hope Begins with Healing.",
    overview: "India's growing addiction crisis has devastated countless families. CNCT has been on the frontline for 19 years, providing free counseling, rehabilitation, and spiritual healing to the poor.",
    impact: [
      "Over 5558 addicts counseled and rehabilitated",
      "Programs running in Delhi, UP, and Pune",
      "Collaboration with local hospitals & health centers"
    ],
    howToHelp: [
      "Sponsor a month of rehab for ₹1500",
      "Volunteer for counseling or wellness workshops"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1522152553976-dcde04deba72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1620374645536-499de3d48547?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    bannerImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  orphanages: {
    title: "PANNAH: A Shelter of Love for Orphans",
    tagline: "Every child deserves a family.",
    overview: "Our orphanage initiative \"PANNAH\" offers a safe, nurturing home to abandoned and orphaned children. We provide food, education, and emotional support.",
    impact: [
      "Over 100 children supported annually",
      "Birthdays & festivals celebrated with donors",
      "Schools setup in Jagatpur & Sabalpur, UP"
    ],
    howToHelp: [
      "Sponsor a child's education at ₹800/month",
      "Donate clothes, books, or toys"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    bannerImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  "senior-citizens": {
    title: "Dignity in Age: Senior Care Initiative",
    tagline: "Because they cared for us once.",
    overview: "Our rehabilitation centers provide a second home for elderly who are homeless or abandoned. With medical care, companionship, and dignity, we support their golden years.",
    impact: [
      "Centers in Pune, Delhi & UP",
      "Weekly health checkups and festive celebrations",
      "Emotional counseling & group activities"
    ],
    howToHelp: [
      "Sponsor medical care for ₹1000/month",
      "Organize a group visit or volunteer with us"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1544385543-2e61b440a0b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    bannerImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  "widow-training": {
    title: "Empowering Women Through Skills & Literacy",
    tagline: "Self-Reliance Starts with Education.",
    overview: "We help widows and underprivileged women stand on their feet through Silai Prashikshan (stitching training), adult education, and personality development workshops.",
    impact: [
      "300+ women trained in tailoring & embroidery",
      "3 adult education centers in UP and Bihar",
      "Monthly workshops on hygiene, rights, and finance"
    ],
    howToHelp: [
      "Sponsor a training kit for ₹500",
      "Volunteer for a skill development session"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1594708767771-a5f3f4642e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1581339942573-14d929c5d321?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    bannerImage: "https://images.unsplash.com/photo-1594708767771-a5f3f4642e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  emergency: {
    title: "Emergency Response & Disaster Aid",
    tagline: "Compassion in Times of Crisis.",
    overview: "Whether it's floods, fires, or pandemics, CNCT provides dry ration, medicine, clothes, and shelter to affected communities—fast and free.",
    impact: [
      "Relief during COVID-19 in Pune, Wagholi & Dhanori",
      "Food & medical kits for 500+ families",
      "Quick response stalls in disaster-hit areas"
    ],
    howToHelp: [
      "Contribute ₹1000 for a disaster relief kit",
      "Join our relief team as a field volunteer"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1565100160515-b75d262d9618?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1587439668351-84ac04a22452?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    bannerImage: "https://images.unsplash.com/photo-1565100160515-b75d262d9618?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  education: {
    title: "Adult Literacy & Village Education Programs",
    tagline: "Education is the strongest foundation.",
    overview: "Education is the core of long-term upliftment. CNCT provides adult education for illiterate women and runs schools for poor children in remote villages.",
    impact: [
      "2 running schools in Farrukhabad (UP)",
      "500+ adult learners taught reading, writing, and math",
      "Workshops on personality development & hygiene"
    ],
    howToHelp: [
      "Donate school supplies for ₹300",
      "Sponsor a teacher's salary for ₹5000/month"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    bannerImage: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  }
};

const ProgramDetail = () => {
  const { programId } = useParams();
  
  // Check if the program exists
  if (!programId || !programsData[programId as keyof typeof programsData]) {
    return <Navigate to="/programs" replace />;
  }
  
  const program = programsData[programId as keyof typeof programsData];

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative h-80 md:h-96">
        <div className="absolute inset-0">
          <img 
            src={program.bannerImage} 
            alt={program.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
        </div>
        <div className="relative container-custom h-full flex flex-col justify-end pb-12">
          <Link 
            to="/programs" 
            className="text-white hover:text-primary flex items-center mb-4"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Programs
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{program.title}</h1>
          <p className="text-xl text-white/90 italic">{program.tagline}</p>
        </div>
      </div>

      {/* Program Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <p className="text-gray-700 mb-10 text-lg">{program.overview}</p>

              <h2 className="text-2xl font-bold mb-6">Our Impact</h2>
              <ul className="space-y-3 mb-10">
                {program.impact.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CircleCheck className="text-primary shrink-0 mt-1 mr-3" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-6">Gallery</h2>
              <Carousel className="w-full mb-10">
                <CarouselContent>
                  {program.gallery.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-0">
                            <img 
                              src={image} 
                              alt={`${program.title} - Image ${index + 1}`} 
                              className="w-full h-full object-cover rounded-md"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            {/* Right Column */}
            <div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Heart className="text-primary mr-2" size={20} />
                  How You Can Help
                </h3>
                <ul className="space-y-3 mb-6">
                  {program.howToHelp.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                  ))}
                </ul>
                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <Link to="/donate">Donate Now</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/get-involved">Volunteer</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="text-primary mr-2" size={20} />
                  People Impacted
                </h3>
                <p className="text-gray-700 mb-4">
                  Your contribution directly helps those in need and creates lasting change in their lives.
                </p>
                <Link 
                  to="/get-involved" 
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  See more ways to help
                  <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-14 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Support Our Work</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your contribution makes a real difference in the lives of those we serve. 
            Help us continue and expand our programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/get-involved">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramDetail;
