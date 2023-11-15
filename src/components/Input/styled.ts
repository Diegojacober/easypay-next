import styled from "styled-components";

export const InputArea = styled.div`
  & {
    margin-bottom: 40px;
    width: 100%;
  }

  & input {
    width: 100%;
    padding: 5px;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--white);
    color: var(--white);
    font-size: 14px;
  }

  & input:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid var(--white);
  }
`;
