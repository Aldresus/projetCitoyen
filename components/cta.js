import Button from "@/components/primitives/button";

export default function CTA() {
  return (
    <div className="flex h-full text-center justify-center items-center snap-mandatory snap-center">
      <div>
        <h2 className="text-7xl font-bold text-indigo-600">Trouver un titre</h2>
        <p className="text-lg leading-relaxed m-4 text-gray-600">
          trouver une phrase d&#39;accroche
        </p>
        <form method="POST" action="/api/checkout_sessions">
          <Button className="">Faire un don</Button>
        </form>
      </div>
    </div>
  );
}
