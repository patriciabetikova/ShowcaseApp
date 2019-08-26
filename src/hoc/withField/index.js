import React from "react"
import { Field } from "formik"
import { FieldWrapper, StyledLabel, ErrorMessage } from "./styled"
import { context } from "hoc/withForm"

export const withField = Component => ({ label, name, noMargin, ...props }) => {
  if (!name)
    return (
      <>
        {label && <StyledLabel>{label}</StyledLabel>}
        <Component {...props} />
      </>
    )

  return (
    <context.Consumer>
      {val => {
        console.log(val.form.erros, "errors")
        const error = val.form.errors[name]
        const touched = val.form.touched[name]
        return (
          <FieldWrapper noMargin={noMargin}>
            <StyledLabel>{label}</StyledLabel>
            <Component
              {...props}
              value={val.form.values[name]}
              onChange={val.onChange(name)}
              // onBlur={}
            />
            {error && touched && <ErrorMessage>{error}</ErrorMessage>}
          </FieldWrapper>
        )
      }}
    </context.Consumer>
  )
  return (
    <Field
      render={({ form }) => {
        const formSubmitted = form.submitCount > 0
        const fieldTouched = form.touched[name]
        const showError = formSubmitted || fieldTouched
        const error = showError && form.errors[name]
        return (
          <FieldWrapper noMargin={noMargin}>
            <StyledLabel>{label}</StyledLabel>
            <Component
              {...props}
              value={form.values[name]}
              onChange={v => {
                form.setFieldValue(name, v, true)
              }}
              onBlur={() => form.setFieldTouched(name, true)}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </FieldWrapper>
        )
      }}
    />
  )
}
