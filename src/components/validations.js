import { object, string, number, date, InferType, ValidationError } from "yup";

const validations = object({
  username: string().required("username zorunlu alan"),
  email: string()
    .email("geçerli bir email girin")
    .required("email zorunlu alan"),
  password: string()
    .min(5, "minimum 5 haneli olmalı")
    .required("password zorunlu alan"),

  // password:string().min(5).required()
});

export default validations;
