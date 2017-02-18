import React from 'react';
import ReactDOM from 'react-dom';
import Cycles from './components/Cycles/index';

import { browserHistory, Router, Route } from 'react-router';
import { Provider } from 'react-redux'; 
import store from './arcss/store';

import './arcss/reset.css';
import './arcss/pure/pure-min.css';
/*
import './arcss/pure/base-min.css'; 
import './arcss/pure/grids-min.css';
import './arcss/pure/grids-units-min.css'; 
*/
import './arcss/pure/grids-responsive-min.css';
import './arcss/ReactTags.css';


ReactDOM.render(
	  <Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/cycles" component={Cycles}/>
		</Router>
	  </Provider>,
	document.getElementById('root')
);
