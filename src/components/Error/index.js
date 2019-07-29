import React from "react"
import * as R from "ramda"
import { StyledBackground, StyledErrorMessage } from "./styled"
import { Alert } from "assets/icons/Alert"
import { Icon } from "components/Icon"

export const Error = ({ error }) => {
  const message = R.path(["message"], error)
  if (!message) console.log("error", error)
  return (
    <>
      <StyledBackground>
        <Icon icon={Alert} large />
        <StyledErrorMessage>OOPS</StyledErrorMessage>
        <StyledErrorMessage>Something went wrong</StyledErrorMessage>
        <StyledErrorMessage>Try loading the page again</StyledErrorMessage>
      </StyledBackground>
    </>
  )
}
