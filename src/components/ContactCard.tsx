import * as React from 'react';
import IContact from '../models/Contact'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export interface IProps {
  contact: IContact
}

export default class ContactCard extends React.Component<IProps, any> {
  public render() {
    // console.log('ContactCard props', this.props.contact)
    const { id, firstName, lastName, phone, email, avator } = this.props.contact
    return (
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src={avator} />
          <Card.Header>
            { firstName } { lastName }
          </Card.Header>
          <Card.Description>
            <p><Icon name='phone'>{ phone }</Icon></p>
            <p><Icon name='mail outline'>{ email }</Icon></p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra={true}>
          <div className='ui two buttons'>
            <Link to={`/contacts/edit/${id}`}
              className='ui basic button green'>Edit</Link>
            <Button basic={true} color='red'>Delete</Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
