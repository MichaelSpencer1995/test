import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import Budget from './views/Budget'
import Goals from './views/Goals'
import Home from './views/Home'

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/budget" component={Budget} />
          <Route path="/goals" component={Goals} />
      </BrowserRouter>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  margin: 0 auto;
  height: 650px;
  width: 420px;
  background: #ccc;
  border: #272727 0 solid;
  border-width: 84px 24px;
  border-radius: 20px;
`

export default App