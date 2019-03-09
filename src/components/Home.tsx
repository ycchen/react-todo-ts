import * as React from 'react';

interface IAppProps {
  message: string
}

export default class Home extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        Home Component - message: {this.props.message}
      </div>
    );
  }
}
