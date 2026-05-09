import { Link } from "react-router-dom";

export const AuthInputs = ({ fields, values, onChange, className = "auth-input" }) => {
  return (
    <>
      {fields.map((field, idx) => (
        <input
          key={field.name || idx}
          className={className}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          value={values ? values[field.name] || "" : ""}
          onChange={(e) => onChange(field.name, e.target.value)}
          required={field.required}
          pattern={field.pattern}
        />
      ))}
    </>
  );
};

export const AuthLinks = ({ links }) => {
  if (!links || links.length === 0) return null;

  return (
    <div className="links-container">
      {links.map((link, idx) => (
        <Link key={idx} className="back-link" to={link.to}>
          {link.text}
        </Link>
      ))}
    </div>
  );
};
