import styled from 'styled-components';
import { Form } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${p => p.theme.colors.primary};
  /* position: relative; */

  button {
    /* position: absolute;
    right: 25px; */

    display: block;
    background-color: white;
    border: none;
    height: 48px;
    width: 40px;
    cursor: pointer;
    border-radius: 0 10px 10px 0;

    :hover,
    :focus {
      background-color: blue;
      color: white;
    }
  }
`;

export const TextareaStyled = styled.textarea`
  resize: none;
  /* display: inline-block; */
  /* height: 20px; */
  width: 100%;
  font: inherit;
  font-size: 14px;
  border: none;
  outline: none;
  /* border-radius: 10px; */
  padding: 5px 40px 5px 5px;
  border-radius: 10px 0 0 10px;

  ::placeholder {
    font: inherit;
    font-size: 14px;
  }
`;
