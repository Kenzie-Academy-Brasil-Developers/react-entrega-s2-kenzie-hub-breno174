import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.whiteSchema ? "#11995e" : "#403CAA")};
  color: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#f5f5f5")};
  height: 45px;
  border-radius: 8px;
  border: 2px solid var(white);
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  margin-top: 16px;
  :hover {
    border: 2px solid var(--black);
  }
  width: 100%;
  transition: 0.5s;
`;
