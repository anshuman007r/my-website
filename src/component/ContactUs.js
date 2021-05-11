import React, { Component } from 'react'

export default class ContactUs extends Component {
    render() {
        return (
            <div id="Contact" className="container font-weight-bold ui-sans-serif">
                <div className="text-center display-3 mb-5">
                    <span>Contact Us</span>
                    <hr style={{ height : '0.5px', backgroundColor :'#c3c3c3'}} className="w-50 align-items-center"/>
                </div>
                <form action="/action_page.php" className="w-50 mx-auto">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="name" class="form-control" id="name" placeholder="Enter Name" name="name"/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                    </div>
                    <div class="form-group">
                        <label for="mobile">Mobile no:</label>
                        <input type="number" class="form-control" id="" placeholder="Enter Mobile No" name="mobile"/>
                    </div>
                    <div class="form-group">
                        <label for="description">description:</label>
                        <textarea type="text" class="form-control" id="description" placeholder="Enter Your Description" name="description"/>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" name="remember"/> Remember me</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
