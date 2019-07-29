import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Content } from "./Content"
import { GlobalStyle } from "./GlobalStyle"
import { ErrorBoundary } from "components/ErrorBoundary"

export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <ErrorBoundary>
      <Content />
    </ErrorBoundary>
  </BrowserRouter>
)
