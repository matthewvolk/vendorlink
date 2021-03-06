import Link from "next/link";
import CustomerRegistration from "./customerRegistration";

export default props => (
  <>
    <section>
      <div className="choose">
        <h1>Register</h1>
        <div className="customer">
          <CustomerRegistration />
        </div>
        <div className="or">
          <span className="line">or</span>
        </div>
        <div className="vendor">
          <Link href={`/register?type=vendor`}>
            <a className="btn">Apply to become a Vendor</a>
          </Link>
        </div>
        <p>
          Already have an account?{" "}
          <Link href={`/`}>
            <a>Log In</a>
          </Link>
        </p>
      </div>
    </section>

    <style jsx>{`
      .choose {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 60rem;
        margin: 0 auto;
        text-align: center;
      }

      @media only screen and (max-width: 480px) {
        .choose {
          max-width: 100%;
        }
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
        margin: 1.5em 2em 2.125em;
        text-transform: uppercase;
      }

      @media only screen and (max-width: 480px) {
        .or {
          width: 75%;
        }
      }

      .or .line {
        background: #fff;
        padding: 0 10px;
      }

      .vendor {
        margin-top: 1em;
        margin-bottom: 1em;
      }

      .btn {
        padding: 10px 30px;
        background-color: rgb(39, 103, 168);
        border-radius: 5px;
        text-decoration: none;
        color: white;
        font-weight: 600;
        font-size: 1.0625rem;
        border-bottom: 3px solid rgba(0, 0, 0, 0.3);
      }

      .btn:hover {
        background-color: rgba(39, 103, 168, 0.9);
      }

      .btn:active {
        background-color: rgb(31, 85, 140);
      }
    `}</style>
  </>
);
