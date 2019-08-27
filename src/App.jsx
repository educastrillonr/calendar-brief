import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { getAPI } from "googleapis-common";

class App extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    let that = this;
    function start() {
      window.gapi.client
        .init({
          apiKey: "AIzaSyDCz7WEpbGkffFuiOehe9E1L6s92aE6pD0"
        })
        .then(() => {
          return window.gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com/events`
          });
        })
        .then(
          response => {
            console.log(response.result);
            let events = response.result.items;
            that.setState(
              {
                events
              },
              () => {
                console.log(that.state.events);
              }
            );
          },
          reason => {
            console.log(reason.result.error.message);
          }
        );
    }
    window.gapi.load("client", start);
  }

  render() {
    return (
      <div className="App">
        {this.state.events.map((event, index) => (
          <p key={index}>{event.summary}</p>
        ))}
      </div>
    );
  }
}

export default App;
