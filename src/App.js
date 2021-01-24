import React, { useState } from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom"
import PosRouter from './modules/pos/PosRouter'
import AdminHome from "./modules/admin/screens/AdminHome"

export const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pos/admin" component={AdminHome}/>
        <Route path="/pos" component={PosRouter}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App