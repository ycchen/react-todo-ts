import * as React from 'react';
import Home from '../components/Home'

interface IAppProps {
  home: {}
}

export default class HomePage extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        Home Page  
        <Home message="hello world" />
      </div>
    );
  }
}
