import Router, { withRouter } from 'next/router'
import Layout from '../components/layout'

export default withRouter(props => {

  async function handleSubmit(e) {
    e.preventDefault();
    let form = document.querySelector('form').elements;
    console.log("Name: ", form['requester_name'].value);
    console.log("Website: ", form['company_url'].value);
    console.log("Email: ", form['requester_email'].value);
    console.log("Category: ", form['task_category'].value);
    console.log("Description: ", form['description'].value);
    console.log("Attachments: ", form['attachment'].value);

    /**
     * @todo add AJAX success message after submission
     * @todo add axios call to server to send form body info
     */

    Router.push('/quote-submitted')
  }
  
  return (
    <Layout
      title={`Submit a free quote | VendorList`}
    >
      <section className="container">
        <h1>Custom Quote {(() => { if (props.router.query.vendor) return `for ${props.router.query.vendor}`; })(props)}</h1>

        <form onSubmit={handleSubmit} id="rfq">
          <p>
            <label>Your Name<sup>*</sup></label><br/>
            <input type="text" name="requester_name" required/>
          </p>
          <p>
            <label>Your Website URL<sup>*</sup></label><br/>
            <input type="text" name="company_url" required/>
          </p>
          <p>
            <label>Your Email<sup>*</sup></label><br/>
            <input type="email" name="requester_email" required />
          </p>
          <p>
            <label>Task Category<sup>*</sup></label><br/>
            {/** @todo add the ability to change form input fields based on task category with defaultValue: https://reactjs.org/docs/forms.html#the-select-tag */}
            <select form="rfq" name="task_category" required>
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="marketing">Marketing</option>
              <option value="other">Other</option>
            </select>
          </p>
          <p>
            <label>Describe your Request<sup>*</sup></label><br/>
            <textarea form="rfq" name="description" id="description" cols="30" rows="6" required></textarea>
          </p>
          <p>
            <label>Attachments</label><br />
            <input type="file" name="attachment" id="attachment" multiple/>
          </p>
          <p>
            <label>
              <input type="checkbox" value="terms" required/>
              &nbsp;I agree to the <a href="/terms">terms and conditions</a><sup>*</sup>
            </label>
          </p>
          <p>
            <button type="submit">Submit</button>
            <button type="reset">Reset form</button>
          </p>
          <small>Required fields are marked with <sup>*</sup></small>
        </form>
      </section>

      <style jsx>{`
        sup {
          color: red;
        }
      `}</style>
    </Layout>
  )
});