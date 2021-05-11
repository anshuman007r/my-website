import React, { Component } from 'react'
export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <a className="navbar-brand" href="#">My Website</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="#Home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="#AboutUs">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="#Service">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="#gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contact">Contact us</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}