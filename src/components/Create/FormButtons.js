import React from "react";
import { useHistory } from "react-router";
import { useFormikContext } from "formik";
import { useToasts } from "react-toast-notifications";
import { Box, Button, Flex } from "../styled";

const FormButtons = () => {
  const { handleSubmit, isValid } = useFormikContext();
  const history = useHistory();
  const { addToast } = useToasts();

  const handleSaveButtonClick = () => {
    if (isValid) {
      handleSubmit();
      addToast("Employee saved successfully!", { appearance: "success" });
      history.push("/view");
    } else {
      addToast("Please fill out all required fields.", {
        appearance: "warning",
      });
    }
  };

  return (
    <Flex justifyContent="center">
      <Box marginRight="sm">
        <Button data-cy="backButton" onClick={() => history.goBack()}>
          Back
        </Button>
      </Box>
      <Box>
        <Button
          data-cy="saveButton"
          onClick={handleSaveButtonClick}
          type="button"
        >
          Save
        </Button>
      </Box>
    </Flex>
  );
};

export default FormButtons;
