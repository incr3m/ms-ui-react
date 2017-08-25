import {searchPost, selectSearchPost} from './search'
import {showMyPosts} from './myposts';

export const PostList = (state = {query:"", results:[], opps:[]}, action) => {
  
  switch (action.type) {
    case 'SEARCH_POST':
      return searchPost(state, action);
    case 'SELECT_SEARCH_RESULT':
      return selectSearchPost(state, action);
    case 'SHOW_MY_POSTS':
      return showMyPosts(state, action);
    default:
      return state
  }
}
