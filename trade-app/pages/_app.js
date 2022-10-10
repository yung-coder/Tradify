import AppContext from "../AppContext";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppContext>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AppContext>
    </>
  );
}

export default MyApp;
