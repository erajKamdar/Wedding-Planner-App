import React, { Component } from 'react' 
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    state= {
        isOpen: false,
    }
    handleToogle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
        return (    
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header"> 
                        <Link to="/" className='logo'>
                            Belle Weddings & Events
                        </Link>
                        <button
                           type="button"
                           className="nav-btn"
                           onClick={this.handleToogle}
                        >
                             <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul 
                        className={this.state.isOpen ? "nav-links show-nav":"nav-links "}
                    >  
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/">SignOut</Link>
                        </li>

                    </ul>
                </div>
            </nav>   
        )
    };
};
