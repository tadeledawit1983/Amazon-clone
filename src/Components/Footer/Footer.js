import React from 'react'
import './footer.css'
import { Link, useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className="footer-wrapper">
            <div onClick={() => navigate('/login')} className="navigate"
            >Back to top</div>

            <div className="container">
                <footer className="row">
                    <div className="col-sm-4 col-md-4">
                        <h3 className="Links-title">Get to Know Us</h3>
                        <ul className="links-wrapper">
                            <Link to='/'><li>Careers</li></Link>
                            <Link to='/'><li>Blog</li></Link>
                            <Link to='/'><li>About Amazon</li></Link>
                            <Link to='/'><li>Sustainability</li></Link>
                            <Link to='/'><li>Press center</li></Link>
                            <Link to='/'><li>Invester Relation</li></Link>
                            <Link to='/'><li>Amazon Devices</li></Link>
                            <Link to='/'><li>Amazon Scince</li></Link>
                        </ul>
                    </div>ƒ
                    <div className="col-sm-4 col-md-4">
                        <h3 className="Links-title">Make Money With Us</h3>
                        <ul className="links-wrapper">
                            <Link to='/'><li>Sell Products on Amazon</li></Link>
                            <Link to='/'><li>Sell apps on Amazon</li></Link>
                            <Link to='/'><li>Became an Affiliate</li></Link>
                            <Link to='/'><li>Became a Delivery Driver</li></Link>
                            <Link to='/'><li>Start a package Delivery business </li></Link>
                            <Link to='/'><li>Advertise Your Products</li></Link>
                            <Link to='/'><li>Self-Publish With Us</li></Link>
                            <Link to='/'><li>Host an Amazon Hub</li></Link>
                            <Link to='/'><li>See More Ways to Make Money</li></Link>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-4">
                        <h3 className="Links-title">Amazon Payment Products</h3>
                        <ul className="links-wrapper">
                            <Link to='/'><li>Amazon Rewards Visa Signiture Cards</li></Link>
                            <Link to='/'><li>Amazon.com Store Card</li></Link>
                            <Link to='/'><li>Amzon Secure Card</li></Link>
                            <Link to='/'><li>Amzon Business Card</li></Link>
                            <Link to='/'><li>Amzon Business Line of Credit</li></Link>
                            <Link to='/'><li>Shop With Points</li></Link>
                            <Link to='/'><li>Credit card Marketplace</li></Link>
                            <Link to='/'><li>Reload Your Balance</li></Link>
                            <Link to='/'><li>Amazon Currency Converter</li></Link>
                        </ul>
                    </div>

                    <div className="col-sm-4 col-md-4">
                        <h3 className="Links-title">Let Us Help You</h3>
                        <ul className="links-wrapper">
                            <Link to='/'><li>Amazon and Covid-19</li></Link>
                            <Link to='/'><li>Your Account</li></Link>
                            <Link to='/'><li>Your Orders</li></Link>
                            <Link to='/'><li>Shopping rates and Policies</li></Link>
                            <Link to='/'><li>Amzon Prime</li></Link>
                            <Link to='/'><li>Returnand Replacements</li></Link>
                            <Link to='/'><li>Manage Ypur Content And Devices</li></Link>
                            <Link to='/'><li>Reload Your Balance</li></Link>
                            <Link to='/'><li>Amazon Assistant Help</li></Link>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
