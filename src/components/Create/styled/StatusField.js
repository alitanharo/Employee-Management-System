import styled from "styled-components";
import theme from "../../styled/defaultTheme";

const StatusField = styled.select`
  width: 100%;
  padding: ${theme.spacings.xs};
  border: 1px solid ${props => (props.error ? theme.colors.danger : "#cccccc")};
  border-radius: 10px;
  color: ${theme.colors.primaryTextColor};
  font-size: ${theme.textSizes.md}
  transition: border-color 0.2s linear;

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
  `}
`;

export default StatusField;
