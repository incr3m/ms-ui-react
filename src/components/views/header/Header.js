import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react'
import './Header.css';
import ProfileMenu from './../profile-menu/ProfileMenu';
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class Header extends React.Component {
  static propTypes = {
    /** Description of prop "foo". */
    appName: PropTypes.string.isRequired,
    /** Description of prop "baz". */
    baz: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
  };
  static defaultProps = {
    foo: 42,
  };
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <div className="Header">
          <Menu pointing secondary>
            <Menu.Item header>{this.props.appName}</Menu.Item>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
            <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
              <ProfileMenu companyName="Wong">Push Me</ProfileMenu>
            </Menu.Menu>
          </Menu>
        </div>
      </div>
    )
  }
}