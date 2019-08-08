import { Component } from 'react'
import Link from 'next/link'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false }
    this.hamburgerToggle = this.hamburgerToggle.bind(this)
  }

  hamburgerToggle () {
    this.setState({active: !this.state.active})
    document.querySelector(".overlay").classList.toggle("show")
  }

  resetNav () { 
    this.setState({active: false}); 
    document.querySelector(".overlay").classList.remove("show")
  }
  
  render () {
    return (
      <nav>
        <div className="logo">
          <Link href="/">
            {/** 
              * @todo this.resetNav throws an error message when called: "this.setState is not a function" 
              * Error video: https://drive.google.com/open?id=1W1owz8ss4SNp1ycyXcJcDj0GTYKMtFTQ
              */}
            <a 
              onClick={this.resetNav} 
              className="logo-link"
            >
              <img src="/static/logo.svg" alt="Logo" width="30px"/>
              <p>VendorList</p>
            </a>
          </Link>
        </div>
        <div className="links">
          <Link href="/our-process">
            <a>Our Process</a>
          </Link>
          <Link href="/rfq">
            <a>Free RFQ</a>
          </Link>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </div>

        <div className="overlay">
          <Link href="/our-process">
            <a>Our Process</a>
          </Link>
          <Link href="/rfq">
            <a>Free RFQ</a>
          </Link>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </div>

        <button 
          type="button"
          className={`hamburger hamburger--slider-r ${this.state.active && 'is-active'}`} 
          onClick={this.hamburgerToggle}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
  
        <style jsx>{`
          @media only screen and (min-width: 480px) {
            .hamburger {
              display: none;
            }

            .overlay {
              display: none;
            }
          }

          @media only screen and (max-width: 480px) {
            .links {
              display: none;
            }

            .overlay {
              display: none;
            }
          }

          .show {
            display: flex;
          }

          .overlay {
            position: absolute;
            flex-direction: column;
            background-color: white;
            height: 100vh;
            width: 100vw;
            top: 0;
            bottom: 0;
            left: 0;
            padding-top: 35%;
            font-size: 1.5rem;
            text-align: center;
            z-index: 9;
          }

          .overlay a {
            margin-bottom: 10%;
          }

          .hamburger {
            z-index: 25;
            padding: 0;
          }

          .hamburger-box {
            width: 30px;
          }

          .hamburger-inner, 
          .hamburger-inner:after, 
          .hamburger-inner:before {
            width: 30px;
            height: 3px;
            background-color: #1C262E;
          }

          .hamburger.is-active:hover, 
          .hamburger:hover {
            opacity: .9;
          }
          
          nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px 20px;
          }

          .logo {
            z-index: 25;
          }
  
          .logo-link {
            display: flex;
            align-items: center;
            text-decoration: none;
          }
  
          .logo-link > p {
            color: #1C262E;
            font-weight: 700;
            font-size: 1.35rem;
            font-family: "Hind Vadodara", sans-serif;
            margin-left: 0.35rem;
            margin-top: 0;
            margin-bottom: 0;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
          }
  
          .links a {
            padding: 0;
            margin-left: 0.75em;
          }
        `}</style>
      </nav>
    )
  }
}

export default Nav