import React, { Component } from 'react'
import Image1 from '../assets/image_1.jpg'
import Image2 from '../assets/image_2.jpg'
import Image3 from '../assets/image_3.jpg'
import Image4 from '../assets/image_4.jpg'
import Image5 from '../assets/image_5.jpg'
import Image6 from '../assets/image_6.jpg'

export default class Gallery extends Component {

    handleData(){
        alert('Hello')
    }
    


    render() {
        return (
            <div className="container-fluid mt-5 mb-5" id="gallery">
                <div className="text-center display-3">
                    <span>Gallery</span>
                    <hr style={{ height : '0.5px', backgroundColor :'#c3c3c3'}} className="w-50 align-items-center"/>
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-4 col-12">
                            <img src={Image1} className="img-fluid mb-5" alt="image1"/>
                            <img src={Image2} className="img-fluid mb-5" alt="image2"/>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">                
                            <img src={Image3} className="img-fluid mb-5" alt="image3"/>
                            <img src={Image4} className="img-fluid mb-5" alt="image4"/>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">                
                            <img src={Image5} className="img-fluid mb-5" alt="image5"/>
                            <img src={Image6} className="img-fluid mb-5" alt="image6"/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
