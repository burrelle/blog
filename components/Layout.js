import Head from 'next/head';
import { node, string } from 'prop-types';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, pageTitle }) {
  const enhancedTitle = `Evan Burrell - ${pageTitle}`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={enhancedTitle} />
        <title>{enhancedTitle}</title>
      </Head>
      <div className="font-mono antialiased">
        <div className="flex flex-col max-w-3xl min-h-screen px-6 mx-auto md:px-8">
          <Header />
          <main className="flex-grow text-gray-900">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: node,
  pageTitle: string,
};
