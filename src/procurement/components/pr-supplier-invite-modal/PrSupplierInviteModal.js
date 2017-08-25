import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Input, Icon, Modal, Form, Button } from 'semantic-ui-react'
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class PrSupplierInviteModal extends React.Component {
  static propTypes = {
    /** Description of prop "baz". */
    baz: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
  };
  static defaultProps = {
  };

  constructor(props){
    super(props);
    
    this.onClose = this.onClose.bind(this);
    this.onOpen = this.onOpen.bind(this);
    
  }
  
  componentWillMount() {
    this.setState({ open: this.props.open })
  }
  
  state = { open: false }
  close = () => this.setState({ open: false })
  onClose(event){
    this.setState({ open: false })
    if(this.props.onClose){
      this.props.onClose(event)
    }
  }
  onOpen(event){
    this.setState({ open: true })
    if(this.props.onOpen){
      this.props.onOpen(event)
    }
  }

  render() {
    let props = {size:'small'};
    Object.assign(props,this.props);
    props.onClose = this.onClose;
    props.onOpen = this.onOpen;
    if(this.state.open){
      props.open = true;
    }
    
    const options = [
      { key: 'angular', text: 'Angular', value: 'angular' },
      { key: 'css', text: 'CSS', value: 'css' },
      { key: 'design', text: 'Graphic Design', value: 'design' },
      { key: 'ember', text: 'Ember', value: 'ember' },
      { key: 'html', text: 'HTML', value: 'html' },
      { key: 'ia', text: 'Information Architecture', value: 'ia' },
      { key: 'javascript', text: 'Javascript', value: 'javascript' },
      { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
      { key: 'meteor', text: 'Meteor', value: 'meteor' },
      { key: 'node', text: 'NodeJS', value: 'node' },
      { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
      { key: 'python', text: 'Python', value: 'python' },
      { key: 'rails', text: 'Rails', value: 'rails' },
      { key: 'react', text: 'React', value: 'react' },
      { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
      { key: 'ruby', text: 'Ruby', value: 'ruby' },
      { key: 'ui', text: 'UI Design', value: 'ui' },
      { key: 'ux', text: 'User Experience', value: 'ux' },
    ]

    return (
			<Modal {...props} >
        <Modal.Header>Invite New Supplier</Modal.Header>
        <Modal.Content>
            <Form>
              <Form.Field>
                <label>Company Name</label>
                <input placeholder='Company Name' />
              </Form.Field>
              <Form.Field>
                <label>Industry</label>
                <Dropdown placeholder='Select Industry' fluid multiple selection options={options} />
              </Form.Field>
              <Form.Field>
                <label>Email Address</label>
                <Input iconPosition='left' placeholder='mysupplier@gmail.com'>
                  <Icon name='at' />
                  <input />
                </Input>
              </Form.Field>
            </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={this.close}>
            Cancel
          </Button>
          <Button positive icon='send' labelPosition='right' content="Send invite" onClick={this.close} />
        </Modal.Actions>
      </Modal>
		);
  }
}