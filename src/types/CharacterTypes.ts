// Import Character Typing
// import { ICharacter, ICharacterState } from '../reducers/CharacterReducers'
import { ICharacter } from '../reducers/CharacterReducers'

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