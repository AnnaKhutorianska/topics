import React from "react"

export const ChildTitle = ({ children }) => {
  const childrenTitles = React.Children.map(children, child => {
   if (React.isValidElement(child)) {
    return React.cloneElement(child, {
      style: {border: '1px solid red'}
  });
   }
   return child;
  });
 
  return <div>{childrenTitles}</div>;
}

 export const Titles = () => {
  return (
    <ChildTitle>
        <p key={1}>text 1</p>
        <p key={2}>text 2</p>
        <p key={3}>text 3</p>
        <p key={4}>text 4</p>
    </ChildTitle>
  )
}