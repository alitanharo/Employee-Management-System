import React from "react";
import { Field, useFormikContext } from "formik";
import { Box } from "../styled";
import DateField from "./styled/DateField";
import StatusField from "./styled/StatusField";
import ErrorMessage from "./styled/ErrorMessage";
import TextField from "./styled/TextField";

const FormField = ({ name, placeholder, options }) => {
  const { errors, touched, setFieldValue } = useFormikContext();
  if (name === "birthDate") {
    return (
      <Box marginBottom="md">
        <Field name={name}>
          {({ field, meta }) => (
            <DateField
              data-cy={`${name}Input`}
              placeholderText={placeholder}
              error={meta.error && meta.touched}
              selected={field.value ? new Date(field.value) : null}
              onChange={date => setFieldValue(name, date)}
            />
          )}
        </Field>
        {errors[name] && touched[name] && (
          <ErrorMessage data-cy={`${name}ErrorMessage`}>
            {errors[name]}
          </ErrorMessage>
        )}
      </Box>
    );
  }
  if (name === "status") {
    return (
      <Box marginBottom="md">
        <Field name={name}>
          {({ field, meta }) => (
            <StatusField
              data-cy={`${name}Input`}
              error={meta.error && meta.touched}
              {...field}
            >
              <option value="">Select Status</option>
              {options.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </StatusField>
          )}
        </Field>
        {errors[name] && touched[name] && (
          <ErrorMessage data-cy={`${name}ErrorMessage`}>
            {errors[name]}
          </ErrorMessage>
        )}
      </Box>
    );
  }
  return (
    <Box marginBottom="md">
      <Field name={name}>
        {({ field, meta }) => (
          <TextField
            data-cy={`${name}Input`}
            fontSize="lg"
            placeholder={placeholder}
            fluid
            error={meta.error && meta.touched}
            {...field}
          />
        )}
      </Field>
      {errors[name] && touched[name] && (
        <ErrorMessage data-cy={`${name}ErrorMessage`}>
          {errors[name]}
        </ErrorMessage>
      )}
    </Box>
  );
};

export default FormField;
