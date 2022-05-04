import React, { Component } from "react";
import { connect } from "react-redux";
import EditCampus from "./editCampus";
import axios from "axios";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

class _oneCampus extends Component {
  constructor() {
    super();
  }
  _disenroll = async (student) => {
    try {
      student.campusId = null;
      const disenrollStudent = (
        await axios.put(`/api/students/${student.id}`, student)
      ).data;
      this.props.disenroll(disenrollStudent);
    } catch (ex) {
      console.log(ex);
    }
  };

  render() {
    const urlSplit = window.location.hash.split("/");
    const id = urlSplit[urlSplit.length - 1] * 1;
    //if (!this.props.campuses) return null;
    const { campuses, students } = this.props;
    const campus = campuses.filter((e) => e.id === id);
    let info = campus[0];
    info = info ? info : { name: "Not a registered campus" };
    const studentsFilter = students.filter((e) => e.campusId === info.id);
    return (
      <div>
        <h3>{info ? info.name : ""}</h3>
        <ul>
          <li>
            Name: {info ? info.name : ""}
            <br />
            Address: {info ? info.address : ""}
            <br />
            About: {info ? info.description : ""}
            <br />
            Students (
            {studentsFilter.length === 0
              ? "No students currently enrolled"
              : studentsFilter.length}
            ):
            <ul>
              {studentsFilter
                ? studentsFilter.map((e) => (
                    <li key={e.id}>
                      {`${e.fName}---------`}
                      <button onClick={() => this._disenroll(e)}>
                        Unregister
                      </button>
                      <br />
                      <Link to={`/students/${e.id}`}>Click for details</Link>
                    </li>
                  ))
                : ""}
            </ul>
          </li>
        </ul>
        <div>
          <EditCampus info={info} />
        </div>
      </div>
    );
  }
}
const mapState = (state) => state;
const mapDispatch = (dispatch) => {
  return {
    disenroll: async (student) => {
      dispatch({ type: "EDIT_STUDENT", student });
    },
  };
};
const oneCampus = connect(mapState, mapDispatch)(_oneCampus);

export default oneCampus;
