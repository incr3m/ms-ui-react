import React from 'react';
import PropTypes from 'prop-types';
import PrHeader from './../../components/pr-header/PrHeader';
import PrCompanyMenu from './../../components/pr-company-menu/PrCompanyMenu';
import { Container, Segment } from 'semantic-ui-react'
import * as dummies from './../../../data/dummies';
import './PrProfile.css';
import Auth from './../../services/auth';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class PrProfile extends React.Component {
  static propTypes = {
    /** Description of prop "foo". */
    foo: PropTypes.number,
    /** Description of prop "baz". */
    baz: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    selectedCompanyMenu: PropTypes.oneOf(['posts','suppliers']),
    onMenuChanged:PropTypes.func
    // authMS:PropTypes.shape({
    //   Url:PropTypes.string.isRequired,
    //   Cookie:PropTypes.string
    // }).isRequired
  };
  static defaultProps = {
    foo: 42,
  };

  state = {
    selectedCompanyMenu:PrCompanyMenu.POST_MENU
  }

  componentWillMount() {
    let self = this;

    Auth.init().then(val=>{
      self.onUserDetailsFetched(val);
    })
    if(self.props.selectedCompanyMenu!==self.state.selectedCompanyMenu){
      self.setState({selectedCompanyMenu:self.props.selectedCompanyMenu});
    }
  }

  onUserDetailsFetched(responseJSON){
    this.setState({company:{
      id:responseJSON.Companies[0].CompanyId,
      name:responseJSON.CompanyName
    }})
  }

  onMenuClicked = (key) =>{
    this.setState({selectedCompanyMenu:key});
    if(this.props.onMenuChanged)
      this.props.onMenuChanged(key);
  }
  /*renderBody(selectedCompanyMenu){
    switch(selectedCompanyMenu){
      case PrCompanyMenu.SUPPLIER_MENU:
        return (<PrSupplierList/>);
      case PrCompanyMenu.POST_MENU:
        return (<PrPost  
                  accountMS={dummies.data.ms.account}
                  companyMS={dummies.data.ms.company}
                  userMS={dummies.data.ms.user}
                />);
      default:
        return;
    }
  }*/
  render() {
    let {company} = this.state;
    if(company)
      return (
        <div className="PrProfile">
          <PrHeader
            company={company}
            accountMS={dummies.data.ms.account}
            companyMS={dummies.data.ms.company}
            userMS={dummies.data.ms.user}
          />
          <Container>
            <Segment secondary>
              <PrCompanyMenu company={dummies.data.company}
                activeMenu={this.state.selectedCompanyMenu}
                onMenuClicked={this.props.onMenuClicked}/> 
                {this.props.children} 
            </Segment>
          </Container>
        </div>
      );
    
    return (<div>Loading...</div>)
  }
}
