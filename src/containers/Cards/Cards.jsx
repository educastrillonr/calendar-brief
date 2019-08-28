import Card from "../../components/Card/Card";
import styles from "./Cards.module.scss";
import React, { Component } from "react";

class Cards extends Component {
  state = {};

  getUpcomingEvents = events => {
    return events.filter(event => {
      return !this.isEventFinished(event);
    });
  };

  getEventsByInterest = events => {
    return events.filter(event => {
      return event.interested;
    });
  };

  isEventFinished = event => {
    return Date.parse(this.getEventStart(event)) < Date.now();
  };

  getEventStart = event => {
    return event.start.date || event.start.dateTime;
  };

  // compareEvents = (eventOne, eventTwo) => {
  //   return this.getEventStart(eventOne) - this.getEventStart(eventTwo);
  // };

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
    // filteredEvents.sort(function(a, b) {
    //   console.log(a);

    //   return this.getEventStart(a) - this.getEventStart(b);
    // });
    return filteredEvents;
  };

  addToInterested = event => {
    event.interested = true;
  };

  render() {
    return (
      <section className={styles.cardsContainer}>
        <div className={styles.wrapper}>
          {this.filteredEvents(this.props.events, this.props.tab).map(event => (
            <Card
              key={event.summary}
              summary={event.summary}
              start={event.start.date || event.start.dateTime}
              end={event.end.date || event.end.dateTime}
              addToInterested={() => this.addToInterested(event)}
              link={event.htmlLink}
              isEventFinished={() => this.isEventFinished(event)}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Cards;
