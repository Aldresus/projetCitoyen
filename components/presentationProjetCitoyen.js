import Emphasis from "@/components/primitives/emphasis";
import Balancer from "react-wrap-balancer";

export default function PresentationProjetCitoyen() {
  return (
    <div className="lg:h-screen snap-center flex  text-center justify-center flex-col">
      <div className="flex pt-20  lg:h-1/2">
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
      <div className="flex pt-10 lg:h-1/2">
        <div className="w-full">
          <h2 className="text-4xl px-2 lg:text-7xl font-bold text-indigo-600">
            Emmaus
          </h2>
          <div className="text-lg leading-relaxed m-4 text-gray-600">
            <Balancer>
              <p>
                <Emphasis>Emmaüs</Emphasis>, fondé en <Emphasis>1949</Emphasis>{" "}
                par l&#39;<Emphasis>Abbé Pierre</Emphasis>, lutte contre la
                pauvreté, l&#39;exclusion sociale et le gaspillage en
                récupérant, réparant et revendant des objets d&#39;occasion de
                manière solidaire.
              </p>
              <p>
                Votre don donne une seconde vie aux objets, soutient les
                personnes en difficulté et promeut une société inclusive pour
                tous.
              </p>
            </Balancer>
          </div>
        </div>
      </div>
    </div>
  );
}
