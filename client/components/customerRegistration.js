import { Component } from 'react'
import Router from 'next/router';
import fetch from 'isomorphic-unfetch'

class CustomerRegistration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch(`${process.env.API_URL}/api/v1/auth/user/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password
      }),
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      /**
       * @todo instead of passing token as a query param, store cookie on user
       */
      Router.push("/dashboard");
    })
    .catch(
      /**
       * @todo implement button state like checkoutForm component
       */
      error => console.error('An error occured, not redirecting the user', error)
    );

    return;
  }

  render () {
    return (
      <>
        <section className="modal">
          <h2>Customer Registration</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name:
              <br/>
              <input 
                type="text" 
                name="first_name" 
                value={this.state.first_name} 
                onChange={this.handleChange} 
                required
              />
            </label>
            <br/>
            <br/>
            <label>
              Last Name:
              <br/>
              <input 
                type="text" 
                name="last_name" 
                value={this.state.last_name} 
                onChange={this.handleChange} 
                required
              />
            </label>
            <br/>
            <br/>
            <label>
              Email:
              <br/>
              <input 
                type="email" 
                name="email" 
                value={this.state.email} 
                onChange={this.handleChange} 
                required
              />
            </label>
            <br/>
            <br/>
            <label>
              Password:
              <br/>
              <input 
                type="password" 
                name="password" 
                value={this.state.password} 
                onChange={this.handleChange} 
                required
              />
            </label>
            <br/>
            <br/>
            <p style={{color: "#2085c4"}}>@todo add password confirmation</p>
            <p style={{color: "#2085c4"}}>@todo CORS for Firefox: Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://localhost:3001/api/v1/auth/user/create. (Reason: missing token ‘content-type’ in CORS header ‘Access-Control-Allow-Headers’ from CORS preflight channel).</p>
            <input type="submit" className="btn" value="Coming Soon" />
          </form>
        </section>

        <style jsx>{`
          .modal {
            border: 1px solid #2085c4;
            border-radius: 5px;
            padding: 1rem;
            margin: 0 1em 1em 1em;
            text-align: left;
          }

          input {
            border: 1px solid lightgrey;
          }

          .btn {
            padding: 10px;
            background-color: #0071c3;
            border-radius: 5px;
            text-decoration: none;
            color: white;
            border: none;
          }
        `}</style>
      </>
    )
  }
}

export default CustomerRegistration