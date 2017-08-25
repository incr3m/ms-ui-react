import React from 'react';
import PropTypes from 'prop-types';
import { Popup, Icon, Grid, Header } from 'semantic-ui-react'
import './Notification.css';
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */

export const POSITIONS = [
  'top left',
  'top right',
  'bottom right',
  'bottom left',
  'right center',
  'left center',
  'top center',
  'bottom center',
]

export default class Notification extends React.Component {
  static propTypes = {
    /** should return true or false. should accept {username:string,password:string} as params */
    baz: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    popUpPosition: PropTypes.oneOf(POSITIONS) ,
    notifications: PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired,
      header:PropTypes.string.isRequired,
      description:PropTypes.string.isRequired,
      logo:PropTypes.string
    })).isRequired,
    onNotifClick: PropTypes.func
  };
  static defaultProps = {
    popUpPosition: 'bottom right',
    notifications: []
  };
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password:''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNotifClick = this.handleNotifClick.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handleNotifClick(notification) {
    this.props.onNotifClick(notification);
  }

  render() {
    let self = this;

    return (
      <Popup
        trigger={ <Icon link name='alarm' />}
        flowing
        hoverable
        on='click'
        position={this.props.popUpPosition}>
          <Grid centered divided columns={1}>
            {this.props.notifications.map(function(notification, i){
                return <Grid.Column 
                        key={notification.id} 
                        className={"Notif "+(i>0?"hr":"")}
                        onClick={()=>{self.handleNotifClick(notification)}}>
                        <Header as='h4'>{notification.header}</Header>
                        <p>{notification.description}</p>
                       </Grid.Column>;
            })}
          </Grid>
      </Popup>
		);
  }
}