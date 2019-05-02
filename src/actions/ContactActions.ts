import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import {
  IContactGetAllAction,
  IContactGetContactAction,
  IContactNewContactAction,
  ContactActionTypes
} from '../types/ContactTypes'

import { IContactState } from '../reducers/ContactReducers'

const apiUrl = 'https://5c6ac9b9d98e3600141cab70.mockapi.io/api/contacts'

export const getAllContacts: ActionCreator<
  ThunkAction<Promise<any>, IContactState, null, IContactGetAllAction >
> = () => {
  return async (dispatch: Dispatch) => {
    try{
      console.log('before Contact axios.get= ', Date.now().toString())
      const response = await axios.get(apiUrl)
      console.log('after Contact axios.get= ', Date.now().toString())
      console.log('contact response=',response.data)
      dispatch({
        type: ContactActionTypes.GET_ALL,
        contacts: response.data
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export const getContact: ActionCreator<
  ThunkAction<Promise<any>, IContactState, null, IContactGetContactAction>
> = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      console.log('before Contact axios.get= ', Date.now().toString())
      const response = await axios.get(`${apiUrl}/${id}`)
      console.log('after Contact axios.get= ', Date.now().toString())
      console.log('contact response=',response.data)
      console.log('here is where you dispatch GET_CONTACT action')
      dispatch({
        type: ContactActionTypes.GET_CONTACT,
        contact: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const newContact = () => {
  return(dispatch: Dispatch) => {
    dispatch({
      type: 'NEW_CONTACT'
    })
  }
}