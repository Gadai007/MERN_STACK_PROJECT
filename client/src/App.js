import React, { Component } from 'react'
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import { Provider } from 'react-redux'
import store from './store'
import { Container } from 'reactstrap'
import ItemModal from './components/ItemModal'
import { loadUser } from './actions/authActions'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component{

  componentDidMount(){
    store.dispatch(loadUser())
  }
  render(){
    return (
      <Provider store={store}>
        <div>
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
