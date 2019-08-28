import Card from "../../components/Card/Card";
import styles from "./Cards.module.scss";
import React, { Component } from "react";

class Cards extends Component {
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
    filteredEvents.sort(function(a, b) {
      return (
        Date.parse(a.start.date || a.start.dateTime) -
        Date.parse(b.start.date || b.start.dateTime)
      );
    });
    return filteredEvents;
  };

  toggleInterest = event => {
    if (event.interested) {
      event.interested = !event.interested;
    } else {
      event.interested = true;
    }
  };

  render() {
    return (
      <section className={styles.cardsContainer}>
        <div className={styles.wrapper}>
          {this.filteredEvents(this.props.events, this.props.tab).map(event => (
            <Card
              key={event.summary}
              event={event}
              toggleInterest={() => this.toggleInterest(event)}
              isEventFinished={() => this.isEventFinished(event)}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Cards;
