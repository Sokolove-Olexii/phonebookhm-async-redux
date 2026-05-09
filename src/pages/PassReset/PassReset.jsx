import { useState } from "react";
import toastr from "toastr";
import { useForm } from "../../hooks/useForm";
import { AuthInputs, AuthLinks } from "../../components/AuthComponents";
import { resetFields, resetLinks } from "../../constants/authForms";
import "./PassReset.css";

const PassReset = () => {
  const { values, setFieldValue } = useForm({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.email.trim() === "" ||
      values.newPassword.trim() === "" ||
      values.confirmPassword.trim() === ""
    ) {
      toastr.error("Fields can't be empty");
      return;
    }

    if (values.newPassword !== values.confirmPassword) {
      toastr.error("Passwords do not match");
      return;
    }

    if (values.newPassword.length < 7) {
      toastr.error("Password must be at least 7 characters long");
      return;
    }

    toastr.success("Password reset request sent!");
  };

  return (
    <section className="page-section">
      <div className="auth-card">
        <h2 className="auth-title">Reset Password</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <AuthInputs
            fields={resetFields}
            values={values}
            onChange={setFieldValue}
          />
          <button className="auth-btn" type="submit">
            Reset Password
          </button>
        </form>

        <AuthLinks links={resetLinks} />
      </div>
    </section>
  );
};

export default PassReset;
