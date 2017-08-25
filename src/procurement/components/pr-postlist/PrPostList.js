import React from 'react';
import PropTypes from 'prop-types';
import { Segment, 
        Search, 
        Dropdown, 
        Button, 
        Item, 
        Header, 
        Icon,
        Label } from 'semantic-ui-react'
import './PrPostList.css'
import OppItem from './../../../components/views/opp-item/OppItem';
import moment from 'moment';
// import OppService from '../../services/opps';
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class PrPostList extends React.Component {
  static propTypes = {
    /** Description of prop "foo". */
    foo: PropTypes.number,
    /** Description of prop "baz". */
    baz: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    query: PropTypes.string,
    // accountMS:PropTypes.shape({
    //   Url:PropTypes.string.isRequired,
    //   Cookie:PropTypes.string
    // }).isRequired, 
    onSearch:PropTypes.func,
    onSearchResultSelect:PropTypes.func,
    results:PropTypes.arrayOf(PropTypes.shape({
      title:PropTypes.string,
      description:PropTypes.string,
      price:PropTypes.string
    })),
    onCompareQuotation:PropTypes.func,
    config:PropTypes.shape({
    }), 
    opps: PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired,
      title:PropTypes.string.isRequired,
      description:PropTypes.string.isRequired,
      logo:PropTypes.string,
      postedDate:PropTypes.string.isRequired,
      endDate:PropTypes.string.isRequired,
      location:PropTypes.string,
      budget:PropTypes.number.isRequired
    }).isRequired),
  };

  static defaultProps = {
    foo: 42,
    opps: []
  };

  componentWillMount() {
    // let self = this;
    this.resetSearchComponent()
    if(this.props.query)
      this.handleSearchChange(undefined,{ value:this.props.query });
    
    // if(this.props.results){
    //   console.log('this.props.results')//TRACE
    //   console.log(this.props.results)//TRACE
    //   this.setState({
    //     isLoading: false,
    //     results: this.props.results
    //   });
    // }
    // OppService.getOppsByAccount('5963213eb6cd8d5e85a604b0',10,'5963213eb6cd8d5e85a604b0','',0)
    // .then(opps=>{
    //   self.setState({opps});
    // });
    // fetch(endpoint+'/getaccountopportunities?accountId=5963213eb6cd8d5e85a604b0&limit=10&loggedInUserAccountId=5963213eb6cd8d5e85a604b0&queryObj=%7B%22categories%22:%5B%5D%7D&skip=0', {
  }

  state = {
    opps:[]
  };

  resetSearchComponent = () => this.setState({ isLoading: false })

  handleResultSelect = (e, { result }) => {
    this.setState({ isLoading: false })
    if(this.props.onSearchResultSelect)
      this.props.onSearchResultSelect(result);
  }

  
  handleSearchChange = (e, { value }) => {
    let query = value;
    this.setState({ isLoading: true })

    if(this.props.onSearch)
      this.props.onSearch(query);

    // this.setState({
    //   isLoading: false,
    //   results: [
    //     {
    //       "title": "Gulgowski - Schneider",
    //       "description": "Synergistic bandwidth-monitored moratorium",
    //       "image": "https://s3.amazonaws.com/uifaces/faces/twitter/manekenthe/128.jpg",
    //       "price": "$83.59"
    //     },
    //     {
    //       "title": "Cassin Group",
    //       "description": "Reactive systematic attitude",
    //       "image": "https://s3.amazonaws.com/uifaces/faces/twitter/jesseddy/128.jpg",
    //       "price": "$26.22"
    //     }
    //   ],
    // })
  }

  createOppItem(opp){
    var countDownTill = new Date(opp.endDate);

    let days = Math.abs(moment(countDownTill).diff(moment(), 'days'));
    let seconds = moment(countDownTill).diff(moment().add(days,'days'), 'seconds');
    let timeLeft = moment("1900-01-01 00:00:00").add(seconds, 'seconds');
    let timeLeftStr = timeLeft.hour()+'hr '+timeLeft.minutes()+'min';

    return (<OppItem key={opp.id} opp={opp}>
      <Header as='h2' size='tiny' textAlign='right' floated='right'>
        <Icon name='hourglass end' />
        <Header.Content>
          {days} days<Label>{timeLeftStr}</Label>
          <Header.Subheader>
            Time left to quote
          </Header.Subheader>
        </Header.Content>
      </Header>
      <Header as='h2' size='tiny' textAlign='right' floated='right'>
        <Icon name='quote right' />
        <Header.Content>
          <Header.Subheader>
            Quotations Received
            <Label circular color='blue'>
              {opp.quoteCount}
            </Label>
          </Header.Subheader>
        </Header.Content>
      </Header>
      <Button secondary size='tiny' floated='right'>Compare Quotations</Button>
    </OppItem>);
  }

  render() {
    let self = this;
    const { isLoading } = this.state
    const { results, query, opps } = this.props;
    
    let friendOptions = [
      {
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        image: { avatar: true, src: 'https://react.semantic-ui.com/assets/images/avatar/small/stevie.jpg' },
      }
    ]

    return (
			<div className="PrPostList">
        <Segment>
          <div className="ui stackable four column grid">
            <div className="column">
              <Search
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.handleSearchChange}
                results={results}
                value={query}
              />
            </div>
            <div className="column sorter">
              <span>
                Sort by
                {' '}
                <Dropdown inline options={friendOptions} defaultValue={friendOptions[0].value} />
              </span>
            </div>
            <div className="column">

            </div>
            <div className="column">
              <Button floated='right' primary>Create Opportunity</Button>
            </div>
          </div>
        </Segment>
        <Segment>
          <Item.Group divided>
            {opps.map(function(opp, i){
                return self.createOppItem(opp);
            })}
          </Item.Group>
        </Segment>
      </div>
		);
  }
}