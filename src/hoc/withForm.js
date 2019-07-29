import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import * as R from "ramda"
import { Loader } from "components/Loader"
import { withRouter } from "react-router-dom"
import { toastError } from "data/toasts/rx"

export const withForm = ({
  schema,
  onSubmit,
  onSuccess = R.always(R.always()),
  initialValues = R.always({}),
  redirect,
}) =>
  R.compose(
    withRouter,
    Component => props => (
      <Formik
        validationSchema={Yup.object(schema)}
        initialValues={initialValues(props)}
        onSubmit={(values, form) => {
          form.setSubmitting(true)
          onSubmit(props)(values)
            .then(response => {
              onSuccess(props)(response)
              form.setSubmitting(false)
              if (redirect) {
                props.history.push(redirect(props)(response))
              }
            })
            .catch(err => {
              form.setSubmitting(false)
              toastError(
                R.pathOr("Unknown error", ["response", "data", "message"], err),
              )
            })
        }}
        render={p => (
          <>
            <form
              onSubmit={e => {
                p.submitForm()
                e.stopPropagation()
                e.preventDefault()
              }}
            >
              <Component {...props} form={p} />
            </form>
            {p.isSubmitting && <Loader />}
          </>
        )}
      />
    ),
  )
