import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import axios from "axios";

class addStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      imageUrl: "",
      gpa: 0,
      campusId: 0,
      email: "",
    };
  }
  changefName = (event) => {
    this.setState({ fName: event.target.value });
  };
  changelName = (event) => {
    this.setState({ lName: event.target.value });
  };
  changeImageUrl = (event) => {
    this.setState({ imageUrl: event.target.value });
  };
  changeGpa = (event) => {
    this.setState({ gpa: event.target.value });
  };
  changeCampus = (event) => {
    this.setState({ campusId: event.target.value });
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newStudent = (await axios.post(`/api/students`, this.state)).data;
      this.props.newStudent(newStudent);
    } catch (ex) {
      console.log(ex);
    }
  };
  render() {
    return (
      <div>
        <h3>Register new student</h3>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>
                  <input type="text" onChange={this.changefName}></input>
                </td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>
                  <input type="text" onChange={this.changelName}></input>
                </td>
              </tr>
              <tr>
                <td>Image URL </td>
                <td>
                  <input type="text" onChange={this.changeImageUrl}></input>
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input type="text" onChange={this.changeEmail}></input>
                </td>
              </tr>
              <tr>
                <td>GPA</td>
                <td>
                  <input type="number" onChange={this.changeGpa}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Campus</label>
                </td>
                <td>
                  <select
                    name="student"
                    onChange={this.changeCampus}
                    value={this.state.campusId}
                  >
                    <option value="">----------------------------</option>
                    {this.props.campuses.map((e) => {
                      return (
                        <option value={e.id} key={e.id}>
                          {e.name}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="reset" value="Reset" />
                </td>
                <td>
                  <button
                    type="submit"
                    disabled={
                      this.state.fName === "" ||
                      this.state.lName === "" ||
                      this.state.imageUrl === "" ||
                      this.state.gpa === 0 ||
                      this.state.email === ""
                    }
                  >
                    Register new student
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
const mapState = (state) => state;
const mapDispatch = (dispatch) => {
  return {
    newStudent: (newStudent) => {
      dispatch({ type: "NEW_STUDENT", newStudent });
    },
  };
};
export default connect(mapState, mapDispatch)(addStudent);
