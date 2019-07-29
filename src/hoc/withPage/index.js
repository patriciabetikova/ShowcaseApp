import React from "react"
import { StyledPage, StyledBody } from "./styled"
import { Header } from "./Header"
import * as R from "ramda"

export const withPage = (getConfig = R.always({})) => Component => props => {
  const { header = true, link } = getConfig(props)
  return (
    <StyledPage>
      {header && props.user && <Header link={link} user={props.user} />}
      <StyledBody>
        <Component {...props} />
        <div id="scrollSpacer" />
      </StyledBody>
    </StyledPage>
  )
}
