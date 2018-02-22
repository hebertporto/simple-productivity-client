import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import { autoRehydrate, persistStore } from 'redux-persist'
import { localStorage } from 'redux-persist/storages'

import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './../redux/'

const middleware = [thunk, multi]

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middleware), autoRehydrate())
)

export default store

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const middleware = [thunk, multi]

// export default function configureStore () {
//   return new Promise((resolve, reject) => {
//     try {
//       const store = createStore(
//         rootReducer,
//         undefined,
//         composeWithDevTools(
//           autoRehydrate(),
//           applyMiddleware(...middleware)
//         )
//       )

//       persistStore(
//         store,
//         { storage: localStorage },
//         () => resolve(store)
//       )
//     } catch (e) {
//       reject(e)
//     }
//   })
// }
