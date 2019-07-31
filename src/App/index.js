import React from "react"
import { HashRouter } from "react-router-dom"
import { Content } from "./Content"
import { GlobalStyle } from "./GlobalStyle"
import { ErrorBoundary } from "components/ErrorBoundary"

export const App = () => (
  <HashRouter>
    <GlobalStyle />
    <ErrorBoundary>
      <Content />
    </ErrorBoundary>
  </HashRouter>
)
