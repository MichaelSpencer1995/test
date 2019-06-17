import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import Budget from './views/Budget'
import Home from './views/Home'

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/budget" component={Budget} />
      </BrowserRouter>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  margin: 0 auto;
  height: 650px;
  width: 399px;
  background: #ccc;
  border: #272727 0 solid;
  border-width: 84px 24px 114px 24px;
  border-radius: 20px;
`

export default App