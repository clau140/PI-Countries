import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {store} from './redux/store/store.js'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider> 
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

