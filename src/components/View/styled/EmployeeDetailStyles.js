import styled from "styled-components";

export const DetailOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailContainer = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
`;

export const CloseButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 16px;
`;

export const StatusText = styled.p`
  color: ${props => {
    switch (props.status) {
      case "ACTIVE":
        return "#00c853"; /* Green */
      case "LEAVE_OF_ABSENCE":
        return "#3F78B1"; /* Blue */
      case "TERMINATED":
        return "#e53935"; /* Red */
      default:
        return "#333"; /* Default color */
    }
  }};
  font-weight: bold;
`;
