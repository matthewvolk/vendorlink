import Layout from "../components/layout";

export default props => (
  <Layout title={`Custom Quote Submitted! | VendorLink`}>
    <section className="container">
      <h1>Thank you for your successful purchase!</h1>
      {/** @todo add order number? */}
      <p>But nothing happened :(</p>
      <p>
        We are still working on this functionality. Eventually, you will be able
        to checkout and trigger a sequence of events that will put you in touch
        with a vendor, collect requirements specific to your project, and start
        the project on time, within budget, and with your best interest in mind!
      </p>
    </section>
  </Layout>
);
