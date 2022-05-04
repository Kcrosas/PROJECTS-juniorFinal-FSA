import React, { Component } from "react";
import { connect } from "react-redux";
//import { withRouter } from "react-router-dom";
import EditStudent from "./editStudent";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

class _oneStudent extends Component {
  render() {
    let id = this.props.match.params.id * 1;
    const { students, campuses } = this.props;
    let student = students.filter((e) => e.id === id)[0];
    student = student
      ? student
      : {
          fName: "Not a student",
          lName: "",
          email: "Not applicable",
          campusId: "Not applicable",
          gpa: "Not applicable",
        };
    let campusName = campuses.filter((e) => e.id === student.campusId)[0];
    campusName = !campusName
      ? { name: "Does not attend a registered campus at this time" }
      : campusName;
    if (!student || !campuses) {
      return null;
    }
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{`${student.fName} ${student.lName}`}</td>
              <td rowSpan="2">
                <img src={student.imageUrl} />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{student.email}</td>
            </tr>
            <tr>
              <td>GPA:</td>
              <td>{student.gpa}</td>
            </tr>
            <tr>
              <td>Campus:</td>
              <td>
                {campusName.name} <br />
                <Link
                  to={
                    campusName.id ? `/campuses/${campusName.id}` : `/campuses`
                  }
                >
                  Click for campus details or see available campuses
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <EditStudent student={student} />
        </div>
      </div>
    );
  }
}
const mapState = (state) => state;
const oneStudent = connect(mapState)(_oneStudent);

export default oneStudent;
