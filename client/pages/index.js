import Link from 'next/link'
import Layout from '../components/layout'
import Card from '../components/card'
import fetch from 'isomorphic-unfetch';

const Index = ({ vendors }) => ( 
  <Layout
    title={`Hire Better Freelancers | VendorLink`}
    description={`Low commitment, ad-hoc jobs assigned to expert designers, developers, and marketers with payment held in escrow until work is delivered.`}
  >
    <section>

      <div style={{borderBottom: "1px solid #EAECEF"}}>
        <div className="container">
          <h1 className="hero-text" style={{marginTop: "0.5rem"}}>Hire Better Freelancers.</h1>
          <p style={{margin: "1em 0"}} className="tagline">Meet &amp; hire amazing talent from our invite-only community of elite web developers, designers, and marketers. *Note: This website is in development, and not yet fully functional. Feel free to browse around in the meantime!</p>
          {/* <Link href={`/our-process`}>
            <a>What makes us different?</a>
          </Link> */}
        </div>
        <div style={{borderTop: "1px solid #EAECEF", marginTop: "0.5rem"}}>
          <div className="container sort-links" style={{color: "rgb(124, 124, 124)", fontWeight: "600", fontSize: "0.9rem"}}>
            SORT:
            <a href="/">All Roles</a>
            <a href="/">All Platforms</a>
            <a href="/">All Prices</a>
          </div>
        </div>
      </div>

      <div className="background">
        <div className="container-cards" style={{maxWidth: "1180px"}}>
          {vendors.map(vendor => (
            <Card key={vendor.slug} name={vendor.name} rate={vendor.rate.toFixed(2)} slug={vendor.slug} skills={vendor.skills} votes={vendor.votes} />
          ))}
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
      background-color: rgb(216, 222, 226);
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    .tagline {
      font-weight: 300;
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