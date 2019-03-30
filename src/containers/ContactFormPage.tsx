import * as React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch} from 'redux'
import { getContact } from '../actions/ContactActions'
import { IAppState } from '../store'
import { RouteComponentProps } from 'react-router-dom'
import IContact from '../models/Contact'
import ContactForm from '../components/ContactForm'

export interface IProps extends RouteComponentProps<{id: string}> {
  contact: IContact
  getContact: typeof getContact
}


class ContactFormPage extends React.Component<IProps> {
  
  public componentDidMount = () => {
    const { id } = this.props.match.params
    if (id) {
      console.log('this.props.match.params.id', id)
      // getContact
      this.props.getContact(id)
    }

  } 
  public render() {
    const { contact } = this.props
    return (
      <div>
        Contact Form page
        { contact ? (
            <ContactForm contact={contact} />
          ) : (
            <p>Contact not found!</p>
          )
        }
      </div>
    );
  }
}


const mapStateToProps = (state: IAppState) => {
  return {
    contact: state.contactState.contact
  }
}

const mapDispoatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      { getContact },
      dispatch
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispoatchToProps
)(ContactFormPage)

