import React, { Component } from 'react'
import Image1 from '../assets/image_1.jpg'
import Image2 from '../assets/image_2.jpg'
import Image3 from '../assets/image_3.jpg'
import Image4 from '../assets/image_4.jpg'
import Image5 from '../assets/image_5.jpg'
import Image6 from '../assets/image_6.jpg'
import {Carousel} from 'react-bootstrap';

export default class Carousl extends Component {
    render() {
        return (
                <Carousel id="Home" className="h-100" c>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src={Image1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src={Image2}
                        alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src={Image3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src={Image4}
                        alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src={Image5}
                        alt="Fivth slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src={Image6}
                        alt="Sixth slide"
                        />
                    </Carousel.Item>
                </Carousel>
        )
    }
}
