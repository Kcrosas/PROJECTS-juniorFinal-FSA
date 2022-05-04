import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import axios from "axios";

class addCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      address: "",
      description: "",
    };
  }
  changeName = (event) => {
    this.setState({ name: event.target.value });
  };
  changeImage = (event) => {
    this.setState({ imageUrl: event.target.value });
  };
  changeDescription = (event) => {
    this.setState({ description: event.target.value });
  };
  changeAddress = (event) => {
    this.setState({ address: event.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newCampus = (await axios.post(`/api/campuses`, this.state)).data;
      this.props.newCampus(newCampus);
    } catch (ex) {
      console.log(ex);
    }
  };

  render() {
    return (
      <div>
        <h3>Register new campus</h3>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input type="text" onChange={this.changeName}></input>
                </td>
              </tr>
              <tr>
                <td>Image URL</td>
                <td>
                  <input type="text" onChange={this.changeImage}></input>
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  <input type="text" onChange={this.changeDescription}></input>
                </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  <input type="text" onChange={this.changeAddress}></input>
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
                      this.state.name === "" ||
                      this.state.imageUrl === "" ||
                      this.state.address === "" ||
                      this.state.description === ""
                    }
                  >
                    Register new campus
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
    newCampus: (newCampus) => {
      dispatch({ type: "NEW_CAMPUS", newCampus });
    },
  };
};
export default connect(mapState, mapDispatch)(addCampus);
