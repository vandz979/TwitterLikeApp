import React,{Component} from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navigation from "./components/Navigation/NavigationItems/NavigationItems";
import MainPage from "./containers/MainPage/MainPage";
import Search from "./containers/SearchPage/SearchPage";
import {library} from "@fortawesome/fontawesome-svg-core";
import { faHome, faSearch, faTree, faPaw, faHeart, faCoffee} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faSearch, faTree, faPaw, faHeart, faCoffee);

class App extends Component {
  render() {
    
    let routes = (
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/" exact component={MainPage} />
        <Redirect to="/" />
      </Switch>
    );

    return(
      <div className="App">
      <Navigation />
      {routes}
    </div>
    )
  }
}

export default App;
