import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/Testimonial";
import DropinTubsPage from "./(dashboard)/dropin-tubs/page";
import AcloveTubs from "./(dashboard)/aclove-tubs/page";
import FreestandingTubs from "./(dashboard)/freestanding-tubs/page";
import ClawfootTubs from "./(dashboard)/clawfoot-tubs/page";
import JettedTubs from "./(dashboard)/jetted-tubs/page";

export default function Home() {
  console.log('NEXT_PUBLIC_SANITY_PROJECT_ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  console.log('NEXT_PUBLIC_SANITY_DATASET:', process.env.NEXT_PUBLIC_SANITY_DATASET);
  console.log('NEXT_PUBLIC_SANITY_API_VERSION:', process.env.NEXT_PUBLIC_SANITY_API_VERSION);
  return (
    <div>
      <Hero />
      <FreestandingTubs />
      <ClawfootTubs />
      <DropinTubsPage />
      <AcloveTubs />
      <JettedTubs />
      <Testimonial />
    </div>
  );
}
