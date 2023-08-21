import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import theme from "../../styled/defaultTheme";

const DateField = styled(ReactDatePicker)`
  width: 200%;
  padding: ${theme.spacings.xs};
  border: 1px solid ${props => (props.error ? theme.colors.danger : "#cccccc")};
  border-radius: 10px;
  color: ${theme.colors.primaryTextColor};
  font-size: ${theme.textSizes.sm}; // Adjust font size to match other fields
  transition: border-color 0.2s linear;
  cursor: pointer; // Add cursor pointer to indicate interactivity

  &:focus {
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.placeholder};
  }

  ${({ error }) =>
    error &&
    `
      background-color: ${theme.colors.dangerBackground};
      color: ${theme.colors.danger};
      &::placeholder {
        color: ${theme.colors.danger};
      }
  `}
`;

export default DateField;
