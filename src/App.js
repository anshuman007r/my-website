import React, { Component } from 'react'
import Header from './component/Header'
import Carousel from './component/Carousel'
import AboutUs from './component/AboutUs'
import Gallery from './component/Gallery'
import Services from './component/Services'
import ContactUs from './component/ContactUs'
import Footer from './component/footer'
export default class App extends Component {
  render() {
    return (
      < div >
          <Header/>
          <Carousel/>
          <AboutUs/>
          <Services/>
          <Gallery/>
          <ContactUs/>
          <Footer/>
      </div>
    )
  }
}
