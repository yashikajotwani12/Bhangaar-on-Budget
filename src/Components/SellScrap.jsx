import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { userContext } from '../App'
import "../style.css"


function Scrap({ data, price, addprice, removeprice }) {
    return (
        <div className="scrap">
            <button onClick={() => removeprice(price)}>-</button>
            <p>{data}</p>
            <button onClick={() => addprice(price)}>+</button>
        </div>
    )
}

function SellScrap() {    
    const history = useHistory()
    const {userdetails}=useContext(userContext)
    const srcapdetails = [
        {
            data: "Newspaper- 12/kg",
            price: 12
        },
        {
            data: "Cartoons - 14/kg",
            price: 14
        },
        {
            data: "Magazines and copies - 6/kg",
            price: 13
        },
        {
            data: "Plastic (soft) - 4/kg",
            price: 4
        },
        {
            data: "Plastic Hard  - 1/kg",
            price: 13
        },
        {
            data: "Tetrapack - 2/kg",
            price: 13
        },
        {
            data: "Metal Iron - 20/kg",
            price: 20
        },
        {
            data: "Oil tin - 3 per piece",
            price: 3
        },
        {
            data: "Steel - 25/kg",
            price: 25
        },
        {
            data: "Cables - 25-30/kg",
            price: 25
        },
        {
            data: "Old furnitures - 60 / piece",
            price: 60
        },
        {
            data: "Electric items Fan - 100 / piece",
            price: 100
        },
        {
            data: "Fridge - (300-500)/Piece",
            price: 300
        },
        {
            data: "Washing machine - (300-500)/Piece",
            price: 300
        }
    ]
    const addprice = (value) =>{
        setgrand(grand+value);
    }
    const removeprice = (value) => {
        setgrand(grand - value < 0 ? 0 : grand - value);
    }
    const [url,seturl]=useState('');
    const [grand, setgrand] = useState(0);
    const [location,setlocation] = useState('');
    const [phone,setphone]=useState();
    const [date,setdate]=useState('')


    const submit=async(e)=>{
        e.preventDefault();
        if(grand === 0){
            alert('Price should not be 0');
            return;
        }
        else if(url==='' || location==='' || phone===null || date===''){
            alert('Empty Inputs');
            return;
        }

        const sell_item = await axios.post('/sellscrap',{url,total:grand,location,phone,date,email: userdetails.email});
        if(sell_item.status === 201){
            alert('Thankyou, your order is in the Queue!');
            history.push('/');
        }
    }
    return (
        <div className="wrapper">
            <div className="main-form">
                <div className="input-field">
                    <h3>Srcap Photo URL</h3>
                    <input type="text" value={url} onChange={e=>seturl(e.target.value)} />
                </div>
                <div className="input-field">
                    <h3>Scrap Price</h3>
                    <div className="scrap-buttons">
                        {
                            srcapdetails.map((item) => (
                                <Scrap data={item.data} price={item.price} addprice={addprice} removeprice={removeprice} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h3>Grand Total: {grand} Rs</h3>
                </div>
                <div className="input-field">
                    <h3>Your Location</h3>
                    <input type="text" value={location} onChange={e=>setlocation(e.target.value)} />
                </div>
                <div className="input-field">
                    <h3>Phone Number</h3>
                    <input type="text" value={phone} onChange={e=>setphone(e.target.value)} />
                </div>
                <div className="input-field">
                    <h3>Date to Pick</h3>
                    <input type="date" required="true" value={date} onChange={e=>setdate(e.target.value)} />
                </div>
                
                <button className="primary-button" onClick={submit} >Confirm</button>
            </div>
        </div>

    )
}

export default SellScrap
