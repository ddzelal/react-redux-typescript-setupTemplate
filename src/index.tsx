import React, { useState } from 'react'
import { render } from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {App} from './components/App'
import {reducers} from './reducers'
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// const rootElement = document.getElementById('root')
const store = createStore(reducers,applyMiddleware(thunk))



root.render(
  <Provider store={store}>
  <App/>
  </Provider>
  
)
