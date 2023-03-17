import '../styles/globals.css'
import '../styles/style.css'
import store from "../redux/store";
// import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return( 
    // <Provider store={store}>
    <SessionProvider session={pageProps.session}>
  <Component {...pageProps} />
  </SessionProvider>
  // </Provider>
  )
}
