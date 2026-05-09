import "./ContactForm.css";
import { AuthInputs } from "../AuthComponents";
import { useForm } from "../../hooks/useForm";
import { contactsFields } from "../../constants/authForms";
import { useContactSubmit } from "../../hooks/useContactsSubmit";

const ContactForm = () => {
  const { values, setFieldValue, reset } = useForm({ name: "", number: "" });

  const handleSubmit = useContactSubmit(values, reset);

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <AuthInputs
        className="contact-input"
        fields={contactsFields}
        values={values}
        onChange={setFieldValue}
      />
      <button className="contact-btn" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
