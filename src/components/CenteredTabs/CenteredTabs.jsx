import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const CenteredTabs = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab onClick={() => props.handleTabs("All")} label="All" />
        <Tab onClick={() => props.handleTabs("Upcoming")} label="Upcoming" />
        <Tab
          onClick={() => props.handleTabs("Interested")}
          label="Interested"
        />
      </Tabs>
    </Paper>
  );
};

export default CenteredTabs;
