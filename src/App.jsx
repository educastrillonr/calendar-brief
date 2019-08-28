import React, { Component } from "react";
import CenteredTabs from "./components/CenteredTabs/CenteredTabs";
import Card from "./components/Card/Card";
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
            // console.log(response.result);
            let events = response.result.items;
            that.setState(
              {
                events: events,
                filteredEvents: events
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

  getUpcomingEvents = events => {
    return events.filter(event => {
      return Date.parse(this.getEventStart(event)) > Date.now();
    });
  };

  getEventsByInterest = events => {
    return events.filter(event => {
      return event.interested;
    });
  };

  getEventStart = event => {
    return event.start.date || event.start.dateTime;
  };

  filteredEvents = (events, criteria) => {
    let filteredEvents = [];

    switch (criteria) {
      case "Upcoming":
        filteredEvents = this.getUpcomingEvents(events);
        break;
      case "Interested":
        filteredEvents = this.getEventsByInterest(events);
        break;
      case "All":
        filteredEvents = [...events];
        break;
      default:
        break;
    }

    return filteredEvents;
  };

  addToInterested = event => {
    event.interested = true;
  };

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
        <section className="cardsContainer">
          {this.filteredEvents(this.state.events, this.state.tab).map(event => (
            <Card
              key={event.summary}
              summary={event.summary}
              start={event.start.date || event.start.dateTime}
              end={event.end.date || event.end.dateTime}
              addToInterested={() => this.addToInterested(event)}
              link={event.htmlLink}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
