import { Reducer } from 'redux'
import {
  ContactActions,
  ContactActionTypes
} from  '../types/ContactTypes'

// import Contact model
import IContact from '../models/Contact'

// define the Contact State
export interface IContactState {
  readonly contacts: IContact[];
}

// define initialContactState
const initialContactState: IContactState = {
  contacts: []
}

export const contactReducer: Reducer<IContactState, ContactActions> = (
  state = initialContactState,
  action
) => {
  console.log('Contact action.type=', action.type)
  switch (action.type) {
    case ContactActionTypes.GET_ALL: {
      return {
        ...state,
        contacts: action.contacts
      }
    }
    default:
      return state
  }
}