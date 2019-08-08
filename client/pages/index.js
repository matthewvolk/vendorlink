import Link from 'next/link'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch';

const Index = ({ vendors }) => ( 
  <Layout
    title={`Hire Better Freelancers | VendorList`}
    description={`Low commitment, ad-hoc jobs assigned to expert designers, developers, and marketers with payment held in escrow until work is delivered.`}
  >
    <section>

      <div style={{borderBottom: "1px solid #EAECEF"}}>
        <div className="container">
          <h1 className="hero-text" style={{marginBottom: "0", marginTop: "0.5rem"}}>Hire Better Freelancers.</h1>
          <p className="tagline">Meet &amp; hire amazing talent from our invite-only community of elite web developers, designers, and marketers.</p>
          <Link href={`/our-process`}>
            <a>What makes us different?</a>
          </Link>
        </div>
        <div style={{marginTop: "1.75rem", borderTop: "1px solid #EAECEF"}}>
          <div className="container" style={{color: "rgb(124, 124, 124)", fontWeight: "600", fontSize: "0.9rem"}}>
            SORT: <a href="/" style={{fontWeight: "400", marginLeft: "1rem", fontSize: "1rem"}}>Category</a>
          </div>
        </div>
      </div>

      <div className="background">
        <div className="container" style={{maxWidth: "1120px"}}>
          {/* <p style={{color: "red"}}>@todo Add sort bar</p> */}
          <ul>
            {vendors.map(vendor => (
              <li key={vendor.slug}>
                <Link as={`/vendor/${vendor.slug}`} href={`/vendor?id=${vendor.slug}`}>
                  <h3>{vendor.name}</h3>
                </Link>
                  <p className="card-detail">Hourly Rate: ${vendor.rate.toFixed(2)}/hr</p> 
                  <a href="/">Share</a> <a href="/">Save</a> <a href="/">Hide</a> <a href="/">Report</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </section>

  <style jsx>{`
    .background {
      background-color: #D5DBE2;
      padding-top: 0.9rem;
      padding-bottom: 0.9rem;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      padding: 1rem;
      border-top: 1px solid #C5C5C5;
      border-right: 1px solid #C5C5C5;
      border-left: 1px solid #C5C5C5;
      background-color: #FDFDFE;
    }

    .hero-text {
      font-weight: 600;
    }

    h3 {
      cursor: pointer;
      margin: 0;
      font-weight: 600;
    }

    .tagline {
      font-weight: 300;
    }

    .card-detail {
      font-size: 0.9rem;
      margin-bottom: 1rem;
      margin-top: 0.35rem;
      color: rgb(124, 124, 124);
    }
  `}</style>

  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch(`${process.env.API_URL}/api/v1/vendors`);
  const data = await res.json();
  
  return {
    vendors: data.vendors
  };
};

export default Index