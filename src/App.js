import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/Homepage';
import SellScrap from './Components/SellScrap';
import { HashRouter as Router, Route, Link, Switch, useHistory, Redirect } from 'react-router-dom';
import DonateScrap from './Components/DonateScrap';
import Userprofile from './Components/UserProfile';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <div className="main-container" style={{paddingTop:'5rem'}} >
            <Route exact path="/" component={Homepage} />
            <Route exact path="/sell-scrap" component={SellScrap} />
            <Route exact path = '/donate-scrap' component={DonateScrap}/>
            <Route exact path = '/profile' component={Userprofile} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
