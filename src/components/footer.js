import React from 'react';
import containerStyles from '../styles/components/footer.module.scss';
// import powered_logo from '../images/powered_logo.png'
// import insatgram from '../images/icons/icons8-instagram-100.png'
// import facebook from '../images/icons/icons8-facebook-100.png'
// import youtube from '../images/icons/icons8-play-button-100.png'
// import discord from '../images/icons/icons8-discord-100.png'
import packageJson from '../../package.json';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={containerStyles.footer}>
        <p className={containerStyles.poweredby}>powered by</p>
        <a
          href="https://wisniowasu.pl"
          className={containerStyles.logo}
        ></a>
        <div className={containerStyles.icons}>
          <a
            className={containerStyles.facebook}
            href=""
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            className={containerStyles.instagram}
            href="https://www.instagram.com/democracycraft/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            className={containerStyles.youtube}
            href="https://www.youtube.com/channel/UCN1a-Lc7UosgCyfPipsRtmQ/videos"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            className={containerStyles.discord}
            href="https://discord.com/invite/9AFGeNq"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
        <p>
          Made by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href=""
          >
            Technofied
          </a>{' '}
          | An in-house solution developed by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.democracycraft.net"
          >
            DemocracyCraft
          </a>
        </p>
        <p>
          Icons sourced from{' '}
          <a
            target="_blank"
            rel="Icons sourced from"
            href="https://icons8.com"
          >
            Icons8
          </a>
        </p>
        <p>Version {packageJson.version}</p>
      </footer>
    );
  }
}
