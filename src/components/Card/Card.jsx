import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./Card.module.scss";

const useStyles = makeStyles({
  card: {
    width: 300,
    height: 160
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    margin: 20
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <a className={styles.link} href={props.link} target="_blank">
          <Typography variant="h5" component="h2">
            {props.summary.length > 20
              ? props.summary.slice(0, 20) + "..."
              : props.summary}
          </Typography>
          <Typography variant="body2" component="p">
            Start: {props.start}
            <br />
            Finish: {props.end}
          </Typography>
        </a>
      </CardContent>
      <CardActions>
        <Button onClick={props.addToInterested} size="small">
          I'm interested
        </Button>
      </CardActions>
    </Card>
  );
}
