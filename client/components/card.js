import { Component } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

class Card extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <>
        <div className="card">
          <div className="arrows">
            <div className="container">
              <div className="arrow blue">
                <FontAwesomeIcon icon={faCaretUp} size="lg" />
              </div>
              <div className="count">0</div>
              <div className="arrow blue">
                <FontAwesomeIcon icon={faCaretDown} size="lg" />
              </div>
            </div>
          </div>
          <Link as={`/vendor/${this.props.slug}`} href={`/vendor?id=${this.props.slug}`}>
            <div className="content">
              <h3 className="title">{this.props.name}</h3>
              <p className="detail">Hourly Rate: ${this.props.rate}</p>
              <p className="detail">Tags: Magento, Shopify, PHP</p>
            </div>
          </Link>
        </div>

        <style jsx>{`
          .card {
            border: 1px solid #C5C5C5;
            margin-bottom: -1px;
            display: flex;
            background-color: #FDFDFE;
            cursor: pointer;
          }

          .arrows {
            display: flex;
            flex-direction: column;
            background-color: #F7F8F9;
            cursor: default;
          }

          .container {
            padding: 15px 7.5px;
            background-color: #F7F8F9;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-width: 1.5rem;
            max-width: 2rem;
          }

          .arrow {
            font-weight: 700;
            font-size: 1.15rem;
            cursor: pointer;
            color: #76797B;
            padding: 2.5px 5px;
          }

          .blue:hover {
            color: #2085C4;
          }

          .red:hover {
            color: #FF323A;
          }

          .arrow:hover {
            background-color: #e2e2e2;
            border-radius: 5px;
          }

          .count {
            font-weight: 700;
            font-size: 0.75rem;
            margin: 10px 5px;
            color: #1a1a1b;
            cursor: text;
          }

          .title {
            font-size: 1.25rem;
            margin: 0;
            padding: 10px 10px 10px 10px;
            margin-top: 5px;
            font-weight: 600;
          }

          .detail {
            font-size: 0.9rem;
            margin: 0;
            padding: 0 10px 5px 10px;
            color: #7c7c7c;
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
        `}</style>
      </>
    )
  }
}

export default Card