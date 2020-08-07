import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import TotalReviews from './components/totalReviews'
import Search from './components/search'
import Country from './components/origin'
import Table from './components/table'
import './App.css'



function App() {
  const [reviews, setReviews] = useState(localStorage.getItem('reviews') || [])
  const [offset, setOffset] = useState(0)
  useEffect(()=>{
    const fetchData = () => {
      if(!reviews.length){
        axios.get('https://lightninglaw.azurewebsites.net/api/reviews')
        .then(apiData => {
          console.log(apiData)
          setReviews(apiData.data)
          localStorage.setItem('reviews', apiData.data)
        })
      }
    }
    fetchData()
  },[reviews.length])
  const handlePageClick = event => {
    const selected = event.selected;
    const newOffset = selected * offset
    setOffset(newOffset)
  }
  return (
   <section>
     <section className='flex'>
     <TotalReviews total={reviews.length} />
     <Country reviews={reviews} />
     </section>
     <section>
      <Search />
      <Table data={reviews}/>
      <ReactPaginate previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={reviews.length/10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        />
     </section>
   </section>
  );
}

export default App;
