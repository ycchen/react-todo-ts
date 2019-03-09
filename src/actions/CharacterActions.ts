// Import redux types
import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

// Import Character Typing
import { ICharacter, ICharacterState } from '../reducers/CharacterReducers'

// create Action Constants
export enum CharacterActionTypes {
  GET_ALL = 'GET_ALL'
} 

// Interface for Get All Action Type
export interface ICharacterGetAllAction {
  type: CharacterActionTypes.GET_ALL;
  characters: ICharacter[];
}

/*
 Combie the action types with a union (we assume there are more)
 example: export type CharacterActions = IGetAllAction | IGetOneAction ...
*/
export type CharacterActions = ICharacterGetAllAction;

const apiUrl = 'https://swapi.co/api/people/'

export const getAllCharacters: ActionCreator<
  ThunkAction<Promise<any>, ICharacterState, null, ICharacterGetAllAction>
  > = () => {
    return async (dispatch: Dispatch) => {
      try {
        const response = await axios.get(apiUrl)
        dispatch({
          type: CharacterActionTypes.GET_ALL,
          characters: response.data.results
        })
      } catch (error) {
        console.error(error)
      }
    }
  }