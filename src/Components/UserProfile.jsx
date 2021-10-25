import React, { useContext, useEffect, useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { userContext } from "../App"
import axios from 'axios';

function UserProfile() {
    const { userdetails } = useContext(userContext);
    const [sell, setsell] = useState([]);
    const [donate, setdonate] = useState([]);
    const fetchSell = async () => {
        const sell_data = await axios.get(`/sold_scrap/${userdetails.email}`);
        const data = sell_data.data
        setsell(data.result);
    }
    const fetchDonate = async () => {
        const donate_data = await axios.get(`/donated_scrap/${userdetails.email}`);
        const data = donate_data.data;
        setdonate(data.result);
    }

    useEffect(() => {
        fetchSell();
        fetchDonate();
    },[])
    return (
        <div className="user-wrapper">
            <div className="profile-card" style={{ display: 'flex', alignItem: 'center', }}>
                <AccountCircleIcon />
                <div className="div">
                    <h3>{userdetails.name}'s Recent Transactions</h3>
                </div>
            </div>
            <div className="transactions">
                {
                    (donate.length === 0 && sell.length === 0)?(
                        <h1><center>No Transaction's</center></h1>
                    ):{}
                }
                {
                    donate.map((item)=>(
                        <div className="transaction Donate">Donated on {item.date} to {item.donate_to}</div>
                    ))
                }
                {
                    sell.map((item) => (
                        <div className={`transaction Sell ${item.status === 'Confirm' ? 'Confirm':'Pending'}`}>Order Placed on {item.date} <span>{item.status}</span></div>
                    ))
                }
            </div>
        </div>
    )
}

export default UserProfile
