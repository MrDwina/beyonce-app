import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import './ContactFormControler.css'
class ContactFormControler extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Put your full name',
            email: 'Put your name',
            message: 'Leave your message'
        }
        this.handleChange = this.handleChange;
        this.handleSubmit = this.handleSubmit;
    }

    // handleChange(event) { 
    //     this.setState({
    //         name: event.target.value,
    //         email: event.target.value,
    //         message: event.target.value
    //     });
    // }

    // handleSubmit(event) {
    //     // alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }

    render() {
        return (
            <div className="contact-section">
            <div className="container">
                <h3>To contact us just put your details here and send them to us we wil replay as soon as possible</h3>
                <div className="row jumbotron">
                    <div className="col-lg-8 col-lg-offset-2" >
                        <form>
                            <div className="row">
                                <div className="col-lg-6 form-group">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <label>Name:</label>
                                        </div>
                                        <div className="col-lg-10">
                                                <input className="form-control" onChange={e => this.setState({ name: e.target.value })} type="text" value={this.state.name} placeholder={this.state.name} />
                                        </div>
                                    </div>                                                                                                         
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <label>Email:</label>
                                        </div>
                                        <div className="col-lg-10">
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