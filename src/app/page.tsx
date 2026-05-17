import { HeroSection } from "@/components/landing";
import Platform from "@/components/landing/platform";
import Problems from "@/components/landing/problems";
import State from "@/components/landing/states";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <State />
      <Problems />
      <Platform/>
    </main>
  );
}
