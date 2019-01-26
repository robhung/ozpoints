import React from "react";
import injectSheet from "react-jss";

const App = ({ classes }) => (
  <div className={classes.App}>
    <header className={classes.AppHeader}>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className={classes.AppLink}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

const styles = {
  App: {
    textAlign: "center"
  },
  AppHeader: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white"
  },
  AppLink: {
    color: "#61dafb"
  }
};

export default injectSheet(styles)(App);
