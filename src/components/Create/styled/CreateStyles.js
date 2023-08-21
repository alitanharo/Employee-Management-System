import styled from "styled-components";
import theme from "../../styled/defaultTheme";

export const StyledCreate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: ${theme.spacings.md};
  border-radius: ${theme.borders.light};
  box-shadow: ${theme.shadows.sm};
  background-color: ${theme.colors.white};
`;
