import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import {
  CardContainer,
  NameEmailContainer,
  Name,
  Email,
  IconContainer,
  ActionIcon,
} from "./styled/EmployeeCardStyles"; // Adjust the path accordingly
import EmployeeDetail from "./EmployeeDetail";
import EmployeeEdit from "./EmployeeEdit";

const EmployeeCard = ({
  id,
  firstName,
  surname,
  email,
  onDelete,
  onEdit,
  ...employeeDetails
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <>
      <CardContainer onClick={toggleDetails}>
        <NameEmailContainer>
          <Name>{`${firstName} ${surname}`}</Name>
          <Email>Email: {email}</Email>
        </NameEmailContainer>
        <IconContainer>
          <ActionIcon onClick={() => onDelete(id)} title="Delete employee">
            <MdDelete />
          </ActionIcon>
          <ActionIcon onClick={toggleEdit} title="Edit employee details">
            <MdEdit />
          </ActionIcon>
        </IconContainer>
      </CardContainer>
      {showDetails && (
        <EmployeeDetail id={id} onClose={toggleDetails} {...employeeDetails} />
      )}
      {showEdit && (
        <EmployeeEdit
          onClose={toggleEdit}
          onEdit={onEdit}
          id={id}
          firstName={firstName}
          surname={surname}
          email={email}
          {...employeeDetails}
        />
      )}
    </>
  );
};

export default EmployeeCard;
