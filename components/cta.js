import Button from "@/components/primitives/button";
import Balancer from "react-wrap-balancer";

export default function CTA() {
  return (
    <div className="flex h-full text-center justify-center items-center snap-mandatory snap-center">
      <div>
        <h2 className="text-7xl font-bold text-indigo-600">
          <Balancer>Trouver un titre</Balancer>
        </h2>
        <p className="text-lg leading-relaxed m-4 text-gray-600">
          <Balancer> trouver une phrase d&#39;accroche</Balancer>
        </p>
        <form method="POST" action="/api/checkout_sessions">
          <Button className="">Faire un don</Button>
        </form>
      </div>
    </div>
  );
}
