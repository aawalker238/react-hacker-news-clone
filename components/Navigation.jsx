import Link from 'next/link';
import Router from 'next/router';

export default ({ backButton }) => (
  <nav>
    {backButton && (
      <span onClick={() => Router.back()} className="back-button">
        &#x2b05;
      </span>
    )}
    <Link href="/">
      <a>
        <span className="main-title">Hacker News Next</span>
      </a>
    </Link>
    <style jsx>
      {`
        nav {
          background: #f60;
          padding: 1em;
        }

        nav > * {
          display: inline-block;
          color: black;
        }

        nav a {
          text-decoration: none;
        }

        nav .main-title {
          font-weight: bold;
        }

        nav .back-button {
          font-size: 0.9rem;
          padding-right: 1em;
          cursor: pointer;
        }
      `}
    </style>
  </nav>
);
