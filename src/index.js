import registerServiceWorker from './registerServiceWorker';
import PrProfilePost from './procurement/scenes/pr-profile-post/PrProfilePost';
import {PrProfilePost as reducer} from './procurement/scenes/pr-profile-post/reducers'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Auth from './procurement/services/auth';
import * as dummies from './data/dummies'
Auth.init(dummies.data.ms.Cookie);

let store = createStore(reducer)

render(
  <Provider store={store}>
    <PrProfilePost />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();