import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
`;

export const InputContainer = styled.div`
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--gray);
  color: var(--gray);
  padding: 0.5rem;
  width: 90%;
  display: flex;
  transition: 0.4s;

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    font-size: 14px;
    padding: 8px 4px;
    color: var(--black);
    &::placeholder {
      color: var(--gray);
    }
  }

  svg {
    margin-right: 16px;
    margin-top: 3px;
  }
`;
