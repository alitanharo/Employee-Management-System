import React, { useState } from "react";
import {
  DetailOverlay,
  DetailContainer,
  InputGroup,
  Label,
  Input,
  Select,
  ButtonContainer,
  SaveButton,
  CancelButton,
} from "./styled/EmployeeEditStyles";

const EmployeeEdit = ({
  id,
  firstName,
  surname,
  email,
  birthDate,
  jobTitle,
  status,
  onClose,
  onEdit,
}) => {
  const [editedEmployee, setEditedEmployee] = useState({
    id,
    firstName,
    surname,
    email,
    birthDate,
    jobTitle,
    status,
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setEditedEmployee(prevEmployee => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    onEdit(editedEmployee);
    onClose();
  };

  return (
    <DetailOverlay>
      <DetailContainer>
        <InputGroup>
          <Label>First Name</Label>
          <Input
            type="text"
            name="firstName"
            value={editedEmployee.firstName}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Surname</Label>
          <Input
            type="text"
            name="surname"
            value={editedEmployee.surname}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={editedEmployee.email}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Birth Date</Label>
          <Input
            type="date"
            name="birthDate"
            value={editedEmployee.birthDate}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Job Title</Label>
          <Input
            type="text"
            name="jobTitle"
            value={editedEmployee.jobTitle}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Status</Label>
          <Select
            name="status"
            value={editedEmployee.status}
            onChange={handleInputChange}
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="LEAVE_OF_ABSENCE">LEAVE_OF_ABSENCE</option>
            <option value="TERMINATED">TERMINATED</option>
          </Select>
        </InputGroup>
        <ButtonContainer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SaveButton onClick={handleSaveChanges}>Save Changes</SaveButton>
        </ButtonContainer>
      </DetailContainer>
    </DetailOverlay>
  );
};

export default EmployeeEdit;
