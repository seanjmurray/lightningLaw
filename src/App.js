import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TotalReviews from './components/totalReviews'
import Search from './components/search'
import Country from './components/origin'
import Table from './components/table'
import './App.css'

const test = [
  {
      "country": "Italy",
      "designation": "Vulkà Bianco",
      "points": 87,
      "price": null,
      "province": "Sicily & Sardinia",
      "tasterName": "Kerin O’Keefe",
      "title": "Nicosia 2013 Vulkà Bianco  (Etna)",
      "variety": "White Blend",
      "winery": "Nicosia"
  },
  {
      "country": "Portugal",
      "designation": "Avidagos",
      "points": 87,
      "price": "15",
      "province": "Douro",
      "tasterName": "Roger Voss",
      "title": "Quinta dos Avidagos 2011 Avidagos Red (Douro)",
      "variety": "Portuguese Red",
      "winery": "Quinta dos Avidagos"
  },
  {
      "country": "US",
      "designation": null,
      "points": 87,
      "price": "14",
      "province": "Oregon",
      "tasterName": "Paul Gregutt",
      "title": "Rainstorm 2013 Pinot Gris (Willamette Valley)",
      "variety": "Pinot Gris",
      "winery": "Rainstorm"
  },
  {
      "country": "US",
      "designation": "Reserve Late Harvest",
      "points": 87,
      "price": "13",
      "province": "Michigan",
      "tasterName": "Alexander Peartree",
      "title": "St. Julian 2013 Reserve Late Harvest Riesling (Lake Michigan Shore)",
      "variety": "Riesling",
      "winery": "St. Julian"
  },
  {
      "country": "US",
      "designation": "Vintner's Reserve Wild Child Block",
      "points": 87,
      "price": "65",
      "province": "Oregon",
      "tasterName": "Paul Gregutt",
      "title": "Sweet Cheeks 2012 Vintner's Reserve Wild Child Block Pinot Noir (Willamette Valley)",
      "variety": "Pinot Noir",
      "winery": "Sweet Cheeks"
  },
  {
      "country": "Spain",
      "designation": "Ars In Vitro",
      "points": 87,
      "price": "15",
      "province": "Northern Spain",
      "tasterName": "Michael Schachner",
      "title": "Tandem 2011 Ars In Vitro Tempranillo-Merlot (Navarra)",
      "variety": "Tempranillo-Merlot",
      "winery": "Tandem"
  }
]

function App() {
  const [reviews, getReviews] = useState(localStorage.getItem('reviews') || test)
  useEffect(()=>{
    const fetchData = () => {
      if(!reviews.length){
        axios.get('https://lightninglaw.azurewebsites.net/api/reviews',{ crossorigin:true } )
        .then(apiData => {
          getReviews(apiData.body)
          localStorage.setItem('reviews', reviews)
        })
      }
    }
    fetchData()
  },[reviews])
  return (
   <section>
     <section className='flex'>
     <TotalReviews total={reviews.length} />
     <Country reviews={reviews} />
     </section>
     <section>
      <Search />
      <Table data={reviews}/>
     </section>
   </section>
  );
}

export default App;
