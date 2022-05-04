import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import axios from "axios";

class EditCampus extends Component {
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
  componentDidMount = () => {
    this.setState(this.props.info);
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updateCampus = (
        await axios.put(`/api/campuses/${this.state.id}`, this.state)
      ).data;
      this.props.editCampus(updateCampus);
    } catch (ex) {
      console.log(ex);
    }
  };

  render() {
    const { state } = this;
    return (
      <div>
        <h3>Edit campus details (To confirm, see above)</h3>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Campus Name</td>
                <td>
                  <input
                    type="text"
                    onChange={this.changeName}
                    value={state.name}
                  ></input>
                </td>
              </tr>

              <tr>
                <td>Image URL </td>
                <td>
                  <input
                    type="text"
                    onChange={this.changeImage}
                    value={state.imageUrl}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  <input
                    type="text"
                    onChange={this.changeDescription}
                    value={state.description}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  <input
                    type="text"
                    onChange={this.changeAddress}
                    value={state.address}
                  ></input>
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
    editCampus: (campus) => {
      dispatch({ type: "EDIT_CAMPUS", campus });
    },
  };
};
export default connect(mapState, mapDispatch)(EditCampus);
