import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  //width: 300px;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-between;
  width: 100%;
  Link {
    align-self: center;
  }
`;

export const Head = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  width: 90%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  margin: 20px 0px 10px;
  box-shadow: -5px 12px 28px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  #div-test {
    width: 50px;
    height: 50px;
  }

  span {
    color: white;
    background-color: #03045e;
    padding: 2px 3px;
    border-radius: 5px;
  }
`;
