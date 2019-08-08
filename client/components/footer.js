import Link from 'next/link'

const Footer = () => (
  <footer>
    <div className="container">
      <div>
        <p>&copy; {new Date().getFullYear()}, VendorList</p>
      </div>
      <div className="links">
        <Link href="/terms">
          <a>Terms and Conditions</a>
        </Link>
        &nbsp;
        &nbsp;
        <Link href="/privacy">
          <a>Privacy Policy</a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      @media only screen and (max-width: 480px) {
        .container {
          flex-direction: column;
        }
      }

      footer {
        background-color: #FDFDFE;
      }

      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px 20px;
      }

      p {
        font-size: 0.8rem;
        color: gray;
      }

      .links a {
        color: gray;
        padding: 0;
        font-size: 0.8rem;
      }
    `}</style>
  </footer>
)

export default Footer