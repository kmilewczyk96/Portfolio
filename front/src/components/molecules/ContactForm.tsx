import styles from "./ContactForm.module.css";

import {ReactElement} from "react";

import {Form, Formik} from "formik";

import * as Yup from 'yup';

import Button from "../atoms/Button.tsx";
import FormField from "../atoms/FormField.tsx";
import Spinner from "../atoms/Spinner.tsx";
import {useRequest} from "../../hooks/useRequest.ts";
import {httpRequestMethods} from "../../utils/enums.ts";
import {IMessage} from "../../utils/interfaces.ts";


interface IProps {
  className?: string | undefined,
}

const MessageSchema: Yup.ObjectSchema<object> = Yup.object().shape({
  name: Yup.string()
    .required("This field is required!"),
  email: Yup.string()
    .email("This value must be an email!")
    .required("This field is required!"),
  message: Yup.string()
    .required("This field is required!")
});

const config = {
  headers: {
    "Content-Type": "application/json",
  }
};
export default function ContactForm({className = undefined}: IProps): ReactElement {
  const [isFetching, error, fetchedData, sendRequest] = useRequest({
    url: (import.meta.env.VITE_API_URL || "/api") + "/messages",
    method: httpRequestMethods.post,
    config: config,
  });
  const formInactive: boolean = isFetching || Boolean(error) || (fetchedData!.length !== 0);

  let status: ReactElement = <></>;
  if (isFetching) {
    status = (
      <div className={[styles.statusWrapper, styles.requestPending].join(" ")}>
        <p>Sending</p>
        <Spinner/>
      </div>
    );
  }
  if (error) {
    status = (
      <div className={[styles.statusWrapper, styles.requestError].join(" ")}>
        <p>Something went wrong!</p>
        <span>An error occurred while trying to send the message.</span>
        <Button>Retry</Button>
      </div>
    );
  }
  if (fetchedData.length !== 0) {
    status = (
      <div className={[styles.statusWrapper, styles.requestSuccessful].join(" ")}>
        <p>SUCCESS</p>
        <span>Your message was successfully sent!</span>
        <Button>Confirm</Button>
      </div>
    )
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        company: "",
        message: ""
      }}
      validationSchema={MessageSchema}
      onSubmit={(values: IMessage): void => {
        const formData: string = JSON.stringify(values);
        sendRequest(formData);
      }}
    >
      <Form className={[styles.wrapper, className].join(" ")}>
        <fieldset disabled={formInactive}>
          <div className={styles.fieldsWrapper}>
            <FormField label={"Name"} name={"name"} placeholder={"John Doe"}/>
            <FormField label={"Email"} name={"email"} type={"email"} placeholder={"doe@example.com"}/>
            <FormField label={"Company"} name={"company"} placeholder={"MegaCorp Inc."}/>
            <FormField label={"Message"} name={"message"} component={"textarea"} placeholder={"Your message..."}/>
          </div>
          <div className={"center"}>
            <Button type={"submit"} className={styles.submitBtn}>Submit</Button>
          </div>
        </fieldset>
        {
          formInactive && status
        }
      </Form>
    </Formik>
  );
}
