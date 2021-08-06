import React from 'react';
import Navbar from './Components/Landing Page/Navbar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Components/Landing Page/Pages/Home';
import Product from './Components/Landing Page/Pages/Product';
import Services from './Components/Landing Page/Pages/Services';
import SignUp from './Components/Landing Page/Pages/SignUp';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/products' component={Product} />
        <Route  path='/services' component={Services} />
        <Route  path='/sign-up' component={SignUp} />
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App
