import CTA from "@/components/cta";
import PresentationProjetCitoyen from "@/components/presentationProjetCitoyen";
import ExplicationDispositif from "@/components/explicationDispositif";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen w-full snap-y snap-mandatory overflow-y-scroll">
      <CTA />
      <PresentationProjetCitoyen />
      <ExplicationDispositif />
      {/*<Test></Test>*/}
    </div>
  );
}
