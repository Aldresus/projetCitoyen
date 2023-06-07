import CollectIllustration from "@/assets/collectIllustration";
import MoneyCollectionIllustration from "@/assets/moneyCollectionIllustration";

export default function ExplicationDispositif() {
  return (
    <div className="flex h-full text-center justify-center pt-40 snap-mandatory snap-center">
      <div className="w-full h-full">
        <h2 className="text-7xl font-bold text-indigo-600">
          Comment ça marche ?
        </h2>
        <p className="text-lg leading-relaxed m-4 text-gray-600 ">
          Vous pouvez participer de deux manières :
        </p>
        <div className="relative w-full grid grid-cols-2 divide-x text-indigo-600 font-medium text-xl top-32">
          <div className="flex items-center flex-col">
            <div className="w-72 h-96">
              <MoneyCollectionIllustration />
            </div>
            <div className="">Don financier depuis ce site</div>
          </div>

          <div className="flex items-center flex-col">
            <div className="w-80 h-96">
              <CollectIllustration />
            </div>
            <div className="">
              Don de vetement, objet, etc dans un de nos bacs
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full items-center text-indigo-600 font-medium text-lg"></div>
      </div>
    </div>
  );
}
