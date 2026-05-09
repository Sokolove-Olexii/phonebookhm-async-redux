import toastr from "toastr";
import { addContact } from "../redux/operations";
import { useDispatch, useSelector } from "react-redux";

export const useContactSubmit = (values, resetForm) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.name.trim() === "" || values.number.trim() === "") {
      toastr.error("Fields can't be empty");
      return;
    }

    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase(),
    );

    if (isDuplicate) {
      toastr.info(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return handleSubmit;
};
