import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  Link {
    align-self: center;
  }
`;

export const Head = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    color: white;
    background-color: #03045e;
    padding: 2px 3px;
    border-radius: 5px;
  }
`;
