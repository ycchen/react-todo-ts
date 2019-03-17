/* Imports from Redux:
  applyMoiddleware: Applies middleware to the dispatch method of the Redux store
  combineReducers: Merges reducers into one
  createStore: Creates a Redux store that holds the state tree
  Store: The TS type used for the store, or state tree
*/
import { applyMiddleware, combineReducers, createStore, Store } from 'redux'

/* Thunk
Redux Thunk middleware allows you to wrie action creators that return a function instead
of an action. The thunk can be used to deplay the dispatch of an action,
or to dispatch only if a certain condition is met.
The inner function receives the store methods dispatch and getState as parameters 
*/
import thunk from 'redux-thunk'

//  Import reducers and state type
import { 
  characterReducer,
  ICharacterState
} from '../reducers/CharacterReducers'

import {
  todoReducer,
  ITodoState
} from '../reducers/TodoReducers'

import {
  contactReducer,
  IContactState
} from '../reducers/ContactReducers'


// Create an interface for the application state
export interface IAppState {
  characterState: ICharacterState;
  todoState: ITodoState;
  contactState: IContactState;
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  characterState: characterReducer,
  todoState: todoReducer,
  contactState: contactReducer
})

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any>{
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk))
  return store
}

