import * as React from 'react';

interface AppProps {
  message: string
}

export default class Home extends React.Component<AppProps> {
  public render() {
    return (
      <div>
        Home Component - message: {this.props.message}
      </div>
    );
  }
}
