import AppContext from "../AppContext";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { NhostNextProvider, NhostClient } from "@nhost/nextjs";
import "../styles/globals.css";

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
        <AppContext>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </AppContext>
      </NhostNextProvider>
    </>
  );
}

export default MyApp;
