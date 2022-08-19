import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';


export default function SendMessageForm({addMessage }) {
    return (
    <Formik
      initialValues={{ text: '', id: '', date: '' }}
        onSubmit={(values, { resetForm }) => {
              
        const date = new Date();
          values.id = nanoid();
          values.date = date.toLocaleString();
          addMessage(values);
          
        resetForm();
      }}
    >
      <Form autoComplete="off">
        <label htmlFor="text">text</label>
        <Field
          type="text"
          name="text"
          required
        />
        {/* <ErrorMessage
          name="text"
          render={message => <ErrorText>{message}</ErrorText>}
        /> */}

       

        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
   
      
    
};
