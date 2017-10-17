import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import './ContactFormControler.css'
class ContactFormControler extends Component {


    state = {
        name: '',
        email: '',
        message: ''
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
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
                                                <input className="form-control" name="name" onChange={e => this.change(e)} type="text" value={this.state.name} placeholder="Full name" />
                                        </div>
                                    </div>                                                                                                         
                                </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 form-group">
                                    <div className="row">
                                            <div className="col-lg-2 col-md-2 col-sm-2">
                                            <label>Email:</label>
                                        </div>
                                            <div className="col-lg-10 col-md-10 col-sm-10">
                                                <input className="form-control" name="email" onChange={e => this.change(e)} type="email" value={this.state.email} placeholder="Your email" />
                                        </div>
                                    </div>                                                              
                                </div>                          
                                <div className="row">
                                    <div className="col-lg-12">
                                            <textarea rows="10" className="form-control" name="message" onChange={e => this.change(e)} type="text" value={this.state.message} placeholder="Leave your message here" ></textarea><br />
                                        <button onClick={e => this.onSubmit(e)} className="btn btn-info form-button" type="submit">Send</button>    
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