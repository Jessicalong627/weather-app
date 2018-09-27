import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './css/home.css';
import './css/city.css';
import './css/login.css';
import Login from './components/Login';
import App from './components/App';
import City from './components/City';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render((
  <Router>
    <React.Fragment>
       <Route exact path="/" component={Login} />
       <Route exact path="/weather" component={App} />
       <Route exact path="/city" component={City} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);

registerServiceWorker();


/*   Responsibility
    1. hold 3 routes home, weather for main page and city for individual show page
    */