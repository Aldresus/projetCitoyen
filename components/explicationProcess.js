import Balancer from "react-wrap-balancer";

export default function ExplicationProcess() {
  //1 - paiement par stripe
  //2 - l'argent est recu par Ax Intercampus
  //3 - Ax Intercampus reverse l'argent à l'association a la fin de la collecte

  return (
    <div className="flex lg:h-full text-center justify-center items-center pt-20 py-10 flex-col snap-center">
      <h2 className="lg:relative lg:-top-72 lg:pb-0 pb-10 text-4xl px-2 lg:text-7xl font-bold text-indigo-600">
        <Balancer>Déroulement de la collecte</Balancer>
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-16 px-10 lg:px-0">
        <div className="lg:w-1/4">
          <h2 className="text-3xl px-2 lg:text-6xl font-bold text-indigo-600">
            <span className="text-indigo-600">1</span>
          </h2>
          <span className="text-gray-600 text-xl lg:text-2xl">
            <Balancer>
              Vous faites un don sur notre site ou dans nos bacs
            </Balancer>
          </span>
        </div>
        <div className="lg:w-1/4">
          <h2 className="text-3xl px-2 lg:text-6xl font-bold text-indigo-600">
            <span className="text-indigo-600">2</span>
          </h2>
          <span className="text-gray-600 text-xl lg:text-2xl">
            <Balancer>
              Nous conservons les dons le temps de la collecte
            </Balancer>
          </span>
        </div>
        <div className="lg:w-1/4">
          <h2 className="text-3xl px-2 lg:text-6xl font-bold text-indigo-600">
            <span className="text-indigo-600">3</span>
          </h2>
          <span className="text-gray-600 text-xl lg:text-2xl">
            <Balancer>
              Nous reversons les dons à l&#39;association à la fin de la
              collecte
            </Balancer>
          </span>
        </div>
      </div>
    </div>
  );
}
