import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

//Action type
const GET_EVERYTHING = "GET_EVERYTHING";
//Action creator
const _getEverything = (students, campuses) => {
  return {
    type: GET_EVERYTHING,
    students,
    campuses,
  };
};
//Thunk
export const getEverything = () => {
  return async (dispatch) => {
    const students = (await axios.get("/api/students/all")).data;
    const campuses = (await axios.get("/api/campuses/all")).data;
    dispatch(_getEverything(students, campuses));
  };
};

const initialState = {
  students: [],
  campuses: [],
  gpaPressed: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "GET_EVERYTHING") {
    state = {
      ...state,
      students: action.students,
      campuses: action.campuses,
    };
  }
  if (action.type === "NEW_CAMPUS") {
    state = {
      ...state,
      campuses: [...state.campuses, action.newCampus],
    };
  }
  if (action.type === "DELETE_CAMPUS") {
    state = {
      ...state,
      campuses: state.campuses.filter((e) => e.id !== action.id),
    };
  }
  if (action.type === "NEW_STUDENT") {
    state = {
      ...state,
      students: [...state.students, action.newStudent],
    };
  }
  if (action.type === "EDIT_STUDENT") {
    state = {
      ...state,
      students: state.students.map((e) => {
        if (e.id === action.student.id) {
          return action.student;
        } else return e;
      }),
    };
  }
  if (action.type === "DELETE_STUDENT") {
    state = {
      ...state,
      students: state.students.filter((e) => e.id !== action.studentId),
    };
  }
  if (action.type === "EDIT_CAMPUS") {
    state = {
      ...state,
      campuses: state.campuses.map((e) => {
        if (e.id === action.campus.id) {
          return action.campus;
        } else return e;
      }),
    };
  }
  if (action.type === "SORT_FIRST") {
    const newOrder = state.students.slice();
    newOrder.sort((a, b) => {
      return a.fName > b.fName ? 1 : b.fName > a.fName ? -1 : 0;
    });
    state = {
      ...state,
      students: newOrder,
    };
  }
  if (action.type === "SORT_LAST") {
    const newOrder = state.students.slice();
    newOrder.sort((a, b) => {
      return a.lName > b.lName ? 1 : b.lName > a.lName ? -1 : 0;
    });
    state = {
      ...state,
      students: newOrder,
    };
  }
  if (action.type === "SORT_CAMPUS") {
    const newOrder = state.students.slice();
    newOrder.sort((a, b) => {
      return a.campusId > b.campusId ? 1 : b.campusId > a.campusId ? -1 : 0;
    });
    state = {
      ...state,
      students: newOrder,
    };
  }
  if (action.type === "SORT_GPA") {
    const newOrder = state.students.slice();
    if (state.gpaPressed === true) {
      newOrder.reverse();
      state = {
        ...state,
        students: newOrder,
        gpaPressed: false,
      };
      return state;
    }
    newOrder.sort((a, b) => {
      return a.gpa > b.gpa ? 1 : b.gpa > a.gpa ? -1 : 0;
    });
    state = {
      ...state,
      students: newOrder,
      gpaPressed: true,
    };
  }
  return state;
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
