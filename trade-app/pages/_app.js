import AppContext from "../AppContext";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppContext>
        <Navbar />
        <Component {...pageProps} />
      </AppContext>
    </>
  );
}

export default MyApp;
