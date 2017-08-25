import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Container } from 'semantic-ui-react'
import PrProfileMenu from './../pr-profile-menu/PrProfileMenu';
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class PrHeader extends React.Component {
  static propTypes = {
    /** Description of prop "foo". */
    company: PropTypes.shape({
      id:PropTypes.string.isRequired,
      name:PropTypes.string
    }).isRequired,
    user: PropTypes.shape({
      id:PropTypes.string.isRequired,
      name:PropTypes.string
    }),
    accountMS:PropTypes.shape({
      Url:PropTypes.string.isRequired,
      Cookie:PropTypes.string
    }).isRequired,
    companyMS:PropTypes.shape({
      Url:PropTypes.string.isRequired,
      Cookie:PropTypes.string
    }).isRequired,
    userMS:PropTypes.shape({
      Url:PropTypes.string.isRequired,
      Cookie:PropTypes.string
    }).isRequired,
    onUserDetailsFetched:PropTypes.func
  };
  static defaultProps = {
    foo: 42,
  };

  constructor(props){
    super(props);
    this.onUserDetailsFetched = this.onUserDetailsFetched.bind(this);
  }

  componentWillMount() {
    // let self = this;
    // fetch(this.props.authMS.Url+'/getloggedinuserdetails', {
    //   method: "GET",
    //   headers: {
    //     'Cookie': this.props.authMS.Cookie
    //   },
    //   credentials: 'include' 
    // })
    // .then((response) => response.json())
    // .then(responseJSON => {
    //     console.log('auth')//TRACE
    //     console.log(responseJSON)//TRACE
    //     self.onUserDetailsFetched(responseJSON);
    // })
    // .catch(error => { console.log('request failed '+error); });
  }

  onUserDetailsFetched(userDetails){
    if(this.props.onUserDetailsFetched){
      this.props.onUserDetailsFetched(userDetails);
    }

  }

  render() {
    return (
			<div>
        <div className="Header">
            <Menu pointing size='huge' color='black' inverted>
              <Container> 
                <Menu.Item header>PY Procurement</Menu.Item>
                <Menu.Menu position='right'>
                  <PrProfileMenu companyName={this.props.company.name}>Push Me</PrProfileMenu>
                </Menu.Menu>
              </Container>
            </Menu>
        </div>
      </div>
		);
  }
}