import React from 'react'

function CountryItem({ country }) {
  return (
    <div>id: {country.id} name: {country.name}</div>
  )
}

export default CountryItem