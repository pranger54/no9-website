import PageHero from "../components/PageHero";
import AboutSection from "../components/sections/AboutSection";
import Testimonial from "../components/sections/Testimonial";
import AwardsBar from "../components/sections/AwardsBar";
import CTA from "../components/sections/CTA";
import { PHOTOS } from "../data/photos";

export default function Studio() {
  return (
    <>
      <PageHero
        label="The Studio"
        photo={PHOTOS.about1}
        title={<>Architecture as a <em>practice of listening</em></>}
      />
      <AboutSection />
      <Testimonial />
      <AwardsBar />
      <CTA />
    </>
  );
}
