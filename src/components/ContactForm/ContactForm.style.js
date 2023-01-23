import styled from 'styled-components';

export const FormSubmit = styled.form`
  /* position: relative; */
  width: 350px;
  height: 400px;
  margin-top: 50px;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  /* box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white; */

  label,
  input,
  button {
    display: block;
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  label {
    margin-bottom: 4px;
  }

  label:nth-of-type(2) {
    margin-top: 12px;
  }

  input::placeholder {
    color: gray;
  }

  input {
    background: #ecf0f3;
    padding: 10px;
    padding-left: 20px;
    height: 50px;
    font-size: 14px;
    border-radius: 50px;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  }

  button {
    color: white;
    margin-top: 20px;
    background: #1da1f2;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 900;
    box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
    transition: 0.5s;
  }

  button:hover {
    box-shadow: none;
  }
`;
