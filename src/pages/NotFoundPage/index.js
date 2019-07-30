import React from "react"
import { StyledBackground, StyledErrorMessage } from "./styled"
import { Alert } from "assets/icons/Alert"
import { Icon } from "components/Icon"
import { Link } from "components/Link"
import { urls } from "pages/urls"

export const NotFoundPage = () => {
  return (
    <StyledBackground>
      <Icon icon={Alert} large />
      <StyledErrorMessage>OOPS</StyledErrorMessage>
      <StyledErrorMessage>Page not found</StyledErrorMessage>
      <StyledErrorMessage>
        Try going back <Link to={urls.home.url}>Home</Link>
      </StyledErrorMessage>
    </StyledBackground>
  )
}
