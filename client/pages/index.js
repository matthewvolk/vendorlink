import Link from 'next/link'
import Layout from '../components/layout'
import Card from '../components/card'
import fetch from 'isomorphic-unfetch';

const Index = ({ vendors }) => ( 
  <Layout
    title={`Hire Better Freelancers | VendorList`}
    description={`Low commitment, ad-hoc jobs assigned to expert designers, developers, and marketers with payment held in escrow until work is delivered.`}
  >
    <section>

      <div style={{borderBottom: "1px solid #EAECEF"}}>
        <div className="container">
          <h1 className="hero-text">Hire Better Freelancers.</h1>
          <p className="tagline">Meet &amp; hire amazing talent from our invite-only community of elite web developers, designers, and marketers.</p>
          <Link href={`/our-process`}>
            <a>What makes us different?</a>
          </Link>
        </div>
        <div style={{marginTop: "1.75rem", borderTop: "1px solid #EAECEF"}}>
          <div className="container sort-links" style={{color: "rgb(124, 124, 124)", fontWeight: "600", fontSize: "0.9rem"}}>
            SORT:
            <a href="/">All Roles</a>
            <a href="/">All Platforms</a>
            <a href="/">All Prices</a>
          </div>
        </div>
      </div>

      <div className="background">
        <div className="container-cards" style={{maxWidth: "1120px"}}>
          {/* <p style={{color: "red"}}>@todo Add sort bar</p> */}



          <ul>
            {vendors.map(vendor => (
              <li key={vendor.slug}>
                <Link as={`/vendor/${vendor.slug}`} href={`/vendor?id=${vendor.slug}`}>
                  <h3 style={{marginLeft: "6.75px"}}>{vendor.name}</h3>
                </Link>
                  <p className="card-detail" style={{marginLeft: "6.75px"}}>Hourly Rate: ${vendor.rate.toFixed(2)}/hr</p> 
                  <a className="secondary-link" href="/">Share</a> 
                  <a className="secondary-link" href="/">Save</a> 
                  <a className="secondary-link" href="/">Hide</a> 
                  <a className="secondary-link" href="/">Report</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </section>

  <style jsx>{`
    .container-cards {
      max-width: 1200px;
      margin: 0 auto;
      padding: 15px 20px;
    }

    .background {
      background-color: #D5DBE2;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
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
      border-bottom: 1px solid #C5C5C5;
      border-left: 1px solid #C5C5C5;
      background-color: #FDFDFE;
      margin-bottom: -1px;
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

    .sort-links > a {
      font-weight: 400; 
      margin-left: 0.5rem; 
      font-size: 0.9rem; 
      color: rgb(124, 124, 124); 
      text-decoration: none;
      padding: 5px 7.5px;
    }

    .sort-links > a:hover,
    .sort-links > a:active {
      background-color: #f2f2f2;
      border-radius: 5px;
    }

    .secondary-link {
      font-size: 0.9rem; 
      color: rgb(124, 124, 124); 
      text-decoration: none;
      padding: 5px 7.5px;
      font-weight: 700;
    }

    .secondary-link:hover,
    .secondary-link:active {
      background-color: #f2f2f2;
      border-radius: 5px;
    }

    @media only screen and (max-width: 480px) {
      .container-cards {
        padding: 8px;
      }

      .background {
        padding-top: 0;
        padding-bottom: 0;
      }
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