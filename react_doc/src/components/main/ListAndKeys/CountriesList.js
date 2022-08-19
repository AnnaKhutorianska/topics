import React from 'react'
import CountryItem from './CountryItem'

function CountriesList() {
  const countries = [
    {
      id: 1,
      name: 'usa',
    },
    {
      id: 2,
      name: 'ua'
    }
  ]
  return (
    <div>
      {countries.map(country => <CountryItem key={country.id} country={country} />)}
    </div>
  )
}

export default CountriesList