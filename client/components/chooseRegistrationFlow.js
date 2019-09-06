import Link from 'next/link'
import CustomerRegistration from './customerRegistration'

export default props => (
  <>
    <section>
      <div className="choose">
        <h1>Register</h1>
        <div className="customer">
          <CustomerRegistration/>
        </div>
        <div className="or"><span className="line">or</span></div>
        <div className="vendor">
          <Link href={`/register?type=vendor`}>
            <a className="btn">Apply to become a Vendor</a>
          </Link>
        </div>
        <p>Already have an account? <Link href={`/`}><a>Log In</a></Link></p>
      </div>
    </section>

    <style jsx>{`
      .choose {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 60%;
        margin: 0 auto;
        text-align: center;
      }

      .choose h1 {
        margin-bottom: 2rem;
        align-self: left;
      }

      .or {
        width: 35%; 
        text-align: center; 
        border-bottom: 1px solid lightgrey; 
        color: lightgrey;
        line-height: 0.1em;
        margin: 2em; 
        text-transform: uppercase;
      }

      @media only screen and (max-width: 480px) {
        .or {
          width: 75%;
        }
      }

      .or .line {
        background:#fff; 
        padding:0 10px;
      }

      .vendor {
        margin-top: 1em;
        margin-bottom: 1em;
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