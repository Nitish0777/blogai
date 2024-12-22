import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
  ];

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <Link to={`/edit-post/${post.id}`}> Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
