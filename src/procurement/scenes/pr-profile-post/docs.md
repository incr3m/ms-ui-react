

```js
const { Provider } = require('react-redux');
const { Component } = require('react');
const { createStore } = require('redux');
var profilePost = require('./reducers');
var PrProfilePost = require('./PrProfilePost').default;

let store = createStore(profilePost.PrProfilePost);

store.subscribe(() => {
  console.log(store.getState());
});

setTimeout(()=>{
  store.dispatch({
    type: 'SEARCH_POST',
    query: 'sdfdsf'
  });
  },2000);

<Provider store={store}>
    <PrProfilePost>Sample</PrProfilePost>
</Provider>
```