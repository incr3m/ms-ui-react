import React from 'react';
import PropTypes from 'prop-types';
import PrProfile from '../../components/pr-profile/PrProfile'
import PrSupplierList from '../../components/pr-supplierlist/PrSupplierList'
import PrCompanyMenu from './../../components/pr-company-menu/PrCompanyMenu';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class PrProfileSupplier extends React.Component {
  static propTypes = {
    /** Description of prop "foo". */
    foo: PropTypes.number,
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
    var supps = [ {
        id:'suppId',
        company:{
            id:'test',
            name:'Wong', 
            location:'Quezon City',       
            description:'Lorem ipsum cheuqkwa churva',
            logo:"https://react.semantic-ui.com/assets/images/wireframe/square-image.png"
        },
        industry:'Agriculture'
    }]
    return (
			<PrProfile selectedCompanyMenu={PrCompanyMenu.SUPPLIER_MENU}>
        <PrSupplierList suppliers={supps}/>
      </PrProfile>
		);
  }
}