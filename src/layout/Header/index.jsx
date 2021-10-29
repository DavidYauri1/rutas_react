import React from 'react'

import './style.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Header = () => {
  return (
    <Router>
      <Switch>
    <div className="l_header__wrapper">
      <div className="l_header__logo">
        <img src="http://assets.stickpng.com/images/58428ba1a6515b1e0ad75ab0.png" alt="" />
      </div>
      <div className="l_header_menu">
        <div>
        <Link to="/">Home</Link>
        </div>
        <div>
        <Link to="/about">About</Link>
        </div>
        <div>
        <Link to="/hero">Heros</Link>
        </div>
        <div>
        <Link to="/info">Info</Link>
        </div>
      </div>
    </div>
    </Switch>
    </Router>
  )
}

export default Header
