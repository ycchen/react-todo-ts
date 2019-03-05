import * as React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import ContactPage from './containers/ContactPage'
import HomePage from './containers/HomePage'
import TodoPage from './containers/TodoPage'

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
      <Container>
        <div className="ui three item menu">
          <NavLink className="item" activeClassName="active" exact={true} to="/">Home</NavLink>
          <NavLink className="item" activeClassName="active" exact={true} to="/todos">Todos List</NavLink>
          <NavLink className="item" activeClassName="active" exact={true} to="/contacts">Contacts List</NavLink>
        </div>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/todos" component={TodoPage} />
        <Route exact={true} path="/contacts" component={ContactPage} />
      </Container>
    </BrowserRouter>
      // <div className="App">
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.tsx</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
