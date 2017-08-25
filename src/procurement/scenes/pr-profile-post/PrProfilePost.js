import React from 'react';
import PropTypes from 'prop-types';
import PrProfile from '../../components/pr-profile/PrProfile'
import PostList from '../../containers/postlist/PostList'
import {showMyPosts} from '../../containers/postlist/actions'
import { connect } from 'react-redux'
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class PrProfilePost extends React.Component {
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

  componentDidMount(){
    this.props.dispatch(showMyPosts());
  }

  render() {
    return (
			<PrProfile>
        <PostList/>
      </PrProfile>
		);
  }
}

PrProfilePost = connect()(PrProfilePost);

export default PrProfilePost