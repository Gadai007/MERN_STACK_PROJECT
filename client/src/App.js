import React from 'react'
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <AppNavbar/>
      <ShoppingList/>
    </div>
  );
}

export default App;
