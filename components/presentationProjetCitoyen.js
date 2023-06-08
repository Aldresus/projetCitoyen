import Emphasis from "@/components/primitives/emphasis";
import Balancer from "react-wrap-balancer";

export default function PresentationProjetCitoyen() {
  return (
    <div className="lg:h-screen snap-center flex  text-center justify-center flex-col">
      <div className="flex pt-20 h-screen lg:h-1/2">
        <div className="w-full">
          <h2 className="text-4xl px-2 lg:text-7xl font-bold text-indigo-600">
            Projet citoyen
          </h2>
          <p className="text-lg leading-relaxed m-4 text-gray-600">
            <Balancer>
              bla bla bla{" "}
              <Emphasis>un ingé doit être utile pour la société</Emphasis> bla
              bla bla du coup{" "}
              <Emphasis>
                on doit faire un truc pour se rendre utile en A3{" "}
              </Emphasis>{" "}
              bla bla bla bla bla bla blabla blabla blabla blabla blabla blabla
              blabla blabla blabla blabla blabla blabla blabla bla{" "}
              <Emphasis>bullshit marketing</Emphasis>
            </Balancer>
          </p>
        </div>
      </div>
      <div className="flex pt-10 h-screen lg:h-1/2">
        <div className="w-full">
          <h2 className="text-4xl px-2 lg:text-7xl font-bold text-indigo-600">
            Emmaus
          </h2>
          <p className="text-lg leading-relaxed m-4 text-gray-600">
            <Balancer>
              bla bla bla <Emphasis>super asso</Emphasis> bla bla bla du coup{" "}
              <Emphasis>créee par labbé Pierre </Emphasis> bla bla
              blblablablablablablablablablablaa bla bla bla blabla blabla blabla
              blabla blabla blabla blabla blabla blabla blabla blabla blabla
              blabla bla <Emphasis>contre la pauvreté et lexclusion</Emphasis>
            </Balancer>
          </p>
        </div>
      </div>
    </div>
  );
}
