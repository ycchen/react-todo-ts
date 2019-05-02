import * as React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch} from 'redux'
import { getContact, newContact } from '../actions/ContactActions'
import { IAppState } from '../store'
import { RouteComponentProps } from 'react-router-dom'
import IContact from '../models/Contact'
import ContactForm from '../components/ContactForm'

export interface IProps extends RouteComponentProps<{id: string}> {
  contact: IContact
  getContact: typeof getContact
  newContact: typeof newContact
}


class ContactNewFormPage extends React.Component<IProps> {
  
  public componentDidMount = () => {
    const { id } = this.props.match.params
    if (id) {
      console.log('this.props.match.params.id', id)
      // getContact
      this.props.getContact(id)
    } else {
      // newContact
      this.props.newContact
      console.log('newcontact =========')
      console.log(this.props.contact)
    }
  }
  
  public submit = (contact: any) => {
    console.log("====submit from ContactNewFormPage===")
  }

  public render() {
    const { contact } = this.props
    return (
      <div>
        Contact New Form page
        <ContactForm onSubmit={this.submit} />
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
      { getContact , newContact},
      dispatch
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispoatchToProps
)(ContactNewFormPage)

