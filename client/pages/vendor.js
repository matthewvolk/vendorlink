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
        <div className="hero">
          <div className="title">
            <h1>{vendor.name}</h1>
            <p className="featured-quote" style={{color: "grey"}}>"I loved working with {vendor.name}!" - Verified Buyer</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi recusandae, obcaecati esse quia deleniti id explicabo autem sed consequatur corrupti molestias, libero aperiam illo odio tempora ipsum. Repellendus, enim cupiditate.</p>
          </div>
          <div className="quick-facts">
          <div className="vendorImageContainer">
            <img className="vendorImage" src="https://i.imgur.com/CnIhxtS.png" alt=""/>
          </div>
          <div className="fact"><strong>Hourly Rate:</strong> ${vendor.rate.toFixed(2)}</div>
          <hr/>
          <div className="fact"><strong>Time Zone:</strong> PST</div>
          <hr/>
          <div className="fact"><strong>Working Hours:</strong> 8:00 AM PST - 5:00 PM PST</div>
          <hr/>
          <div className="fact" style={{display: "flex", flexWrap: "wrap"}}><strong>Skills:</strong>&nbsp;
            {vendor.skills.map((skill, index) => (
              <span key={index}>{ (index ? ', ' : '') + skill}</span>
            ))}
          </div>
        </div>
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
        .hero {
          display: flex;
          justify-content: space-between;
          margin-top: 1em;
        }

        .hero .featured-quote {
          margin: 1em 0 2em 0;
        }

        .hero .title {
          max-width: 55%;
        }

        .hero .title h1 {
          margin-top: 0;
        }

        .vendorImageContainer {
          display: flex; 
          justify-content: space-around;
          margin-bottom: 1.5em;
        }

        .vendorImage {
          margin: 0.25em;
          width: 50%;
          border-radius: 100%;
          object-fit: cover;
          -webkit-box-shadow: 0px 0px 28px 0px rgba(128,128,128,0.15);
          -moz-box-shadow: 0px 0px 28px 0px rgba(128,128,128,0.15);
          box-shadow: 0px 0px 28px 0px rgba(128,128,128,0.15);
        }

        .quick-facts {
          background-color: #f5f5f5;
          padding: 1rem;
          padding-bottom: 1.5rem;
          border-radius: 7px;
          max-width: 22rem;
          margin: 0 0 0 1em;
          font-size: 0.9rem;
        }

        @media only screen and (max-width: 666px) {
          .hero {
            flex-direction: column;
          }

          .quick-facts {
            margin: 0;
          }
        }

        .quick-facts h2 {
          margin: 0 0 0.5em;
        }

        .quick-facts hr {
          height: 1px;
          background-color: #c5c5c5;
          border: none;
          margin: 0.75rem 0;
        }

        img {
          width: 50%;
          height: 50%;
          margin-right: 1rem;
          border-radius: 5px;
        }

        @media only screen and (max-width: 480px) {
          img {
            width: 75%;
          }
        }

        .gallery {
          background-color: #f5f5f5;
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
          background-color: rgb(26, 186, 69);
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
          background-color: rgba(26, 186, 69, 0.9);
        }

        .btn:active {
          background-color: rgb(21, 154, 57);
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