import Link from 'next/link'

export default props => (
  <section>
    <h1>Register</h1>
    <Link href={`/register?type=customer`}>
      <a>Register as a Customer</a>
    </Link>
    <br/>
    <br/>
    <Link href={`/register?type=vendor`}>
      <a>Apply to become a Vendor</a>
    </Link>
    <br/>
    <br/>
    <p>Already have an account? <Link href={`/`}><a>Log In</a></Link></p>
  </section>
)