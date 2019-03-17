import * as React from 'react';
import { connect }from 'react-redux'
import { IAppState } from '../store'
import { ICharacter } from '../models/Character'
import { RouteComponentProps } from "react-router-dom"
import { bindActionCreators, Dispatch } from 'redux'
import { getAllCharacters } from '../actions/CharacterActions'

/* We can use RouteComponentProps to combine Props (IProp, IPropsFromDispatch)
  export interface IProps extends RouteComponentProps {
    characters: ICharacter[];
    getAllCharacters: typeof getAllCharacters
  }
*/

/* Create the containers interface
  export interface IProps {
    characters: ICharacter[];
  }

  interface IPropsFromDispatch {
    getAllCharacters: typeof getAllCharacters
  }
// type AllProps = IPropsFromDispatch & IProps
*/

export interface IProps extends RouteComponentProps {
  characters: ICharacter[];
  getAllCharacters: typeof getAllCharacters
}

class CharacterPage extends React.Component<IProps> {
  
  public componentDidMount() {
    console.log('====Character Page com didm mount', this.props)
    this.props.getAllCharacters()
  }

  public render() {
    console.log('this.props inside of CharacterList container', this.props)
    const { characters } = this.props
    return (
      <div className="name-container">
        <h3>The Force Awakens</h3>
        {characters && characters.map(character => {
          return(
            <span key={character.name} className="name">
              {character.name}<br/>
            </span>
          )
        })}
      </div>
    );
  }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  return {
    characters: store.characterState.characters
  }
}

// const mapDispatchToProps = (dispatch: any) => {
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      { getAllCharacters },
      dispatch
    )
    // or
    // getAllCharacters: () => dispatch(getAllCharacters())
  }
    
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CharacterPage)
