import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from "react-router-dom"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Navbar() {
    const location = useLocation();
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
                        <Link class={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`} to="profile" style={{color: 'white'}}> <AccountCircleIcon /> My Profile</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
