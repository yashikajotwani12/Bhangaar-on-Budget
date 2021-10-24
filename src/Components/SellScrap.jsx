import React, { useState } from 'react'
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
            data: "Old furnitures (after checking condition) if working  at least Wooden chair - 60 per chair",
            price: 60
        },
        {
            data: "Electric items after checking working)  Fan - 100 per fan",
            price: 100
        },
        {
            data: "Fridge - (300-500)  per fridge",
            price: 300
        },
        {
            data: "Washing machine -   (300-500)  per machine",
            price: 20
        }
    ]
    const [grand, setgrand] = useState(0);
    const addprice = (value) => {
        setgrand(grand + value);
    }
    const removeprice = (value) => {
        setgrand(grand - value < 0 ? 0 : grand - value);
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
