import React from 'react';
import PropTypes from 'prop-types';
import { Segment, 
        Search, 
        Dropdown, 
        Button, 
        Card, 
        Icon,
        Popup } from 'semantic-ui-react'
import './PrSupplierList.css'
import SupplierCard from './../../../components/views/supplier-card/SupplierCard';
import CompanyCard from './../../../components/views/company-card/CompanyCard';
import PrSupplierInviteModal from './../pr-supplier-invite-modal/PrSupplierInviteModal'

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class PrSupplierList extends React.Component {
  static propTypes = {
    /** Description of prop "foo". */
    foo: PropTypes.number,
    /** Description of prop "baz". */
    baz: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    supplierMS:PropTypes.shape({
      Url:PropTypes.string.isRequired,
      Cookie:PropTypes.string
    }), 
    suppliers:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired,
      company: PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        logo:PropTypes.string
      }).isRequired,
      industry:PropTypes.string.isRequired
    }).isRequired).isRequired,
  };
  static defaultProps = {
    foo: 42,
    suppliers: []
  };

  componentWillMount() {
    this.resetSearchComponent()
  }
  state = {mySupplierSelected:true};

  resetSearchComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    this.setState({
      isLoading: false,
      results: [
        {
          "title": "Gulgowski - Schneider",
          "description": "Synergistic bandwidth-monitored moratorium",
          "image": "https://s3.amazonaws.com/uifaces/faces/twitter/manekenthe/128.jpg",
          "price": "$83.59"
        },
        {
          "title": "Cassin Group",
          "description": "Reactive systematic attitude",
          "image": "https://s3.amazonaws.com/uifaces/faces/twitter/jesseddy/128.jpg",
          "price": "$26.22"
        }
      ],
    })
  }

  

  createMySupplierCard(supplier){
    return (
            <SupplierCard key={supplier.id} supplier={supplier}>
              <Popup
                trigger={<Button color='red' size='mini' icon floated='right'>
                    <Icon name='delete' />
                  </Button>}
                content='Remove'
              />
            </SupplierCard>
    )
  }
  createPublicCompanyCard(company){
    return (
            <CompanyCard company={company} >
              <Button primary fluid content='Send Supplier Request' icon='send' labelPosition='left'/>
            </CompanyCard>
    )
  }

  render() {
    let self = this;
    const { isLoading, value, results, mySupplierSelected } = this.state
    let friendOptions = [
      {
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        image: { avatar: true, src: 'https://react.semantic-ui.com/assets/images/avatar/small/stevie.jpg' },
      }
    ]
    return (
			<div className="PrPost">
        <Segment>
          <div className="ui grid">
            <div className="four wide column">
              <Search
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.handleSearchChange}
                results={results}
                value={value}
              />
            </div>
            <div className="three wide column sorter">
              <span>
                Sort by
                {' '}
                <Dropdown inline options={friendOptions} defaultValue={friendOptions[0].value} />
              </span>
            </div>
            <div className="seven wide column">
              <Button 
                attached='left' 
                primary={(mySupplierSelected)?true:false} 
                onClick={()=>{this.setState({mySupplierSelected:true})}}
                >My Suppliers</Button>
              <Button 
                attached='right' 
                primary={(mySupplierSelected)?false:true}
                onClick={()=>{this.setState({mySupplierSelected:false})}}
                >Public Companies</Button>
            </div>
            <div className="two wide column">
              <PrSupplierInviteModal onClose={()=>{}} trigger={<Button primary content='Invite' icon='add' labelPosition='left' floated='right' />}>
              </PrSupplierInviteModal>
              
            </div>
          </div>
        </Segment>
        <Segment>
           <Card.Group>
            {this.props.suppliers.map(function(supplier, i){
                //should request fetch
                return ((mySupplierSelected)?self.createMySupplierCard(supplier):self.createPublicCompanyCard(supplier.company));
            })}
          </Card.Group>
        </Segment>
      </div>
		);
  }
}