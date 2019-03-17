import * as React from 'react';
import IContact from '../models/Contact'
import ContactCard from './ContactCard'
import { Card } from 'semantic-ui-react'

export interface IProps {
  contacts: IContact[]
}

export default class ContactList extends React.Component<IProps, any> {

  public render() {

    const { contacts } = this.props

    const cards = () => {
      return (contacts && contacts.map( contact => {
        return (
          <ContactCard key={contact.id} contact={contact} />
        )
      }))
    }
    const contactList = (
      <Card.Group>
        { cards()}
      </Card.Group>
    )  

    return (
        <div>
          { contacts && contacts.length > 0 && contactList }
        </div>
    );
  }
}
