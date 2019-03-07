import * as React from 'react';
import Home from '../components/Home'

interface AppProps {
  home: {}
}

export default class HomePage extends React.Component<AppProps> {
  public render() {
    return (
      <div>
        Home Page  
        <Home message="hello world" />
      </div>
    );
  }
}
