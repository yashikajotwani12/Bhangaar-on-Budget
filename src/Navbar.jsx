import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation,useHistory } from "react-router-dom"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { userContext } from './App';

function Navbar() {
    const history = useHistory();
    const {userexist,setuserexist}=useContext(userContext);
    const location = useLocation();
    const logout = ()=>{
        setuserexist(false);
        localStorage.setItem('userexist',"false");
        history.push('/')
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Bhangaar on Budget</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={`nav-link ${location.pathname === '/sell-scrap' ? 'active' : ''}`} to="sell-scrap">Sell Scrap</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={`nav-link ${location.pathname === '/donate-scrap' ? 'active' : ''}`} to="donate-scrap">Donate Scrap</Link>
                        </li>
                    </ul>
                    <div>
                        {
                            userexist?
                            <div style={{display:'flex'}} >
                            <Link class={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`} to="profile" style={{color: 'white'}}> <AccountCircleIcon /> My Profile</Link>
                            <button className="secondary-button-two" onClick={logout}>Logout</button>
                            </div>
                            : 
                            <div style={{display:'flex'}} >
                            <Link class={`nav-link ${location.pathname === '/login' ? 'active' : ''}`} to="login" style={{color: 'white'}}> Login</Link>
                            
                            <Link class={`nav-link ${location.pathname === '/register' ? 'active' : ''}`} to="register" style={{color: 'white'}}> Register</Link>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
