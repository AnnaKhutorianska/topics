import React, {useSyncExternalStore, useEffect, useState, useContext} from 'react'
import useFetchData from '../CustomHook/useFetchData';
import { MyContext } from '../useContextComp/Context'

function UseSuncExternalStore() {
  //example1 
  // const width = useSyncExternalStore(
  //   (listener) => {
  //     window.addEventListener('resize', listener);
  //     return () => {
  //       window.removeEventListener('resize', listener);
  //     };
  //   },
  //   () => window.innerWidth
  // );

  // return <p>{width}</p>;

  const data = useSyncExternalStore(
    () => useContext(MyContext)
  );
}

// function UseSuncExternalStore() {
//   const [width, setWidth] = useState(0)

//   useEffect(() => {
//     setWidth(window.innerWidth)
//   }, [])

//   useEffect(() => {
//     window.addEventListener('resize', () => setWidth(window.innerWidth));
  
//     return () => {
//       window.removeEventListener('resize', () => setWidth(window.innerWidth));
//     };
//   }, [window.innerWidth])


//   return <p>{width}</p>;
// }

export default UseSuncExternalStore