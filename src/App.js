import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import MainList from "./components/mainlist";
import Comments from "./components/comments";
import HomePage from "./components/Home";
import _ from "lodash";
import React from "react";

function App() {
  return (
    <main className="container">
      <div>
        <Switch />
        <Route path="/posts" component={MainList} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/comments" exact component={Comments} />
        <Redirect from="/" to="home" />
      </div>
    </main>
  );
}

export default App;
