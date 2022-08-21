import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { FormStyled, FieldStyled } from './SendMessageForm.styled';

export default function SendMessageForm({ addMessage }) {
  return (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={(values, { resetForm }) => {
        const date = new Date();
        values.fromUser = true;
        values.id = nanoid();
        values.date = date.toLocaleString();
        addMessage(values);

        resetForm();
      }}
    >
      <FormStyled autoComplete="off">
        <FieldStyled type="text" name="text" required />
        {/* <ErrorMessage
          name="text"
          render={message => <ErrorText>{message}</ErrorText>}
        /> */}

        <button type="submit">Send</button>
      </FormStyled>
    </Formik>
  );
}
