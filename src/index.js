import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'

import history from './config/historyRouter'

// import configureStore from './config/store'
import store from './config/store'
import App from './modules/App'

persistStore(store, {
  whitelist: [
    ''
  ]
}, () => {
  render((
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  ), document.getElementById('root'))
})

// async function init () {
//   const store = await configureStore()
//   return persistStore(store, {
//     whitelist: [
//       'team',
//       'user'
//     ]
//   }, () => {
//     render((
//       <Provider store={store}>
//         <Router history={history}>
//           <App />
//         </Router>
//       </Provider>
//     ), document.getElementById('root'))
//   }).purge()
// }

// init()
