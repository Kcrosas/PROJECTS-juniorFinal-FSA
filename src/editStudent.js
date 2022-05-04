import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import axios from "axios";

class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
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
    this.setState({ campusId: event.target.value * 1 });
  };
  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  componentDidMount = () => {
    this.setState(this.props.student);
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updateStudent = (
        await axios.put(`/api/students/${this.state.id}`, this.state)
      ).data;
      this.props.editStudent(updateStudent);
    } catch (ex) {
      console.log(ex);
    }
  };

  render() {
    console.log(this.props);

    const { state } = this;
    const { fName } = this.state;
    return (
      <div>
        <h3>Edit student details (To confirm, see above)</h3>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>
                  <input
                    type="text"
                    onChange={this.changefName}
                    value={fName}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>
                  <input
                    type="text"
                    onChange={this.changelName}
                    value={state.lName}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Image URL </td>
                <td>
                  <input
                    type="text"
                    onChange={this.changeImageUrl}
                    value={state.imageUrl}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="text"
                    onChange={this.changeEmail}
                    value={state.email}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>GPA</td>
                <td>
                  <input
                    type="number"
                    onChange={this.changeGpa}
                    value={state.gpa}
                  ></input>
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
                    value={this.state.campusId ? this.state.campusId : 0}
                  >
                    <option value={0}>----</option>
                    {this.props.campuses.map((e) => {
                      if (e.id === state.campusId) {
                        return (
                          <option value={e.id} key={e.id} defaultValue={e.id}>
                            {e.name}
                          </option>
                        );
                      }
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
                    Save information
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
    editStudent: (student) => {
      dispatch({ type: "EDIT_STUDENT", student });
    },
  };
};
export default connect(mapState, mapDispatch)(EditStudent);
