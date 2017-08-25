import React from 'react';
import PropTypes from 'prop-types';
import { Item, Label } from 'semantic-ui-react'
import './OppItem.css';
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class OppItem extends React.Component {
  static propTypes = {
    /** Description of prop "foo". */
    opp: PropTypes.shape({
      id:PropTypes.string.isRequired,
      title:PropTypes.string.isRequired,
      description:PropTypes.string.isRequired,
      logo:PropTypes.string,
      postedDate:PropTypes.string.isRequired,
      endDate:PropTypes.string.isRequired,
      location:PropTypes.string,
      budget:PropTypes.number.isRequired
    }).isRequired,
    /** Description of prop "baz". */
    baz: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
  };
  static defaultProps = {
    foo: 42,
  };
  dateOptions = {  
    weekday: "long", year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit"  
  } 

  render() {
    return (
      <Item className="OppItem">
        <Item.Content className="ui grid">
          <div className="ten wide computer sixteen wide mobile column">
            <Item.Group>
              <Item>
                <Item.Image size="small" src={this.props.opp.logo || "https://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                <Item.Content>
                  <Item.Header as='a'>{this.props.opp.title}</Item.Header>
                  <Item.Meta>
                    <span className='cinema'>Budget:{' '}<b>{this.props.opp.budget}</b></span>
                  </Item.Meta>
                  <Item.Description>{this.props.opp.description} </Item.Description>
                  <Item.Extra>
                    <Label>Posted on{' '}{new Date(this.props.opp.postedDate).toLocaleDateString("en-US",this.dateOptions)}</Label>
                    <Label icon='globe' content={this.props.opp.location} />
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </div>
          <div className="six wide computer sixteen wide mobile column">
            {this.props.children}
          </div>
        </Item.Content>
      </Item>
		);
  }
}