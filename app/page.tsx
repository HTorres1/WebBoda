import { Navbar } from "../components/wedding/navbar";
import { HeroSection } from "../components/wedding/hero-section";
import { CountdownSection } from "../components/wedding/countdown-section";
import { StorySection } from "../components/wedding/story-section";
import { GallerySection } from "../components/wedding/gallery-section";
import { EventDetails } from "../components/wedding/event-details";
import { RsvpSection } from "../components/wedding/rsvp-section";
import { Footer } from "../components/wedding/footer";

export default function WeddingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CountdownSection />
      <StorySection />
      <GallerySection />
      <EventDetails />
      <RsvpSection />
      <Footer />
    </main>
  );
}
