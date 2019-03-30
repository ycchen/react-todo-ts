// import without {} is because it has `export default`
import IContact from '../models/Contact'

/* import with {} is because it does not have `export default`
 import { IContact } from '../models/Contact'
*/

// create Action Constants
export enum ContactActionTypes {
  GET_ALL = 'GET_ALL',
  GET_CONTACT = 'GET_CONTACT'
}

// Interface for Get_All Action Type
export interface IContactGetAllAction {
  type: ContactActionTypes.GET_ALL,
  contacts: IContact[]
}

export interface IContactGetContactAction {
  type: ContactActionTypes.GET_CONTACT,
  contact: IContact
}
/*
  Combie the action types with a union (we assume there are more)
  example: `export type ContactActions = IContactGetAllAction | IContactGetOneAction
*/

export type ContactActions = IContactGetAllAction
| IContactGetContactAction;