import React, { Component } from "react";
import CenteredTabs from "./components/CenteredTabs/CenteredTabs";
import Cards from "./containers/Cards/Cards";
import key from "./api";
import "./App.scss";

class App extends Component {
  state = {
    events: [],
    tab: "All"
  };

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    const start = () => {
      window.gapi.client
        .init({
          apiKey: key //your api key here
        })
        .then(() => {
          return window.gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com/events`
          });
        })
        .then(
          response => {
            let events = response.result.items;
            this.setState({
              events: events,
              filteredEvents: events
            });
          },
          reason => {
            console.log(reason.result.error.message);
          }
        );
    };
    window.gapi.load("client", start);
  }

  handleTabs = tab => {
    this.setState({
      tab
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>KIDIE</h1>
        </header>
        <CenteredTabs handleTabs={this.handleTabs} />
        <Cards events={this.state.events} tab={this.state.tab} />
      </div>
    );
  }
}

export default App;
