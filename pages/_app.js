import "style/globals.css";
import CesiSVG from "@/assets/cesiSVG";
import { Roboto } from "next/font/google";
import { nFormatter } from "@/pages/index";
import { useEffect, useState } from "react";
import Emphasis from "@/components/primitives/emphasis";
const font = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin-ext"],
});
const MyApp = ({ Component, pageProps }) => {
  let [balance, setBalance] = useState("0");

  useEffect(() => {
    fetch("/api/balance")
      .then((res) => res.json())
      .then((data) => {
        setBalance(nFormatter(data));
      });
  }, []);
  return (
    <div id="_app" className={font.className}>
      <Component {...pageProps} />
      <div className="fixed bottom-4 right-6 w-20 h-20">
        <CesiSVG />
      </div>
      <div className="fixed bottom-4 left-6 glassmorphism p-2">
        <h1 className="text-xl">
          <Emphasis>{balance}€ récoltés</Emphasis>
        </h1>
      </div>
    </div>
  );
};
export default MyApp;
