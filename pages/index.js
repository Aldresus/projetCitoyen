import CTA from "@/components/cta";
import PresentationProjetCitoyen from "@/components/presentationProjetCitoyen";
import ExplicationDispositif from "@/components/explicationDispositif";
import ExplicationProcess from "@/components/explicationProcess";
import * as Toast from "@radix-ui/react-toast";
import * as React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

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
    ? (num / item.value).toFixed(2).replace(rx, "$1") + item.symbol
    : "0";
}

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.query.canceled) {
      setOpen(true);
    }
  }, [router.query.canceled]);

  return (
    <div className="bg-gray-100 overflow-y-hidden">
      <div className=" h-screen w-full lg:snap-y lg:snap-mandatory overflow-y-scroll">
        <Toast.Provider>
          <Toast.Root
            className="glassmorphism_red p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
            open={open}
            onOpenChange={setOpen}
          >
            <Toast.Title className="text-red-800 font-bold">
              Paiement annulé
            </Toast.Title>
            <Toast.Description className="text-gray-600">
              Votre paiement à bien été annulé.
            </Toast.Description>
          </Toast.Root>
          <Toast.Viewport className="absolute top-24 lg:right-96 lg:left-96"></Toast.Viewport>
        </Toast.Provider>
        <CTA />
        <PresentationProjetCitoyen />
        <ExplicationDispositif />
        <ExplicationProcess />
        <div className="lg:hidden h-32"></div>
      </div>
    </div>
  );
}
