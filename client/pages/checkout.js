import Layout from '../components/layout'
import { withRouter } from 'next/router'
import { Elements } from 'react-stripe-elements-universal'
import CheckoutForm from '../components/checkoutForm'
import fetch from 'isomorphic-unfetch';

const Checkout = withRouter(({ product, productId}) => (
  <Layout
    title={`Checkout | VendorLink`}
  >
    <section>
      <h1>Checkout</h1>
      <p><strong>Title:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
    </section>
    <Elements>
      <CheckoutForm
        subTotal={product.price}
        productNames={new Array(product.name)}
      />
    </Elements>
  </Layout>
));

Checkout.getInitialProps = async function(context) {
  // id is the name of the query parameter
  let { id } = context.query;
  // console.log(id)
  
  const res = await fetch(`${process.env.API_URL}/api/v1/products/${id}`);
  const product = await res.json();

  return {
    product,
    productId: id
  }
};

export default Checkout