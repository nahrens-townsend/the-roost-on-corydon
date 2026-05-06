import ContactSection from "@/components/sections/ContactSection";
import DirectionsSection from "@/components/sections/DirectionsSection";
import PageHero from "@/components/sections/PageHero";

export default function Contact() {
  return (
    <>
      <PageHero
        title="Visit Us"
        image={
          "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80"
        }
      />
      <ContactSection />
      <DirectionsSection />
    </>
  );
}
