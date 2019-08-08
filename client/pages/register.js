import { withRouter } from 'next/router'
import Layout from '../components/layout'
import ChooseRegistrationFlow from '../components/chooseRegistrationFlow'
import CustomerRegistration from '../components/customerRegistration'
import VendorApplication from '../components/vendorApplication'

export default withRouter(props => {

  switch (props.router.query.type) {
    case "customer":
      return (
        <Layout title={`Register as a Customer | VendorList`}>
          <div className="container">
            <CustomerRegistration/>
          </div>
        </Layout>
      )
    case "vendor":
      return (
        <Layout title={`Apply as a Vendor| VendorList`}>
          <div className="container">
            <VendorApplication/>
          </div>
        </Layout>
      )
    default:
      return (
        <Layout title={`Register | VendorList`}>
          <div className="container">
            <ChooseRegistrationFlow/>
          </div>
        </Layout>
      )
  }
});