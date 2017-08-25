import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Label, Item, Segment } from 'semantic-ui-react';
import CompanyItem from './../../../components/views/company-item/CompanyItem';
import './PrCompanyMenu.css'


/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class PrCompanyMenu extends React.Component {
  static POST_MENU = 'posts';
  static SUPPLIER_MENU = 'suppliers';
  static propTypes = {
    /** Description of prop "foo". */
    company: PropTypes.shape({
      id:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      description:PropTypes.string.isRequired,
      logo:PropTypes.string
    }),
    /** Description of prop "baz". */
    baz: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    activeMenu: PropTypes.oneOf(['posts','suppliers']),
    /** args = [key, clickedMenuItem]. */
    onMenuClicked: PropTypes.func
  };
  static defaultProps = {
    foo: 42,
  };

  componentWillMount() {
    if(this.props.activeMenu)
      this.setState({activeItem:this.props.activeMenu})
    
  }

  componentDidMount() {
    if(this.props.company){
      console.log('MOUNTED');
      this.setState({company:this.props.company})
    }
    else{
      
    }
  }
  state = { 
            activeItem: 'posts' ,
            menus : {
              posts:{
                label:"Posts",
                count:1
              },
              suppliers:{
                label:"Suppliers",
                count:0
              }
            }
          }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    if(this.props.onMenuClicked)
      this.props.onMenuClicked(name,this.state.menus[name]);
  }
  
  render() {
    let self = this;
    const { activeItem, menus, company } = this.state 

    if(!company)
      return (<div>Loading...</div>)
      
    let menuItems = [];
    Object.keys(menus).forEach((key) => {
      let menuItem = menus[key];
      menuItems.push(<Menu.Item 
                name={key} 
                key={key}
                active={activeItem === key} 
                onClick={self.handleItemClick} >
                <span className="menuItemLabel">{menuItem.label}</span>
                {(menuItem.count>0)?<Label>{menuItem.count}</Label>:""}
              </Menu.Item>);
    });
    return (
      <div className="PrCompanyMenu">
        <Segment>
          <Item.Group>
            <CompanyItem key={company.id} company={company} ></CompanyItem>
          </Item.Group>
        </Segment>
        <Menu pointing secondary>{menuItems}</Menu>
      </div>
    );

    
  }
}