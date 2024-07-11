import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { Formik, Form, Field } from "formik";
//import css from "./FeedbackForm.module.css";
import css from "./FeedbackForm.module.css";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string()
    .min(8, "Too short")
    .max(256, "Too long")
    .required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
});

const initialValues = {
  username: "12",
  email: "13@14",
  message: "defoult text",
  level: "def good",
};

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log("Form is submited, VALUE:", values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Username</label>
          <Field
            type="text"
            name="username"
            className={css.field}
            id={nameFieldId}
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>
        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            type="email"
            name="email"
            className={css.field}
            id={emailFieldId}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div>
          <label htmlFor={msgFieldId}>Message</label>
          <Field
            as="textarea"
            name="message"
            id={msgFieldId}
            // cols="20"
            rows="5"
          />
          <ErrorMessage className={css.error} name="message" component="span" />
        </div>
        <div>
          <label htmlFor={levelFieldId}>Service statisfaction lavel</label>
          <Field as="select" name="level" id={levelFieldId}>
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
            <ErrorMessage className={css.error} name="level" component="span" />
          </Field>
        </div>

        <button type="submit" className={css.btn}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default FeedbackForm;
