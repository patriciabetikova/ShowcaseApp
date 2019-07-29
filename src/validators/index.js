import * as Yup from "yup"

export const stringRequired = Yup.string().required("This field is required")
export const numberRequired = Yup.number()
  .required("This field is required")
  .typeError("Must be a number")
export const emailRequired = stringRequired.email()
