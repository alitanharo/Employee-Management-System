import React, { useState, useMemo } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import {
  removeEmployee,
  updateEmployee,
} from "../../redux/employees/actionCreators";
import EmployeeCard from "./EmployeeCard";
import { Flex, Box, Button, Header } from "../styled";

const PaginationButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 4px;
  margin: 0 4px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "#3F78B1" : "black")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  font-size: ${({ isActive }) => (isActive ? "16px" : "14px")};
`;

const View = () => {
  const history = useHistory();
  const employees = useSelector(state => state.employees.employees_records);
  const dispatch = useDispatch();
  const employeesPerPage = 5;
  const totalPages = Math.ceil(employees.length / employeesPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleDeleteEmployee = id => {
    dispatch(removeEmployee(id));
  };

  const handleEditEmployee = editedEmployee => {
    dispatch(updateEmployee(editedEmployee));
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * employeesPerPage;
  const endIndex = startIndex + employeesPerPage;
  const currentEmployees = useMemo(
    () => employees.slice(startIndex, endIndex),
    [employees, startIndex, endIndex]
  );

  return (
    <>
      <Header data-cy="header">Employees</Header>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop="lg"
      >
        {currentEmployees.map(employee => (
          <EmployeeCard
            key={employee.id}
            onDelete={handleDeleteEmployee}
            onEdit={handleEditEmployee}
            {...employee}
          />
        ))}
        <Box>
          <Button data-cy="backButton" onClick={() => history.goBack()}>
            Back
          </Button>
        </Box>
        <Flex justifyContent="center" alignItems="center" marginTop="md">
          <PaginationButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaArrowLeft />
          </PaginationButton>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationButton
              key={index}
              onClick={() => handlePageChange(index + 1)}
              isActive={currentPage === index + 1}
            >
              {index + 1}
            </PaginationButton>
          ))}
          <PaginationButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaArrowRight />
          </PaginationButton>
        </Flex>
      </Flex>
    </>
  );
};

export default React.memo(View);
