import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import './ContactFormControler.css'
class ContactFormControler extends Component {

    constructor() {
        super();
        this.state = {
            name: 'Put your full name',
            email: 'Put your name',
            message: 'Leave your message'
        }
    }

    render() {
        return (
            <div className="contact-section">
            <div className="container">
                <h3>To contact us just put your details here and send them to us we wil replay as soon as possible</h3>
                <div className="row jumbotron">
                    <div className="col-lg-8 col-lg-offset-2" >
                            <form>
                            <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 form-group">
                                    <div className="row">
                                            <div className="col-lg-2 col-md-2 col-sm-2">
                                            <label>Name:</label>
                                        </div>
                                            <div className="col-lg-10 col-md-10 col-sm-10">
                                                <input className="form-control" onChange={e => this.setState({ name: e.target.value })} type="text" value={this.state.name} placeholder={this.state.name} />
                                        </div>
                                    </div>                                                                                                         
                                </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 form-group">
                                    <div className="row">
                                            <div className="col-lg-2 col-md-2 col-sm-2">
                                            <label>Email:</label>
                                        </div>
                                            <div className="col-lg-10 col-md-10 col-sm-10">
                                                <input className="form-control" onChange={e => this.setState({ email: e.target.value })} type="email" value={this.state.email} placeholder={this.state.email} />
                                        </div>
                                    </div>                                                              
                                </div>                          
                                <div className="row">
                                    <div className="col-lg-12">
                                            <textarea rows="10" className="form-control" onChange={e => this.setState({ message: e.target.value })} type="text" value={this.state.message} placeholder={this.state.message} ></textarea><br />
                                        <button className="btn btn-info form-button" type="submit">Send</button>    
                                    </div>
                                </div>                 
                            </div>    
                        </form>
                    </div >
                </div>
                </div>
        </div>
        );
    }
}

export default ContactFormControler;