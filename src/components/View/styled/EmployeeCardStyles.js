import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const NameEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

export const Email = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #666;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const ActionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f4f4f4;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #e0e0e0;
    color: #333;
  }
`;
