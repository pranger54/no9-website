import PageHero from "../components/PageHero";
import ServicesGrid from "../components/sections/ServicesGrid";
import Marquee from "../components/Marquee";
import CTA from "../components/sections/CTA";
import { PHOTOS } from "../data/photos";

export default function Services() {
  return (
    <>
      <PageHero
        label="What We Do"
        photo={PHOTOS.cta}
        title={<>Full-spectrum design, <em>from ground to sky</em></>}
      />
      <ServicesGrid />
      <Marquee />
      <CTA />
    </>
  );
}
