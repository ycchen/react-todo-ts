import * as React from 'react';
import IContact from '../models/Contact'
export interface IProps {
  contact: IContact
}

export default class ContactForm extends React.Component<IProps> {
  public render() {
    console.log(this.props.contact)
    const { firstName, lastName} = this.props.contact
    return (
      <div>
        Contact Form Detail
        { firstName }
        { lastName }
      </div>
    );
  }
}
