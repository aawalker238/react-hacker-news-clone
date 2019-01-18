import Head from 'next/head';
import Navigation from './Navigation';

const Layout = ({ children, title, description, backButton }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <div className="container">
      <Navigation backButton={backButton} />
      {children}
    </div>
    <style jsx>{`
      .container {
        max-width: 800px;
        margin: 0 auto;
        background: #f6f6ef;
      }
    `}</style>
    <style global jsx>{`
      body {
        background: #fff;
        font-family: Verdana, Geneva, sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;
