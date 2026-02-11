import { Hero } from "@/components/sections/Hero";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Services } from "@/components/sections/Services";
import { HealthTalks } from "@/components/sections/HealthTalks";
import { Solutions } from "@/components/sections/Solutions";
import { Clients } from "@/components/sections/Clients";
import { ProofOfWork } from "@/components/sections/ProofOfWork";
import { LeadForm } from "@/components/forms/LeadForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <WhyChoose />
      <Services />
      <HealthTalks />
      <Solutions />
      <Clients />
      <ProofOfWork />
      <LeadForm />
    </div>
  );
}
