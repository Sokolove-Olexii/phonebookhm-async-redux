import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toastr from "toastr";
import { useForm } from "../../hooks/useForm";
import { AuthInputs, AuthLinks } from "../../components/AuthComponents";
import { loginFields, loginLinks } from "../../constants/authForms";

const Login = () => {
  const dispatch = useDispatch();
  const { values, setFieldValue } = useForm({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.email.trim() === "" || values.password.trim() === "") {
      toastr.error("Fields can't be empty");
      return;
    }

    dispatch(login({ email: values.email, password: values.password }))
      .unwrap()
      .then(() => toastr.success("Login success"))
      .catch((err) => toastr.error("Login failed: " + err));
  };

  return (
    <section className="page-section">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <AuthInputs
            fields={loginFields}
            values={values}
            onChange={setFieldValue}
          />

          <div className="help-text">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" /> Remember me
            </label>
            <Link className="styled-link" to="/reset-password">
              Forgot password?
            </Link>
          </div>

          <button className="auth-btn" type="submit">
            Log In
          </button>
        </form>

        <AuthLinks links={loginLinks} />
      </div>
    </section>
  );
};

export default Login;
