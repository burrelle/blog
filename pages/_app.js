import { any } from 'prop-types';
import '../styles/styles.css';
import '../styles/nord.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: any,
  pageProps: any,
};
