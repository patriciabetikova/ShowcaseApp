import React from "react"
import { Routes } from "./Routes"
import { withData } from "hoc/withData"
import * as R from "ramda"
import { userRequest } from "data/auth/api"
import { ToastNotifications } from "./ToastNotifications"
import { withTokens } from "./withTokens"

const enhancer = R.compose(
  withTokens,
  withData(userRequest, {
    skip: p => !p.loggedIn,
  }),
)

export const Content = enhancer(({ data, loggedIn }) => (
  <>
    <ToastNotifications />
    <Routes loggedIn={loggedIn} user={data} />
  </>
))
