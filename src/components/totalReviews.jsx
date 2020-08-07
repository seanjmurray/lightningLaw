import React from 'react'


export default (props) => {
  return (
    <section>
      <h2>Total reviews</h2>
      <div>
        <h1 className="total">{props.total}</h1>
      </div>
    </section>
  )
}