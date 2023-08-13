import Layout from "@/components/Layout";
import { store } from "@/redux/store";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Layout >
          <Component {...pageProps} />
          </Layout >
        </Provider>
      </SessionProvider>
    </>
  );
}
