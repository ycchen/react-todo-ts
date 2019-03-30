import * as React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import ContactPage from './containers/ContactPage'
import CharacterPage from './containers/CharacterPage'
import HomePage from './containers/HomePage'
import TodoPage from './containers/TodoPage'
import ContactFormPage from './containers/ContactFormPage'

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
      <Container>
        <div className="ui four item menu">
          <NavLink className="item" activeClassName="active" exact={true} to="/">Home</NavLink>
          <NavLink className="item" activeClassName="active" exact={true} to="/todos">Todos List</NavLink>
          <NavLink className="item" activeClassName="active" exact={true} to="/characters">Characters List</NavLink>
          <NavLink className="item" activeClassName="active" exact={true} to="/contacts">Contacts List</NavLink>
        </div>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/todos" component={TodoPage} />
        <Route exact={true} path="/characters" component={CharacterPage} />
        <Route exact={true} path="/contacts" component={ContactPage} />
        <Route exact={true} path="/contacts/edit/:id" component={ContactFormPage} />

      </Container>
    </BrowserRouter>
    );
  }
}

export default App;
