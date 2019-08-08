import Layout from '../components/layout'

export default props => (
  <Layout
    title={`Custom Quote Submitted! | VendorList`}
  >
    <section className="container">
      <h1>Request Submitted!</h1>
      <p>But nothing happened :(</p>
      <p>
        We are still working on this functionality. Eventually, we will be able to 
        receive your quote requests and work with you to create a scope of work for 
        your request to be fulfilled by one of our expert vendors. 
      </p>
    </section>
  </Layout>
);