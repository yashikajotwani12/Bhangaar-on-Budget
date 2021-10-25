import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import { Link } from "react-router-dom"

function Homepage() {
    return (
        <div>
            <div className="landing-page">
                <div className="left">
                    <h1 className="heading">Bhangaar on Budget</h1>
                    <p className="para">
                        Don't know what to do with the pile of garbage? <br />
                        <b><i>Sell or Donate</i></b> us in <b><i>Bhangaar on Budget</i></b> and get exciting and reasonable refunds.
                        Reach out to numerous NGOs. <br />
                        Get your garbage recycled and reused! <br />
                        <i>Save the environment, help the mankind!</i>
                    </p>
                    <div className="buttons">
                        <a className="primary-button">Sell your Scrap</a>
                        <a className="secondary-button">Donate your Scrap</a>
                    </div>
                </div>
                <div className="right">
                    <img src="https://treact.owaiskhan.me/static/media/MainLandingPageHero.30b38078.png" style={{ width: '30rem' }} alt="" />
                </div>
            </div>
            <center><h1 className="sub-heading" id="about">About Us</h1></center>
            <div className="landing-page about">
                <div className="right" style={{ display: 'flex', flexWrap: 'wrap', borderRadius: '10px', overflow: 'hidden' }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQBx08Oy1GidPOecE4bN5E_dlKMqVWAP3BA&usqp=CAU" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzQzgicrCxm9WpkeKCduzB6_wnk0GLdGDyOQ&usqp=CAU" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8zR_-qrWjxdmdZ313ZDO-ifBpye4QcTIbkg&usqp=CAU" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAjUjTPWpP1kPXdJdC_oblX0Gzhiez7EGlQ&usqp=CAU" alt="" />
                </div>
                <div className="left">
                    <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur provident inventore nam, dolorem fuga quasi repellat excepturi eum. Rerum, ratione! Nihil quis a, sed doloribus perspiciatis doloremque rerum quas molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eaque. Fugit, quam beatae possimus illum saepe dolorem dolorum perferendis explicabo sunt doloribus architecto quisquam id ipsa. Suscipit animi voluptas ad!</div>
                </div>
            </div>
            <div className="section services" style={{ height: '100vh' }}>

                <center><h1 className="sub-heading" id="services">Our Services</h1></center>
                <p className="para" style={{ width: '70%' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolorem id amet similique vero deleniti eum cum nesciunt possimus quod odit. Dignissimos praesentium laboriosam soluta ipsum quas dolor impedit aliquid.</p>
                <div className="card-wrapper">
                    <div className="service-card">
                        <img src="https://www.thekabadiwala.com/images/landing/hand.svg" alt="" />
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia voluptatum quas ex praesentium minima cumque, nisi eos sunt perferendis perspiciatis dolor accusamus maiores natus fugiat aspernatur similique omnis dolore.</p>
                    </div>
                    <div className="service-card">
                        <img src="https://www.thekabadiwala.com/images/landing/rupee-arrow.svg" alt="" />
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia voluptatum quas ex praesentium minima cumque, nisi eos sunt perferendis perspiciatis dolor accusamus maiores natus fugiat aspernatur similique omnis dolore.</p>
                    </div>
                    <div className="service-card">
                        <img src="https://www.thekabadiwala.com/images/landing/weight-machine.svg" alt="" />
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia voluptatum quas ex praesentium minima cumque, nisi eos sunt perferendis perspiciatis dolor accusamus maiores natus fugiat aspernatur similique omnis dolore.</p>
                    </div>
                </div>
            </div>
            <div className="section about">
                <center><h1 className="sub-heading" id="sell-donate">Sell/Donate your Srap</h1></center>
                <p className="para" style={{ width: '70%' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolorem id amet similique vero deleniti eum cum nesciunt possimus quod odit. Dignissimos praesentium laboriosam soluta ipsum quas dolor impedit aliquid.</p>
                <div className="services-step-container" style={{ display: 'flex', margin: '2rem 0' }}>
                    <div className="sell-scarp-steps">
                        <h1 className="sub-heading" style={{ fontSize: '2rem' }}>Sell your Scrap</h1>
                        <div className="center-line"></div>
                        <div className="step-card">
                            <img src="https://www.thekabadiwala.com/images/landing/step-1.svg" alt="" />
                            <h1 className="card-h">1. Select Scrap You want to Sell.</h1>
                        </div>
                        <span className="line"></span>
                        <div className="step-card">
                            <img src="https://www.thekabadiwala.com/images/landing/step-2.svg" alt="" />
                            <h1 className="card-h">2. Choose the Date to pick up the scrap.</h1>
                        </div>
                        <div className="step-card">
                            <img src="https://www.thekabadiwala.com/images/landing/step-3.svg" alt="" />
                            <h1 className="card-h">3. "Kabadiwala" will arrive at your Door-step.</h1>
                        </div>
                    </div>
                    <div className="sell-scarp-steps">
                        <h1 className="sub-heading" style={{ fontSize: '2rem' }}>Donate your Scrap</h1>
                        <div className="center-line"></div>
                        <div className="step-card">
                            <img src="https://www.thekabadiwala.com/images/landing/step-1.svg" alt="" />
                            <h1 className="card-h">1. Select Scrap You want to Donate.</h1>
                        </div>
                        <span className="line"></span>
                        <div className="step-card">
                            <img src="https://www.thekabadiwala.com/images/landing/step-2.svg" alt="" />
                            <h1 className="card-h">2. Choose the Date to pick up the scrap.</h1>
                        </div>
                        <div className="step-card">
                            <img src="https://www.thekabadiwala.com/images/landing/step-3.svg" alt="" />
                            <h1 className="card-h">3. NGO team worker will arrive at your Door-step.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="page-footer font-small blue">
                <div class="footer-copyright text-center py-3">© 2021 Copyright:
                    <a href="/"> BhangaarOnBudget.com</a>
                </div>
            </footer>
        </div>
    )
}

export default Homepage
