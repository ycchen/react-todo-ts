import * as React from 'react';
import { connect }from 'react-redux'
import { IAppState } from '../store'
import { ICharacter } from '../reducers/CharacterReducers'

// Create the containers interface
export interface IProps {
  characters: ICharacter[]
}

class CharacterList extends React.Component<IProps, any> {
  public render() {
    console.log('this.props inside of CharacterList container', this.props)
    const { characters } = this.props
    return (
      <div className="name-container">
        {characters && characters.map(character => {
          return(
            <>
            <span key={character.name} className="name">
              {character.name}
            </span><br/>
            </>
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

export default connect(mapStateToProps)(CharacterList)
