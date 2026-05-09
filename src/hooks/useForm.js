import { useState } from "react";

export const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const setFieldValue = (field, value) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const reset = () => {
    setValues(initialState);
  };

  return { values, setFieldValue, reset };
};
