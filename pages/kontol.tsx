import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 2,
    textAlign: "center",
    // color: theme.palette.text.secondary,
    display: "flex",
    flex: 1,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justifyItems="flex-start"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs style={{ height: "100vh" }}>
          <Paper className={classes.paper}>
            xs
            <br />
            xs
            <br />
            xs
            <br />
            <br />
            xs
          </Paper>
        </Grid>
        <Grid item xs style={{ height: "100vh" }}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs style={{ height: "100vh" }}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
