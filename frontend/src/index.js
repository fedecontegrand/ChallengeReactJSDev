import 'babel-polyfill'
import 'react-app-polyfill/ie11'

import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import View from './views/View'
import { ContextProvider } from './Context/Context'

import './index.css'

const App = () => {
	return (
		<ContextProvider>
			<View />
		</ContextProvider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
