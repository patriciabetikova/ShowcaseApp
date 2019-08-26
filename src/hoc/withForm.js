import React, { useState } from "react"
import * as R from "ramda"
import { withRouter } from "react-router-dom"
import { toastError } from "data/toasts/rx"
import { Loader } from "components/Loader"

export const context = React.createContext()

const defaultHandler = () => () => {}

export const withForm = ({
  onSubmit,
  onSuccess = defaultHandler,
  initialValues = R.always({}),
  getSchema = R.always({}),
  redirect,
}) =>
  R.compose(
    withRouter,
    Component => props => {
      const schema = getSchema(props)
      const initValues = initialValues(props)
      const [form, setForm] = useState({
        values: initValues,
        errors: R.mapObjIndexed((value, key) => value(initValues[key]), schema),
        touched: {},
        isSubmitting: false,
      })
      const handleSubmit = e => {
        e.preventDefault()
        setForm(oldState => ({ ...oldState, isSubmitting: true }))
        onSubmit(props)(form.values)
          .then(response => {
            onSuccess(props)(response)
            setForm(oldState => ({ ...oldState, isSubmitting: false }))
            if (redirect) {
              props.history.push(redirect(props)(response))
            }
          })
          .catch(err => {
            setForm(oldState => ({ ...oldState, isSubmitting: false }))
            toastError(
              R.pathOr("Unknown error", ["response", "data", "message"], err),
            )
          })
      }

      return (
        <context.Provider
          value={{
            form,
            onChange: name => val =>
              setForm(oldState => ({
                ...oldState,
                values: { ...oldState.values, [name]: val },
                touched: { ...oldState.touched, [name]: true },
                errors: { ...oldState.errors, [name]: schema[name](val) },
              })),
          }}
        >
          <form onSubmit={handleSubmit}>
            <Component {...props} />
          </form>
          {form.isSubmitting && <Loader />}
        </context.Provider>
      )
    },
  )
