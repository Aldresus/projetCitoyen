import Emphasis from "@/components/primitives/emphasis";
import Balancer from "react-wrap-balancer";

export default function PresentationProjetCitoyen() {
  return (
    <div className="lg:h-screen snap-center flex text-center justify-center items-center flex-col">
      <div className="flex py-24">
        <div className="w-full">
          <h2 className="text-4xl px-2 lg:text-7xl font-bold text-indigo-600">
            Projet citoyen
          </h2>
          <div className="text-lg leading-relaxed m-4 text-gray-600">
            <Balancer>
              <p>
                Avant d&#39;être ingénieurs, nous sommes avant tout des{" "}
                <Emphasis>citoyens responsables</Emphasis>. Il est de notre
                devoir de contribuer à la{" "}
                <Emphasis>résolution des problèmes sociétaux</Emphasis> et de
                participer activement à la{" "}
                <Emphasis>construction d&#39;une société meilleure</Emphasis>.
              </p>{" "}
              <p>
                C&#39;est dans cet esprit que le CESI nous a confié la{" "}
                <Emphasis>réalisation d&#39;un projet citoyen</Emphasis>, et
                nous avons choisi{" "}
                <Emphasis>
                  d&#39;organiser une collecte pour venir en aide à ceux dans le
                  besoin
                </Emphasis>
                . La réalisation d&#39;un projet citoyen nous offre une occasion
                unique de faire une <Emphasis>différence positive</Emphasis>{" "}
                dans notre communauté. En mettant nos compétences et nos
                ressources au service d&#39;une cause qui nous tient à cœur,
                nous pouvons apporter des solutions concrètes aux défis qui se
                présentent à nous.
              </p>
            </Balancer>
          </div>
        </div>
      </div>
      <div className="flex py-24">
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
                Votre don donne une <Emphasis>seconde vie aux objets</Emphasis>,{" "}
                <Emphasis>soutient les personnes en difficulté</Emphasis> et{" "}
                <Emphasis>promeut une société inclusive</Emphasis> pour tous.
              </p>
            </Balancer>
          </div>
        </div>
      </div>
    </div>
  );
}
