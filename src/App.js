import Home from './Home/Home';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './NoMatch/NoMatch';
import CountryDetails from './CountryDetails/CountryDetails';

function App() {
  
  return (
    <div>
      
      <Router>
        <Switch>
            <Route path="/home">
               <Home></Home>
            </Route>
            <Route path="/country/:countryName"> 
              <CountryDetails></CountryDetails>

            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
