import React, { useState } from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom"
import AdminHome from "./modules/admin/screens/AdminHome"
import PosPedidoScreen from './modules/pos/screens/pedido/PosPedidoScreen'

export const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={AdminHome}/>
        <Route path="/" exact component={PosPedidoScreen}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App