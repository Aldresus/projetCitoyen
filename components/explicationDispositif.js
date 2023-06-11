import CollectIllustration from "@/assets/collectIllustration";
import MoneyCollectionIllustration from "@/assets/moneyCollectionIllustration";
import Balancer from "react-wrap-balancer";

export default function ExplicationDispositif() {
  return (
    <div className="flex lg:h-full text-center justify-center items-center pt-20 flex-col snap-center">
      <h2 className="lg:relative lg:-top-40 text-4xl px-2 lg:text-7xl font-bold text-indigo-600">
        <Balancer>Comment ça marche ?</Balancer>
      </h2>
      <p className="text-lg leading-relaxed m-4 text-gray-600 ">
        <Balancer>Vous pouvez participer de deux manières :</Balancer>
      </p>
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 lg:divide-x text-indigo-600 font-medium text-xl">
        <div className="flex items-center flex-col">
          <div className="w-72 h-96">
            <MoneyCollectionIllustration />
          </div>
          <Balancer>Don financier depuis ce site</Balancer>
        </div>

        <div className="flex items-center flex-col">
          <div className="w-80 h-96">
            <CollectIllustration />
          </div>
          <Balancer>Don de vetement, objet, etc dans un de nos bacs</Balancer>
        </div>
      </div>
    </div>
  );
}
