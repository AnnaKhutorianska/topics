import React, {useState, useEffect} from 'react'

function useFetchData(url) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  },[]);

  return data
}

export default useFetchData