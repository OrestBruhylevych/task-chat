import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${p => p.theme.colors.primary};
  position: relative;

  button {
    position: absolute;
    right: 20px;

    padding: 5px;
    display: block;
    background-color: transparent;
    border: none;
    height: 22px;
    cursor: pointer;

    :hover,
    :focus {
      color: blue;
    }
  }
`;

export const FieldStyled = styled(Field)`
  display: inline-block;
  height: 20px;
  width: 100%;
  font: inherit;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 10px;

  ::placeholder {
    font: inherit;
    font-size: 14px;
  }
`;
