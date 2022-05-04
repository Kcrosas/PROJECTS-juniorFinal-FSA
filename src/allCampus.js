import React, { Component } from "react";
import { connect } from "react-redux";
import addCampus from "./addCampus";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from "axios";

class _allCampus extends Component {
  _deleteCampus = async (id) => {
    try {
      await axios.delete(`/api/campuses/${id}`);
      this.props.deleteCampus(id);
    } catch (ex) {
      console.log(ex);
    }
  };

  render() {
    const { campuses, students } = this.props;
    return (
      <div id="campusView">
        <div id="allCampusDiv">
          <ul id="allCampus">
            {campuses.map((e) => (
              <li key={e.id} id="campusList">
                <b>{e.name}</b>
                <br />
                {students.filter((m) => m.campusId === e.id).length} Student(s)
                <br />
                {e.address}
                <br />
                <Link to={`/campuses/${e.id}`}>More Details</Link>
                <br />
                <br />
                <button onClick={() => this._deleteCampus(e.id)}>
                  Delete campus
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div id="addCampusDiv">
          <Router>
            <Switch>
              <Route path="/" component={addCampus} />
              {/* Place holder for edit  */}
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
const mapState = (state) => state;
const mapDispatch = (dispatch) => {
  return {
    deleteCampus: (id) => {
      dispatch({ type: "DELETE_CAMPUS", id });
    },
  };
};
const allCampus = connect(mapState, mapDispatch)(_allCampus);

export default allCampus;
