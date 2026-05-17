import { HeroSection } from "@/components/landing";
import Problems from "@/components/landing/problems";
import State from "@/components/landing/states";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <State />
      <Problems />
    </main>
  );
}
