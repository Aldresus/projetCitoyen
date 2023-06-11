import Balancer from "react-wrap-balancer";

export default function Remerciements() {
  return (
    <div className="flex h-screen text-center justify-center items-center snap-mandatory snap-center flex-col">
      <h2 className="text-5xl lg:text-7xl font-bold text-indigo-600 mb-5">
        <Balancer>Merci pour votre don !</Balancer>
      </h2>
      <div className="text-lg leading-relaxed m-4 text-gray-600">
        <Balancer>
          <p>Votre don a bien été pris en compte.</p>
          <p>Vous recevrez un mail de confirmation.</p>
        </Balancer>
      </div>
    </div>
  );
}
