import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  line-height: 24px;
  span {
    color: white;
    background-color: #03045e;
    padding: 2px 3px;
    border-radius: 5px;
  }
`;

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  form {
    margin: 70px 0;
    margin-top: 60px;
    width: 340px;
    text-align: center;
  }
  #box {
    border: solid 1px #ced4da;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  h1 {
    margin-bottom: 32px;
  }

  p {
    margin-top: 8px;

    a {
      font-weight: bold;
      color: var(--orange);
    }
  }
`;

export const Botao = styled.button`
  background: "#F5F5F5";
  color: "#333333";
  height: 45px;
  border-radius: 8px;
  border: 1px solid var(gray);
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  margin-top: 16px;
  opacity: 0.7;
  :hover {
    border: 2px solid var(--black);
  }
  width: 100%;
  transition: 0.5s;
`;
