import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Nav from './nav'
import Home from './home'
import AboutUs from './aboutus'
import Portfolio from './portfolio'
import ContactUs from './contactus'
import Download from './download'

import logo from '../assets/logo.svg'
import '../css/App.css'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Redirect to="/homepage" />
        </Route>
        <Route path="/homepage" exact component={Home}/>
        <Route path="/about-us" exact component={AboutUs}/>
        <Route path="/portfolio" exact component={Portfolio}/>
        <Route path="/contact-us" exact component={ContactUs}/>
        <Route path="/download" exact component={Download}/>
      </Switch>
    </Router>
  );
}

export default App;
