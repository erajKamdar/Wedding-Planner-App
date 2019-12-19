import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email: '',
      subject: '',
      message: ''
    };
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handleSubjectChange = (event) => {
    this.setState({subject: event.target.value});
  }

  handleMessageChange = (event) => {
    this.setState({message: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, subject, message } = this.state
    alert(`Your state values: \n 
            name: ${name} \n 
            email: ${email}\n
            subject: ${subject}\n
            message: ${message}
            `)
  }

  render() {
    return (
      <div className='designForm'>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input name="name" className="form-control" id="name" placeholder="Enter name" value={this.state.name} onChange={this.handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input name="email" className="form-control" id="email" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="subject"></label>
          <input name="subject" className="form-control" id="subject" placeholder="Enter subject" value={this.state.subject} onChange={this.handleSubjectChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message"></label>
          <input name="message" className="form-control messControl" id="message" placeholder="Enter Message" value={this.state.message} onChange={this.handleMessageChange} />
        </div>
        <div className='setSubmitBtn'>
        <button type="submit" className="btn btn-success btn-block">Submit</button>
        </div> 
      </form>
      </div>
    );
  }
}

export default Form;