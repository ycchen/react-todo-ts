import * as React from 'react'
import { Field, InjectedFormProps, reduxForm, FormSubmitHandler } from 'redux-form'
import { Form, Grid, Button } from 'semantic-ui-react'
import IContact from '../models/Contact'
export interface IProps {
  contact: IContact
  // onSubmit: FormSubmitHandler
}
export interface IContactFormData {
  firstName: string
  lastName: string
  phone: string
  email: string
}

class ContactForm extends React.Component<InjectedFormProps<IContact> & IProps> {
  
  // public componentWillReceiveProps(nextProps: any) {
  //   const {contact} = nextProps
  //   console.log('===========nextProps information=========================');
  //   console.log(nextProps);
  //   console.log('====================================');
  // }
  
  public renderField = (field: any) => {
    const { touched, error } = field
    return (
      <Form.Field>
        <label>{field.label}</label>
        <input {...field.input} placeholder={field.label} type={field.type} />
        { touched && error && <span className="error"> {error.message} </span>}
      </Form.Field>
    )
  }
  
  public render() {
    const {handleSubmit, submitting, pristine, reset } = this.props
    console.log('initialvalues', this.props.initialValues)
    return (
      <div>
        <Grid centered={true} columns={2}>
          <Grid.Column>
          <Form onSubmit={handleSubmit}>
            <Field name="firstName"
              label="First Name" 
              type="text" 
              component={this.renderField} 
              />

            <Field name="lasttName"
              label="Last Name" 
              type="text" 
              component={this.renderField} />

            <Field name="phone"
              label="Phone" 
              type="text" 
              component={this.renderField} />

            <Field name="email"
              label="Email" 
              type="text" 
              component={this.renderField} />

{/* disabled={pristine || submitting} */}
            <Button primary={true} type="submit"> 
              Save
            </Button>
            <Button negative={true} type="submit">
              Cancel
            </Button>
          </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

// export default ContactForm
export default reduxForm(
  {form: 'contact'}
)(ContactForm)