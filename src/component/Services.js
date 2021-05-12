import React, { Component } from 'react'
import WebDeveloper from '../assets/web_developer.jpg'
import { Modal, Button } from 'react-bootstrap'

export default class Services extends Component {
    state={
        show : false
    }
    render() {
        return (
            <div id="Service" className="container mt-5 mb-5">
                <div className="text-center display-3">
                    <span>Services</span>
                    <hr style={{ height : '0.5px', backgroundColor :'#c3c3c3'}} className="w-50 align-items-center"/>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src={WebDeveloper} alt="first_card"/>
                            <div className="card-body">
                                <h4 className="card-title">Web Developer</h4>
                                <p className="card-text text-dark font-weight-bold">Become a web developer in 5 easy steps using boot strap. BootStrap is a framework.</p>
                                <button onClick={()=>this.setState({show : true})} className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">                
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src={WebDeveloper} alt="Second_card"/>
                            <div className="card-body">
                                <h4 className="card-title">Web Developer</h4>
                                <p className="card-text text-dark font-weight-bold">Become a web developer in 5 easy steps using boot strap. BootStrap is a framework.</p>
                                <button onClick={()=>this.setState({show : true})} className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">                
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src={WebDeveloper} alt="Third_card"/>
                            <div className="card-body">
                                <h4 className="card-title">Web Developer</h4>
                                <p className="card-text text-dark font-weight-bold">Become a web developer in 5 easy steps using boot strap. BootStrap is a framework.</p>
                                <button onClick={()=>this.setState({show : true})} className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                    <Modal show={this.state.show}>
                        <Modal.Header closeButton onClick={()=>this.setState({show: false})}>
                        <Modal.Title>Register for course</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <form className="font-weight-bold">
                            <div class="form-group row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="text" readonly class="form-control" id="staticEmail" placeholder="email"/>
                                </div>
                            </div>
                            <div class="form-group row ">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign up</button>
                        </form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={()=>this.setState({show: false})}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>  
        )
    }
}
