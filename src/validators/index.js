export const stringRequired = v => !v && "This field is required"
export const numberRequired = v =>
  stringRequired(v) || (!Number(v) && "Must be a number")
export const emailRequired = v =>
  stringRequired(v) ||
  (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(v) &&
    "use valid email")
// export const stringRequired = Yup.string().required("This field is required")
// export const numberRequired = Yup.number()
//   .required("This field is required")
//   .typeError("Must be a number")
// export const emailRequired = stringRequired.email()
