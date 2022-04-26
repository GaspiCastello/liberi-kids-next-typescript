import "bulma/css/bulma.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GlobalProvider } from "./my-context/globalStates";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </GlobalProvider>
  );
}

export default MyApp;
