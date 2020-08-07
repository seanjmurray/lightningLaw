import React, { useState } from 'react'

export default (props) => {
  const [country, setCountry] = useState('')
  const handleChange = (e) => {
    setCountry(e.target.value)
    console.log(country)
  }
  const options = () => {
    return props.reviews.reduce((acc,obj,i) => {
      if(acc.includes(obj.country)){
        return acc
      } else {
      acc.push(<option key={i} value={obj.country}>{obj.country}</option>)
      return acc
      }
    },[])
  }
  return (
    <form>
      <h2>Country of Origin</h2>
      <select onChange={handleChange}>
        {options()}
      </select>
    </form>
  )
}