import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Link from 'next/link';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';

class Index extends Component {
  static async getInitialProps({ req, res, query }) {
    let stories;
    let pageNumber;

    try {
      pageNumber = Number(query.page) || 1;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${pageNumber}`
      );
      stories = await response.json();
    } catch (err) {
      console.warn('Error:', err.message);
      stories = [];
    }
    return { stories, pageNumber };
  }

  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('Service worker registration successful:', registration);
        })
        .catch(err =>
          console.warn('Service worker registration failed:', err.message)
        );
    }
  }

  render() {
    const { stories, pageNumber } = this.props;
    const nextPage = pageNumber + 1 || pageNumber;
    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout title="Hacker News Next" description="A Hacker News clone">
        <StoryList stories={stories} />
        <footer>
          <Link href={`/?page=${nextPage}`}>
            <a>
              Next Page (
              {nextPage !== pageNumber ? `${nextPage}` : `${pageNumber}`})
            </a>
          </Link>
        </footer>
        <style jsx>{`
          footer {
            padding: 1em;
          }

          footer a {
            font-weight: bold;
            color: black;
            text-decoration: none;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
