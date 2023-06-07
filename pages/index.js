import CTA from "@/components/cta";
import PresentationProjetCitoyen from "@/components/presentationProjetCitoyen";
import ExplicationDispositif from "@/components/explicationDispositif";
import { useEffect, useState } from "react";
import Emphasis from "@/components/primitives/emphasis";
export function nFormatter(num) {
  if (!num) return "0";
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(1).replace(rx, "$1") + item.symbol
    : "0";
}

export default function Home() {
  let [balance, setBalance] = useState(0);

  useEffect(() => {
    fetch("/api/balance")
      .then((res) => res.json())
      .then((data) => {
        setBalance(nFormatter(data));
      });
  }, []);
  return (
    <div>
      <div className="bg-gray-100 h-screen w-full snap-y snap-mandatory overflow-y-scroll">
        <CTA />
        <PresentationProjetCitoyen />
        <ExplicationDispositif />
        {/*<Test></Test>*/}
      </div>
      <div className="fixed left-2 bottom-2">
        <h1 className="text-xl">
          <Emphasis>{balance}€ récoltés</Emphasis>
        </h1>{" "}
      </div>
    </div>
  );
}
