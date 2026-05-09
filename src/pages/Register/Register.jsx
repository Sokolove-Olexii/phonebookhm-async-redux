import "./Register.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toastr from "toastr";
import { useForm } from "../../hooks/useForm";
import { AuthInputs, AuthLinks } from "../../components/AuthComponents";
import { registerFields, registerLinks } from "../../constants/authForms";

const Register = () => {
  const dispatch = useDispatch();
  const { values, setFieldValue } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.name.trim() === "" ||
      values.email.trim() === "" ||
      values.password.trim() === ""
    ) {
      toastr.error("Fields can't be empty");
      return;
    }

    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    )
      .unwrap()
      .then(() => toastr.success("Registration success"))
      .catch((error) => toastr.error("Registration failed: " + error));
  };

  return (
    <section className="page-section">
      <div className="auth-card">
        <h2 className="auth-title">Register</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <AuthInputs
            fields={registerFields}
            values={values}
            onChange={setFieldValue}
          />
          <button className="auth-btn" type="submit">
            Sign Up
          </button>
        </form>

        <AuthLinks links={registerLinks} />
      </div>
    </section>
  );
};

export default Register;
