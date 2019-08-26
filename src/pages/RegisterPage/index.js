import React from "react"
import { Button } from "components/Button"
import { TextField } from "inputs/TextField"
import { StyledForm } from "styled/form"
import { withForm } from "hoc/withForm"
import { withGradient } from "hoc/withGradient"
import { stringRequired } from "validators"
import { registerRequest } from "data/auth/api"
import * as R from "ramda"
import { login } from "data/auth/rx"
import { urls } from "pages/urls"
import { Link } from "components/Link"
import { Title, Subtitle } from "styled/typography"
import { LoginLinkTop, TitleWrapper, LoginLinkBottom } from "./styled"
import { PasswordStrength } from "./PasswordStrength"
import { isPasswordStrong } from "data/auth/password"
import { PasswordField } from "inputs/PasswordField"
import { Logo } from "components/Logo"

const enhancer = R.compose(
  withGradient,
  withForm({
    getSchema: () => ({
      firstName: stringRequired,
      lastName: stringRequired,
      email: stringRequired,
      password: stringRequired,
      // .test("", "", isPasswordStrong),
      confPassword: stringRequired,
      // .test("", "Passwords don't match", function(
      //   x,
      // ) {
      //   return x === this.parent.password
      // }),
    }),
    onSubmit: props => registerRequest,
    onSuccess: props => login,
  }),
)

export const RegisterPage = enhancer(({ form }) => (
  <>
    <LoginLinkTop>
      <Subtitle>
        Already have an account? <Link to={urls.login.url}>SIGN IN</Link>
      </Subtitle>
    </LoginLinkTop>
    <StyledForm>
      <Logo withMargin absolutePositionDesktop />
      <TitleWrapper>
        <Title>Get started absolutely free.</Title>
        <Subtitle>Enter your details below.</Subtitle>
      </TitleWrapper>
      <TextField type="text" label="first name" name="firstName" />
      <TextField type="text" label="last name" name="lastName" />
      <TextField type="email" label="Email" name="email" />
      <PasswordField
        type="password"
        label="password"
        name="password"
        noMargin
      />
      <PasswordStrength value={form.values.password} />
      <PasswordField
        type="password"
        label="repeat password"
        name="confPassword"
      />
      <LoginLinkBottom>
        <Subtitle>
          Already have an account? <Link to={urls.login.url}>SIGN IN</Link>
        </Subtitle>
      </LoginLinkBottom>
      <Button text="Register" type="submit" mobileFullWidth big />
    </StyledForm>
  </>
))
