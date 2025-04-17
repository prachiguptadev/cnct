import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

const ProgramCard = ({
  title,
  description,
  imageUrl,
  slug,
}: ProgramCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </CardContent>
    </Card>
  );
};

const ProgramsHighlight = () => {
  const programs = [
    {
      title: "Drug Addict Rehab Centers",
      description:
        "Helping individuals overcome addiction through comprehensive rehabilitation programs and support.",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      slug: "rehab",
    },
    {
      title: "Orphanages (PANNAH)",
      description:
        "Providing loving homes, education, and care for children who have lost their parents or families.",
      imageUrl:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      slug: "orphanages",
    },
    {
      title: "Senior Citizen Home",
      description:
        "Creating supportive communities for elderly individuals, ensuring dignity and care in their golden years.",
      imageUrl:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      slug: "senior-citizens",
    },
    {
      title: "Women Training Centers",
      description:
        "Empowering widows through skills training, emotional support, and economic opportunities.",
      imageUrl:
        "https://images.unsplash.com/photo-1594708767771-a5f3f4642e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      slug: "widow-training",
    },
    {
      title: "Education (Prod Shiksha)",
      description:
        "Providing literacy and educational opportunities for adults to improve their lives and livelihoods.",
      imageUrl:
        "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      slug: "education",
    },
    {
      title: "Emergency Aid",
      description:
        "Responding quickly to disasters and emergencies with essential supplies and support for affected families.",
      imageUrl:
        "https://images.unsplash.com/photo-1565100160515-b75d262d9618?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      slug: "emergency",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through our diverse initiatives, we address critical needs in our
            communities and create pathways to sustainable change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsHighlight;
