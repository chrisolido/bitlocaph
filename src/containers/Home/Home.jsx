import React, { Component } from "react";

import { Header, Button } from "../../components";
import {
  TAG_LINE,
  PAYMENT,
  PAYMENT_TYPE,
  DOWNLOAD_NOW,
  PLAY_STORE,
  APP_STORE
} from "../../constants/home";

import app_image from "../../assets/images/app/sample_app.png";
import app_marker from "../../assets/images/app/marker.png";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <div className="content">
          <div className="content-left">
            <div className="content-left-tagline">
              <span>{TAG_LINE}</span>
            </div>
            <div className="content-left-payment">
              <span>{PAYMENT}</span>
              <ul>
                {PAYMENT_TYPE.map(({ name }) => (
                  <li key={name}>- {name}</li>
                ))}
              </ul>
            </div>
            <div className="content-left-download">
              <span>{DOWNLOAD_NOW}</span>
              <div className="content-left-download-button">
                <Button label={PLAY_STORE} icon={["fab", "google-play"]} />
                <Button label={APP_STORE} icon={["fab", "app-store"]} />
              </div>
            </div>
          </div>
          <div className="content-center">
            <img src={app_marker} alt="marker" />
          </div>
          <div className="content-right">
            <img src={app_image} alt="app" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
