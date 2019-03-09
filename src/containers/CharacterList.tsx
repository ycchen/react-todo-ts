import * as React from 'react';
import { connect }from 'react-redux'

export interface IProps {
  characters: []
}

class CharacterList extends React.Component<IProps, any> {
  public render() {
    return (
      <div>
        <h2>Character List Page</h2>        
      </div>
    );
  }
}
const mapStateToProps = () => {
  return {

  }
}

export default connect(mapStateToProps)(CharacterList)
