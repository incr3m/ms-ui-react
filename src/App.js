// import logo from './logo.svg';
import './App.css';
import PrProfilePost from './procurement/scenes/pr-profile-post/PrProfilePost';
import reducers from './procurement/scenes/pr-profile-post/reducers'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'


let store = createStore(reducers)

render(
  <Provider store={store}>
    <PrProfilePost />
  </Provider>,
  document.getElementById('root')
)
