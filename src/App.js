import { createContext, useEffect, useState } from "react"
import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/Homepage';
import SellScrap from './Components/SellScrap';
import { HashRouter as Router, Route, Link, Switch, useHistory, Redirect } from 'react-router-dom';
import DonateScrap from './Components/DonateScrap';
import Userprofile from './Components/UserProfile';
import Login from './Components/Login';
import Register from './Components/Register';
import Products from "./Components/Products";

const userContext = createContext(null);
export { userContext }

function App() {
  const [userexist, setuserexist] = useState(false);
  const [userdetails, setuserdetails] = useState([]);
  
  useEffect(()=>{
    if(localStorage.getItem('userexist')==="true"){
      setuserexist(true)
    }
    if(localStorage.getItem('userdetails')){
      setuserdetails(JSON.parse(localStorage.getItem('userdetails')));
    }
  },[])
  
  return (
    <div>
      <Router>
        <userContext.Provider value={{ userexist, setuserexist, userdetails, setuserdetails }}>
          <Navbar />
          {userexist ?
            <Switch>
              <div className="main-container" style={{ paddingTop: '5rem', overflowX: 'hidden' }} >

                <Route exact path="/" component={Homepage} />
                <Route exact path="/sell-scrap" component={SellScrap} />
                <Route exact path='/donate-scrap' component={DonateScrap} />
                <Route exact path='/profile' component={Userprofile} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/products' component={Products} />
              </div>
            </Switch>
            :
            <Switch>
              <div className="main-container" style={{ paddingTop: '5rem', overflowX: 'hidden' }} >

                <Route exact path="/" component={Homepage} />
                <Route exact path="/sell-scrap" component={Login} />
                <Route exact path='/donate-scrap' component={Login} />
                <Route exact path='/profile' component={Login} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/products' component={Login} />
                <Route exact path='/register' component={Register} />
              </div>
            </Switch>
          }

        </userContext.Provider>
      </Router>
    </div>
  );
}

export default App;
