import React from 'react'
import ReactDOM from 'react-dom/client'
import {createStore} from 'redux'
// Zorgt ervoor dat we naar ded store kunnen schrijven en van de store kunnen lezen
import { Provider } from 'react-redux'
import filteredGamesReducer from './reducers/filteredGamesReducer'
import App from './App/App'

// store
const store = createStore(filteredGamesReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
