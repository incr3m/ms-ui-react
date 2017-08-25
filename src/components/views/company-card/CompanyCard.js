import React from 'react';
import PropTypes from 'prop-types';
import { Image, Card } from 'semantic-ui-react'
import './CompanyCard.css';
import _ from 'lodash';
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class CompanyCard extends React.Component {
  static propTypes = {
    /** Description of prop "foo". */
    company: PropTypes.shape({
      id:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      location:PropTypes.string.isRequired,
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
        <Card {...this.cleanedProps} >
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.company.logo} />
            <Card.Header>
              {this.props.company.name}
            </Card.Header>
            <Card.Meta>
              {this.props.company.location}
            </Card.Meta>
            <Card.Description>
              {this.props.company.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            {this.props.children}
          </Card.Content>
        </Card>
		);
  }
}