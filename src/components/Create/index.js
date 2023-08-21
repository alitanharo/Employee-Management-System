import React, { useCallback, useEffect } from "react";
import { Formik } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { Flex, Header } from "../styled";
import FormField from "./FormField";
import FormButtons from "./FormButtons";
import formValidationSchema from "./formValidationSchema";
import { saveNewEmployee } from "../../redux/employees/actionCreators";
import { StyledCreate, FormContainer } from "./styled/CreateStyles";

const Create = () => {
  const dispatch = useDispatch();
  const formikRef = React.createRef();
  const submitForm = useCallback(
    employee => {
      dispatch(saveNewEmployee(employee));
    },
    [dispatch]
  );
  useEffect(() => {
    formikRef.current.validateForm();
    // eslint-disable-next-line
  }, []);
  return (
    <StyledCreate>
      <FormContainer>
        <Header>Create new employee</Header>
        <Formik
          innerRef={formikRef}
          validationSchema={formValidationSchema}
          onSubmit={submitForm}
          initialValues={{
            firstName: "",
            surname: "",
            email: "",
            birthDate: "",
            jobTitle: "",
            status: "",
          }}
        >
          <Flex alignItems="center" justifyContent="center" height="100%">
            <Flex alignItems="left" direction="column" width="300px">
              <FormField name="firstName" placeholder="First name" />
              <FormField name="surname" placeholder="Surname" />
              <FormField name="email" placeholder="Email" />
              <FormField name="birthDate" placeholder="Birth date" />
              <FormField
                name="status"
                options={["ACTIVE", "LEAVE_OF_ABSENCE", "TERMINATED"]}
                placeholder="Status"
              />
              <FormField name="jobTitle" placeholder="Job title" />
              <FormButtons />
            </Flex>
          </Flex>
        </Formik>
      </FormContainer>
    </StyledCreate>
  );
};

export default Create;
