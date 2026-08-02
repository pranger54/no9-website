import Hero from "../components/sections/Hero";
import Marquee from "../components/Marquee";
import ProjectsGrid from "../components/sections/ProjectsGrid";
import AboutSection from "../components/sections/AboutSection";
// import ServicesGrid from "../components/sections/ServicesGrid";
// import Testimonial from "../components/sections/Testimonial";
// import AwardsBar from "../components/sections/AwardsBar";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ProjectsGrid />
      <AboutSection />
      {/* <ServicesGrid /> */}
      {/* <Testimonial /> */}
      {/* <AwardsBar /> */}
      <CTA />
    </>
  );
}
