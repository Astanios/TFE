import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { 
  Route,
  IndexRoute,
  Redirect
} from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import MainContainer from "./containers/mainContainer";
import AboutContainer from "./containers/aboutContainer";
import Header from "./containers/header";

const history = createHistory()
const store = require("./store/configureStore").configure();

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
          <div>
            <Header />
            <Route exact path="/" component={MainContainer}/>
            <Route path="/about" component={AboutContainer}/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
};

export default App;