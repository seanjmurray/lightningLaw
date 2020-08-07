import React, { useState } from 'react'

export default (props) => {
  const [search, setSearch] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Filters:
      <input type='text' onChange={(e) => setSearch(e.target.value)} placeholder='Search Term' />
      </label>
      <button type="submit">SEARCH</button>
    </form>
  )
}