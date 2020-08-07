import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TotalReviews from './components/totalReviews'
import './App.css'

function App() {
  const [reviews, getReviews] = useState(localStorage.getItem('reviews') || [])
  useEffect(()=>{
    const fetchData = () => {
   axios.get('https://lightninglaw.azurewebsites.net/api/reviews',{ crossorigin:true } )
      .then(apiData => {
        getReviews(apiData.body)
        localStorage.setItem('reviews', apiData.body)
      })
    }
    fetchData()
  },[reviews])
  return (
   <section>
     <h1>Test</h1>
     <TotalReviews />
   </section>
  );
}

export default App;
