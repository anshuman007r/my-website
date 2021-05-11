import React, { Component } from 'react'
import Image1 from '../assets/image_1.jpg'
export default class AboutUs extends Component {
    render() {
        return (
            <div id='AboutUs'className="container-fluid mb-5 h-100">
                <div className="text-center display-3 mt-5">
                    <span>About us</span>
                    <hr style={{ height : '0.5px', backgroundColor :'#c3c3c3'}} className="w-50 align-items-center"/>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-6 col-12 mt-5">
                        <img src={Image1} className="img-fluid mb-5"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 text-center display-5 mt-5">
                        <h1>What is Lorem Ipsum?</h1>
                        <hr style={{ height : '0.5px', backgroundColor :'#c3c3c3'}} className="w-50 align-items-center"/>
                        <p className="pt-3 text-dark font-weight-bold">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. 
                        </p>
                        <button className="btn btn-5 bg-primary text-white">What is Lorem Ipsum?</button>
                    </div>
                </div>
                
            </div>
        )
    }
}
