import React from 'react'
import useFetchData from './useFetchData';

function PostsList() {
  const posts = useFetchData('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>PostsList:
      {posts.slice(0,10).map((item) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
    </div>
  )
}

export default PostsList