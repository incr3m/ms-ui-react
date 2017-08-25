import React from 'react';
import PropTypes from 'prop-types';
import { Label, Icon } from 'semantic-ui-react'
import './SupplierCard.css';
import CompanyCard from './../company-card/CompanyCard';
import _ from 'lodash';
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class SupplierCard extends React.Component {
  static propTypes = {
    /** Description of prop "foo". */
    supplier: PropTypes.shape({
      id:PropTypes.string.isRequired,
      company: PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        logo:PropTypes.string
      }).isRequired,
      industry:PropTypes.string.isRequired
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
    this.cleanedProps = _.omit(props, ['supplier']);
  }


  render() {
    
    return (
        <CompanyCard 
          company={this.props.supplier.company} 
          {...this.cleanedProps}
        >
          <Label><Icon name='industry' />{this.props.supplier.industry}</Label>
          {this.props.children}
        </CompanyCard>
		);
  }
}