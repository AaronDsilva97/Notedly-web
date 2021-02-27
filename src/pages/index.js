import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home";
import Favorties from "./favorite";
import MyNotes from "./mynotes";
import Layout from "../components/Layout";

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/mynotes" component={MyNotes} />
        <Route exact path="/favorites" component={Favorties} />
      </Layout>
    </Router>
  );
};

export default Pages;
