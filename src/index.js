import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';


const store = createStore(rootReducer);

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
//store.dispatch(rootReducer);


//store.subscribe(() => {
//	console.log("state updates");
//	console.log(store.getState());
//});


store.subscribe(() => {
	console.log("state updates");
	console.log(store.getState());
});

ReactDOM.render(
	<BrowserRouter>

	<Provider store={ store}>

		<App />
		</Provider>
	</BrowserRouter>
		,
  rootElement);

registerServiceWorker();

