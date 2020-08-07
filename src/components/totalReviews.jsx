import React from 'react'
import './css/reviews.css'

export default (props) => {
  return (
    <section>
      <h2>Total reviews</h2>
      <div className='total'>
        <h1>{props.total}</h1>
      </div>
    </section>
  )
}