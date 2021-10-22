import React from 'react'

function DonateScrap() {
    return (
        <div className="wrapper">
            <div className="main-form">
                <div className="input-field">
                    <h3>Srcap Photo URL</h3>
                    <input type="text" />
                </div>
                <div className="input-field">
                    <h3>Donate to (NGO Name):</h3>
                    <input type="text" />
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
                
                <button className="primary-button">Donate</button>
            </div>
        </div>

    )
}

export default DonateScrap
