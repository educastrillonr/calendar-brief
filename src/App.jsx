import React, { Component } from "react";
import CenteredTabs from "./components/CenteredTabs/CenteredTabs";
import Card from "./components/Card/Card";
import "./App.scss";
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
        <header>
          <h1>KIDIE</h1>
        </header>
        <CenteredTabs />
        <section className="cardsContainer">
          {this.state.events.map((event, index) => (
            <Card
              key={index}
              summary={event.summary}
              start={event.start.date || event.start.dateTime}
              end={event.end.date || event.end.dateTime}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
