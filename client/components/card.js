import { Component } from 'react'
import Link from 'next/link'

class Card extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <>
        <div className="card">
          Hello, World!
        </div>

        <style jsx>{`
          .card {
            border: 1px solid gray;
          }
        `}</style>
      </>
    )
  }
}

export default Card