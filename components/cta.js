import Button from "@/components/primitives/button";
import Balancer from "react-wrap-balancer";
import Emphasis from "@/components/primitives/emphasis";

export default function CTA() {
  return (
    <div className="flex h-full text-center justify-center items-center snap-mandatory snap-center">
      <div>
        <h2 className="text-5xl lg:text-7xl font-bold text-gray-600 mb-5">
          <Balancer>
            <Emphasis>Ingénieurs</Emphasis>, mais avant tout{" "}
            <Emphasis>citoyens</Emphasis>.
          </Balancer>
        </h2>
        <div className="text-lg leading-relaxed m-4 text-gray-600">
          <Balancer>
            <p>
              Participez à notre projet citoyen et devenez un{" "}
              <Emphasis>agent de changement</Emphasis>.
            </p>
            <p>
              Ensemble, nous pouvons faire <Emphasis>une différence</Emphasis>{" "}
              dans la vie des personnes dans le <Emphasis>besoin</Emphasis>.
            </p>
          </Balancer>
        </div>
        <form method="POST" action="/api/checkout_sessions">
          <Button className="">Faire un don</Button>
        </form>
      </div>
    </div>
  );
}
