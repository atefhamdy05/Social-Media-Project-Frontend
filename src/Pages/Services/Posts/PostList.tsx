import React from "react";
import { useGetPostListQuery } from "../../../redux/api/postsApi";

const PostList = () => {
  const { data: posts = [], isLoading, error } = useGetPostListQuery(undefined);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts.</p>;

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>by {post.author_username}</small>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PostList;
