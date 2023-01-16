import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstname: Yup.string().required("Please insert your first name!"),
  lastname: Yup.string().required("Please select last name!"),
  email: Yup.string()
    .email("Invalid email format!")
    .required("This field is required!"),
  dob: Yup.string().required("Please select program type!"),
  phone: Yup.number()
    .typeError("you must specify a number")
    .required("Please insert birth date"),
});
