import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/index';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
//import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  return (
    <Router>
      <>
        <CssBaseline />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/resume' component={Resume} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
