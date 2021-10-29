import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Hero from './Hero'
import HeroDetail from './HeroDetail'
import Home from './Home'
import About  from './About'
import Info from './Info'
import View from '../layout/View'

const RouterApp = () => {
  return (
    <View>
      <BrowserRouter>
        <Switch>
          <Route path="/hero">
            <Hero />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </View>
  )
}

export default RouterApp
