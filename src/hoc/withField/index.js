import React from "react"
import { Field } from "formik"
import { FieldWrapper, StyledLabel, ErrorMessage } from "./styled"

export const withField = Component => ({ label, name, noMargin, ...props }) => {
  if (!name) return <Component {...props} />
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
