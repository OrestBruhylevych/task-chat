import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { AiOutlineSend } from 'react-icons/ai';
import { FormStyled, FieldStyled } from './SendMessageForm.styled';

export default function SendMessageForm({ addMessage }) {
  return (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={(values, { resetForm }) => {
        // const data = new Date();
        values.fromUser = true;
        values.id = nanoid();
        values.date = {
          dateChat: new Date().toDateString(),
          dateMessage: new Date().toLocaleString(),
        };
        addMessage(values);

        resetForm();
      }}
    >
      <FormStyled autoComplete="off">
        <FieldStyled type="text" name="text" required />
        <button type="submit">
          <AiOutlineSend />
        </button>
      </FormStyled>
    </Formik>
  );
}
