import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";
import store from "./store";
import { Provider, connect } from "react-redux";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import allStudent from "./allStudent";
import allCampus from "./allCampus";
import oneCampus from "./oneCampus";
import oneStudent from "./oneStudent";
import home from "./home";
import { getEverything } from "./store";
import error from "./error";

class _App extends Component {
  async componentDidMount() {
    this.props.getEverything();
  }
  render() {
    return (
      <div>
        <div id="navBar">
          <div id="navBarInternal">
            <div id="bannerDiv">
              <img id="bannerImage" src="media/banner.png" />
            </div>
            <ul>
              <Router>
                <li>
                  <Link to={`/students`}>
                    Students ({this.props.students.length})
                  </Link>
                </li>
                <li>
                  <Link to={`/campuses`}>
                    Campuses ({this.props.campuses.length})
                  </Link>
                </li>
                <li>
                  <Link to={`/`}>Home</Link>
                </li>
              </Router>
            </ul>
          </div>
        </div>
        <div id="components">
          <Router>
            <Switch>
              <Route exact path="/" component={home} />
              <Route path="/students/:id" component={oneStudent} />
              <Route path="/students" component={allStudent} />
              <Route path="/campuses/:id" component={oneCampus} />
              <Route path="/campuses" component={allCampus} />
              <Route component={error} />
            </Switch>
          </Router>
        </div>
        
        <div id="footer">
          <img id="bannerImage" src="media/footer.png" />
          <div>
            <ul id="footerList">
              <li>
                The Global University of Science
                <br />
              </li>
              <li>100 University St, University, New York 10000</li>
              <li>
                <a href="mailto:admissions@theglobaluniversityofscience.com">
                  Contact Admissions
                </a>
              </li>
            </ul>
          </div>
          <img id="bannerImage" src="media/highstakes.png" />
        </div>
      </div>
    );
  }
}

const mapState = (state) => state;
const mapDispatch = { getEverything };
const App = connect(mapState, mapDispatch)(_App);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
