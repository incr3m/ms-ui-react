import React from 'react';
import PropTypes from 'prop-types';
import { Image, Item } from 'semantic-ui-react'
import './CompanyItem.css';
import _ from 'lodash';
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class CompanyItem extends React.Component {
  static propTypes = {
    /** Description of prop "foo". */
    company: PropTypes.shape({
      id:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      description:PropTypes.string.isRequired,
      logo:PropTypes.string
    }).isRequired,
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
    this.cleanedProps = _.omit(props, ['company']);
  }

  render() {
    return (
        <Item className="CompanyItem"
        {...this.cleanedProps} >
          <Image src={this.props.company.logo} size='tiny' height="80px" shape='rounded' />
          <Item.Content>
            <Item.Header as='a'>{this.props.company.name}</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              {this.props.company.description}
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>
		);
  }
}