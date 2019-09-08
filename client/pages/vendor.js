import Layout from '../components/layout'
import { withRouter } from 'next/router'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Vendor = withRouter(({ vendor, vendorId }) => {

  return (
    <Layout
      title={`${vendor.name} | VendorLink`}
      /** @todo add meta description based on vendor description of the Vendor offered */
    >
      <div className="container">
        <h1>{vendor.name}</h1>
        <h2>Quick Facts:</h2>
        <div className="quick-facts">
          <p><strong>Hourly Rate:</strong> ${vendor.rate.toFixed(2)}</p>
          <p><strong>Time Zone:</strong> PST</p>
          <p><strong>Working Hours:</strong> 8:00 AM PST - 5:00 PM PST</p>
        </div>
      </div>

      <div className="container">
        <h2 style={{margin: "0"}}>Previous Work:</h2>
      </div>
      <div className="gallery">
        <div className="container">
          <div className="image-flex">
            <img src="https://cdn.dribbble.com/users/4859/screenshots/7049291/media/3c5e9fb0b74517cf84afadbe1af24ae3.png" alt="previous work example" />
            <img src="https://cdn.dribbble.com/users/952958/screenshots/5567327/modern_2x.png" alt="previous work example" />
            <img src="https://cdn.dribbble.com/users/952958/screenshots/4828084/cart.png" alt="previous work example" />
            <img src="https://cdn.dribbble.com/users/235909/screenshots/5833556/dribbble_2x.png" alt="previous work example" />
            <img src="https://cdn.dribbble.com/users/1875714/screenshots/5621548/dribbble_2x.png" alt="previous work example" />
          </div>
        </div>
      </div>

      <div className="container" style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
        <Link href={`/custom-quote?vendor=${vendor.name}`}>
          <a className="btn">Contact {vendor.name}</a>
        </Link>
      </div>

      <style jsx>{`
        .quick-facts {
          background-color: #f1f1f1;
          padding: 1rem;
          border-radius: 7px;
          max-width: 25rem;
        }

        img {
          width: 50%;
          margin-right: 1rem;
          border-radius: 5px;
        }

        @media only screen and (max-width: 480px) {
          img {
            width: 75%;
          }
        }

        .gallery {
          background-color: #f1f1f1;
          margin-bottom: 2rem;
          box-sizing: border-box;
          width: 100%;
          overflow: scroll;
        }

        ::-webkit-scrollbar { 
          display: none; 
        }

        .image-flex {
          display: flex;
        }

        .quick-facts p {
          margin: 0.25rem;
        }

        .btn {
          padding: 15px;
          background-color: rgb(39,103,168);
          border-radius: 5px;
          -webkit-text-decoration: none;
          text-decoration: none;
          color: white;
          font-weight: 600;
          font-size: 0.925rem;
          border-bottom: 3px solid rgba(0,0,0,0.3);
          min-width: 100%;
          box-sizing: border-box;
        }

        .btn:hover {
          background-color: rgba(39, 103, 168, 0.9);
        }

        .btn:active {
          background-color: rgb(31, 85, 140);
        }
      `}</style>
    </Layout>
  )
});

Vendor.getInitialProps = async function(context) {
  let { id } = context.query;
  const res = await fetch(`${process.env.API_URL}/api/v1/vendors/${id}`);
  const vendor = await res.json();

  return {
    vendor,
    vendorId: id
  }
};

export default Vendor;