import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react'
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class PrProfileMenu extends React.Component {
  static propTypes = {
    /** Description of prop "foo". */
    companyName: PropTypes.string.isRequired,
    /** Description of prop "baz". */
    baz: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
  };
  static defaultProps = {
    foo: 42,
  };

  render() {
    return (
        <Dropdown item text={this.props.companyName}>
          <Dropdown.Menu>
            <Dropdown.Item>View Profile</Dropdown.Item>
            <Dropdown.Item>Account Settings</Dropdown.Item>
            <hr/>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
		);
  }
}