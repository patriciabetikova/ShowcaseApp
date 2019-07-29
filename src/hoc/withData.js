import React, { useState, useEffect } from "react"
import { withLoader } from "hoc/withLoader"
import { Error } from "components/Error"
import * as R from "ramda"

export const withData = (getRequest, { skip = R.always(false) } = {}) =>
  R.compose(
    Component => props => {
      const [data, setData] = useState(null)
      const [error, setError] = useState(null)
      const fetch = () => {
        setData(null)
        getRequest(props)
          .then(x => setData(x))
          .catch(x => setError(x))
      }
      useEffect(() => {
        if (skip(props)) return
        fetch()
      }, [props]) // eslint-disable-line
      if (error) return <Error error={error} />
      return <Component {...props} data={data} refetchData={fetch} />
    },
    withLoader(p => !p.data && !skip(p)),
  )
