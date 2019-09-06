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
        <p><strong>Hourly Rate:</strong> ${vendor.rate.toFixed(2)}</p>
        <Link href={`/custom-quote?vendor=${vendor.name}`}>
          <a>Contact {vendor.name} for hire!</a>
        </Link>
      </div>
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