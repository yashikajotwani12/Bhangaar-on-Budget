import React, { useContext } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {userContext} from "../App"

function UserProfile() {
    const {userdetails} = useContext(userContext);
    return (
        <div className="user-wrapper">
            <div className="profile-card" style={{display: 'flex', alignItem:'center', }}>
                <AccountCircleIcon />
                <div className="div">
                    <h3>{userdetails.name}'s Recent Transactions</h3>
                </div>
            </div>
            <div className="transactions">
                <div className="transaction Donate">Donate on 12-oct-2021 NGO Name</div>
                <div className="transaction Sell Confirm">Sell on 12-oct-2021 <span>Confirm</span></div>
                <div className="transaction Sell Pending">Sell on 25-oct-2021 <span>Pending</span></div>
            </div>
        </div>
    )
}

export default UserProfile
