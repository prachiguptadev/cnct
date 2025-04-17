
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import StatsSection from "@/components/home/StatsSection";
import ProgramsHighlight from "@/components/home/ProgramsHighlight";
import ContactSection from "@/components/home/ContactSection";
import Layout from "@/components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <ProgramsHighlight />
      <ContactSection />
    </Layout>
  );
};

export default Home;
