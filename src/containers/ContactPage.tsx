import * as React from 'react';
import { connect } from 'react-redux'
import { IAppState} from '../store'
import { RouteComponentProps} from 'react-router-dom'
import { bindActionCreators, Dispatch} from 'redux'
import { getAllContacts } from '../actions/ContactActions'
import IContact from '../models/Contact'

export interface IProps extends RouteComponentProps {
  contacts: IContact[];
  getAllContacts: typeof getAllContacts
}

class ContactPage extends React.Component<IProps> {
  
  public componentDidMount() {
    console.log('====Contact Page com didm mount', this.props)
    this.props.getAllContacts()
  }

  public render() {
    const { contacts } = this.props
    return (
      <div>
        <h4>Contact Page</h4>
        {contacts && contacts.map(contact => {
          return (
            <div key={contact.id}>
              First Name: {contact.firstName}<br/>
              Last Name: {contact.lastName}<br/>
              Phone: {contact.phone}<br/>
              Email: {contact.email}<br/>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    contacts: state.contactState.contacts
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      { getAllContacts},
      dispatch
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactPage)