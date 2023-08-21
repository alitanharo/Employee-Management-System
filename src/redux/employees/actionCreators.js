import * as actions from ".";

/* eslint-disable import/prefer-default-export */
export const saveNewEmployee = employee => dispatch => {
  // Convert the birthDate to a string
  const serializedEmployee = {
    ...employee,
    birthDate: employee.birthDate.toString(),
  };
  dispatch(actions.saveNewEmployee(serializedEmployee));
};
export const removeEmployee = id => dispatch => {
  dispatch(actions.removeEmployee(id));
};

export const updateEmployee = employee => dispatch => {
  dispatch(actions.updateEmployee(employee));
};
