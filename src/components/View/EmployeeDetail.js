import React from "react";
import {
  DetailOverlay,
  DetailContainer,
  CloseButton,
  StatusText,
} from "./styled/EmployeeDetailStyles"; // Adjust the path accordingly

const EmployeeDetail = ({ birthDate, jobTitle, status, onClose, id }) => {
  return (
    <DetailOverlay>
      <DetailContainer>
        <p>
          <b>Employee ID:</b> {id}
        </p>
        <p>
          <b>Birth Date:</b> {new Date(birthDate).toLocaleDateString()}
        </p>
        <p>
          <b>Job Title:</b> {jobTitle}
        </p>
        <StatusText status={status}>{status}</StatusText>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </DetailContainer>
    </DetailOverlay>
  );
};

export default EmployeeDetail;
