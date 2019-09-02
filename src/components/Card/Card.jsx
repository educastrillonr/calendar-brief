import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import Typography from "@material-ui/core/Typography";
import styles from "./Card.module.scss";

const useStyles = makeStyles({
  card: {
    width: 300,
    height: 160,
    margin: "0 auto;"
  }
});

const secondaryStyles = makeStyles({
  card: {
    width: 300,
    height: 160,
    margin: "0 auto;",
    background: "rgba(64, 61, 57, 0.6)"
  }
});

const SimpleCard = props => {
  let [interested, update] = useState(false);
  const classes = useStyles();
  const secondaryClasses = secondaryStyles();

  return (
    <Card
      className={props.isEventFinished() ? secondaryClasses.card : classes.card}
    >
      <CardContent>
        <a
          className={styles.link}
          href={props.event.htmlLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="h5" component="h2">
            {props.event.summary.length > 20
              ? props.event.summary.slice(0, 18) + "..."
              : props.event.summary}
          </Typography>
          <Typography variant="body2" component="p">
            Start: {props.event.start.date || props.event.start.dateTime}
            <br />
            Finish: {props.event.end.date || props.event.end.dateTime}
          </Typography>
        </a>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          onClick={() => {
            props.toggleInterest();
            update((interested = !interested));
          }}
          size="small"
        >
          {props.event.interested ? <CheckIcon /> : "I'm interested"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default SimpleCard;
