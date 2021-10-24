import React, { useState } from 'react'
import "../style.css"


function Scrap({data, price, addprice, removeprice}) {
    return(
        <div className="scrap">
            <button onClick={()=>removeprice(price)}>-</button>
            <p>{data}</p>
            <button onClick={()=>addprice(price)}>+</button>
        </div>
    )
}

function SellScrap() {    
    const srcapdetails = [
        {
            data: "Newspaper- 13/kg",
            price: 13
        },
        {
            data: "Bottle- 5/kg",
            price: 5
        },
        {
            data: "Newspaper- 13/kg",
            price: 13
        },
        {
            data: "Newspaper- 13/kg",
            price: 13
        },
        {
            data: "Newspaper- 13/kg",
            price: 13
        },
        {
            data: "Newspaper- 13/kg",
            price: 13
        },
        {
            data: "Newspaper- 13/kg",
            price: 13
        },
    ]
    const [grand, setgrand] = useState(0);
    const addprice = (value) =>{
        setgrand(grand+value);
    }
    const removeprice = (value) =>{
        setgrand(grand-value<0?0:grand-value);
    }
    return (
        <div className="wrapper">
            <div className="main-form">
                <div className="input-field">
                    <h3>Srcap Photo URL</h3>
                    <input type="text" />
                </div>
                <div className="input-field">
                    <h3>Scrap Price</h3>
                    <div className="scrap-buttons">
                        {
                            srcapdetails.map((item)=>(
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
                    <input type="text" />
                </div>
                <div className="input-field">
                    <h3>Phone Number</h3>
                    <input type="text" />
                </div>
                <div className="input-field">
                    <h3>Date to Pick</h3>
                    <input type="date" required="true" />
                </div>
                
                <button className="primary-button">Confirm</button>
            </div>
        </div>

    )
}

export default SellScrap
