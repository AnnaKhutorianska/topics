import React, {useState, useEffect, useDebugValue} from 'react'

function useFetchData(url) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  },[]);

  useDebugValue(data)

  return data
}

export default useFetchData