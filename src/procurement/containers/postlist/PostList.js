import { connect } from 'react-redux'
import {searchPost, selectSearchResult} from './actions'
import PrPostList from '../../components/pr-postlist/PrPostList'

const mapStateToProps = state => {
  console.log('state')//TRACE
  console.log(state)//TRACE
  return {
    opps: state.PostList.opps,
    query: state.PostList.query,
    results: state.PostList.results //search result
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: query => {
      console.log('searching... '+query);
      let action = searchPost(query);
      console.log('action');
      console.log(action);
      dispatch(action);
    },
    onSearchResultSelect: selectedResult => {
      dispatch(selectSearchResult(selectedResult));
    }
  }
}

const PostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PrPostList)

export default PostList