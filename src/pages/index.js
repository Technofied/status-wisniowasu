import React from 'react';
import '../styles/pages/index.scss';
import Container from '../components/container';
import TitleBox from '../components/titlebox';
import Footer from '../components/footer';
import StatusBoxContainer from '../components/statusboxContainer';
import InfoBox from '../components/info';
import { Location } from '@reach/router';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default function Index({ data }) {
  return (
    <Location>
      {({ location, navigate }) => (
        <Container>
          <Helmet>
            <meta
              name="description"
              content="Status of DemocracyCraft online services"
            />
            <meta
              name="keywords"
              content="status, democracycraft"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
              name="apple-mobile-web-app-status-bar-style"
              content="black"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/safari-pinned-tab.svg"
              color="#e9384f"
            />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta
              name="apple-mobile-web-app-title"
              content="Status | DC"
            />
            <meta
              name="application-name"
              content="Status | DemocracyCraft"
            />
            <meta name="msapplication-TileColor" content="#e9384f" />
            <meta
              name="msapplication-config"
              content="/browserconfig.xml"
            />
            <meta name="theme-color" content="#ffffff" />
            <title>Status | DemocracyCraft</title>
            <meta
              property="og:site_name"
              content="Status | DemocracyCraft"
            />
            <meta
              property="og:title"
              content="Status | DemocracyCraft"
            />
            <meta
              property="og:description"
              content="Status of DemocracyCraft Online Services"
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content="https://democracycraft.net/img/logo.png"
            />
            <link rel="icon" href="/favicon.ico" />
          </Helmet>
          <TitleBox />
          <div>
            <InfoBox location={location} />
          </div>

          <StatusBoxContainer />
          <Footer />
        </Container>
      )}
    </Location>
  );
}
Index.displayName = 'Index';
Index.propTypes = {
  data: PropTypes.object,
};
