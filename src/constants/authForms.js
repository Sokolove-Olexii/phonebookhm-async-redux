export const loginFields = [
  { name: "email", type: "email", placeholder: "Email" },
  { name: "password", type: "password", placeholder: "Password" },
];

export const registerFields = [
  { name: "name", type: "text", placeholder: "Name" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "password", type: "password", placeholder: "Password" },
];

export const resetFields = [
  { name: "email", type: "text", placeholder: "Email or Username" },
  { name: "newPassword", type: "password", placeholder: "New Password" },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm New Password",
  },
];

export const loginLinks = [
  { to: "/register", text: "Create an account" },
  { to: "/phonebookhm-async-redux", text: "Back to Contacts" },
];

export const registerLinks = [
  { to: "/login", text: "Already have an account?" },
  { to: "/phonebookhm-async-redux", text: "Back to Contacts" },
];

export const resetLinks = [{ to: "/login", text: "← Back to Login" }];

export const contactsFields = [
  {
    name: "name",
    type: "text",
    placeholder: "Enter name...",
    required: true,
    pattern: "^[A-Za-zА-Яа-яЁё\\s]+$",
  },
  {
    name: "number",
    type: "tel",
    placeholder: "Enter number...",
    required: true,
  },
];
