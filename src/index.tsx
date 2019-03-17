import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import './index.css';
import { Provider } from 'react-redux'

import { Store } from 'redux'

// Import the store function and state
import configureStore, { IAppState } from './store'
// import {getAllCharacters} from './actions/CharacterActions'

import registerServiceWorker from './registerServiceWorker';

interface IProps {
  store: Store<IAppState>
}

const Root: React.SFC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  )
}

const store = configureStore()
// store.dispatch(getAllCharacters())

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
