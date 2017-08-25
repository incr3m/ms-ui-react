export const searchPost = query => {
  return {
    type: 'SEARCH_POST',
    query
  }
}

export const selectSearchResult = result => {
  return {
    type: 'SELECT_SEARCH_RESULT',
    result
  }
}

export const showMyPosts = () => {
  return {
    type: 'SHOW_MY_POSTS'
  }
}

