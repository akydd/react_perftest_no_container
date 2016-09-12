import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Perf from 'react-addons-perf'
import App from './app.js'
import configureStore from './configureStore.js'

const store = configureStore()

function run() {
    window.Perf = Perf

    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('test')
    )
}

window.addEventListener('DOMContentLoaded', run)
