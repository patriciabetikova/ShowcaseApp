import React from "react"
import { Button } from "components/Button"
import { TextField } from "inputs/TextField"
import { PasswordField } from "inputs/PasswordField"
import { StyledForm } from "styled/form"
import { withForm } from "hoc/withForm"
import { withGradient } from "hoc/withGradient"
import { stringRequired, emailRequired } from "validators"
import { loginRequest } from "data/auth/api"
import * as R from "ramda"
import { login } from "data/auth/rx"
import { urls } from "pages/urls"
import { Link } from "components/Link"
import { Logo } from "components/Logo"
import { Title, Subtitle } from "styled/typography"
import {
  RegisterLinkTop,
  TitleWrapper,
  RegisterLinkBottom,
  FieldWrapper,
} from "./styled"

const enhancer = R.compose(
  withGradient,
  withForm({
    getSchema: () => ({
      email: emailRequired,
      password: stringRequired,
    }),
    onSubmit: props => loginRequest,
    onSuccess: props => login,
    initialValues: () => ({
      email: "john@doe.com",
      password: "hunter2",
    }),
  }),
)

export const LoginPage = enhancer(() => (
  <>
    <RegisterLinkTop>
      <Subtitle>
        Don’t have account? <Link to={urls.register.url}>SIGN UP</Link>
      </Subtitle>
    </RegisterLinkTop>
    <StyledForm withMarginTop>
      <Logo withMargin absolutePositionDesktop />
      <TitleWrapper>
        <Title>Sign in.</Title>
        <Subtitle>Enter your details below.</Subtitle>
      </TitleWrapper>
      <FieldWrapper>
        <TextField type="email" label="email" name="email" />
      </FieldWrapper>
      <FieldWrapper>
        <PasswordField type="password" label="password" name="password" />
      </FieldWrapper>
      <RegisterLinkBottom>
        <Subtitle>
          Don’t have account? <Link to={urls.register.url}>SIGN UP</Link>
        </Subtitle>
      </RegisterLinkBottom>
      <Button text="Sign in" type="submit" mobileFullWidth big />
    </StyledForm>
  </>
))
