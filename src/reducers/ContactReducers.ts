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
  readonly contact: IContact | null;
}

// define initialContactState
const initialContactState: IContactState = {
   contacts: [],
   contact: null
}

export const contactReducer: Reducer<IContactState, ContactActions> = (
  state = initialContactState,
  action
) => {
  // console.log('Contact action.type=', action.type)
  switch (action.type) {
    case ContactActionTypes.GET_ALL: {
      return {
        ...state,
        contacts: action.contacts
      }
    }
    case ContactActionTypes.GET_CONTACT: {
      return {
        ...state,
        contact: action.contact
      }
    }
    case ContactActionTypes.NEW_CONTACT: {
      return {
        ...state,
        contact: null
      }
    }
    default:
      return state
  }
}