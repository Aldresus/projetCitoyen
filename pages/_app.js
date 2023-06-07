import "style/globals.css";
import CesiSVG from "@/assets/cesiSVG";
import { Roboto } from "next/font/google";
const font = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin-ext"],
});
const MyApp = ({ Component, pageProps }) => {
  return (
    <div id="_app" className={font.className}>
      <Component {...pageProps} />
      <div className="fixed bottom-4 right-6 w-20 h-20">
        <CesiSVG />
      </div>
    </div>
  );
};
export default MyApp;
