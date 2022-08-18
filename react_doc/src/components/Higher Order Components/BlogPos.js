import React from 'react'
import WithSubscription from "./WithSubscription";

function BlogPost() {
 
  return <TextBlock text={blogPost}/>
}

const BlogPostWithSubscription = WithSubscription(BlogPost, (DataSource, props) => DataSource.getBlogPost(props.id));

export default BlogPostWithSubscription