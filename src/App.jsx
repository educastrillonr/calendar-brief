import React, { Component } from "react";
import CenteredTabs from "./components/CenteredTabs/CenteredTabs";
import Cards from "./containers/Cards/Cards";
import Card from "./components/Card/Card";
import "./App.scss";

class App extends Component {
  state = {
    events: [],
    tab: "All"
  };

  componentDidMount() {
    // fetch(
    //   "https://www.googleapis.com/calendar/v3/calendars/nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com/events"
    // )
    //   .then(res => res.json())
    //   .then(data =>
    //     this.setState({ books: data.items }, console.log(this.state.books))
    //   )
    //   .catch(error => this.setState({ error: error }));
    this.getEvents();
  }

  getEvents() {
    const start = () => {
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
            let events = response.result.items;
            this.setState(
              {
                events: events,
                filteredEvents: events
              },
              () => {
                console.log(this.state.events);
              }
            );
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
