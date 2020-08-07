import React from 'react'
import './css/table.css'

export default (props) => {
  const makeTable = () => {
    return props.data.map((obj,i) => {
      if(i<10){
        return (
          <>
      <tr key={i}>
      <td>{obj.title}</td>
      <td>{obj.variety}</td>
      <td>{obj.winery}</td>
      <td>{obj.points}</td>
      <td>{obj.price ? obj.price : 'N/A'}</td>
      <td><a href="https://seanjmurray.github.io/lightningLaw/">{obj.tasterName}</a></td>
      </tr>
      </>
    )
  }
  })
  }
  return (
    <table>
      <thead >
        <tr>
        <th>Title</th>
        <th>Variety</th>
        <th>Winery</th>
        <th>Points</th>
        <th>Price</th>
        <th>Description</th>
        </tr>
      </thead>
      <tbody >
        {makeTable()}
      </tbody>
    </table>
  )
}