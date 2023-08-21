import { createSlice } from "@reduxjs/toolkit";

const defaultEmployee = {
  id: new Date().getTime(),
  firstName: "Abe",
  surname: "Simpson",
  email: "abe.simpson@springfield.com",
  birthDate: "1907-05-25",
  jobTitle: "Work grouch",
  status: "ACTIVE",
};

const initialState = {
  employees_records: [defaultEmployee],
};
const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    saveNewEmployee(state, action) {
      const newEmployee = {
        ...action.payload,
        id: new Date().getTime().toString(),
      };

      return {
        ...state,
        employees_records: [...state.employees_records, newEmployee],
      };
    },
    removeEmployee(state, action) {
      return {
        ...state,
        employees_records: state.employees_records.filter(
          employee => employee.id !== action.payload
        ),
      };
    },
    updateEmployee(state, action) {
      const updatedEmployeeIndex = state.employees_records.findIndex(
        employee => employee.id === action.payload.id
      );

      if (updatedEmployeeIndex !== -1) {
        return {
          ...state,
          employees_records: [
            ...state.employees_records.slice(0, updatedEmployeeIndex),
            action.payload,
            ...state.employees_records.slice(updatedEmployeeIndex + 1),
          ],
        };
      }
      return state;
    },
  },
});

export const { saveNewEmployee, removeEmployee, updateEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
