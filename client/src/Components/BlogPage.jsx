import React, { useState, useEffect } from 'react';

const BlogPost = () => {
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const url = editing ? `http://localhost:5000/api/posts/${editing}` : 'http://localhost:5000/api/posts';
      const method = editing ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ title: '', content: '' });
        setEditing(null);
        fetchPosts();
      }
    } catch (error) {
      console.error('Error saving post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          fetchPosts();
        }
      } catch (error) {
        console.error('Error deleting post:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleEdit = (post) => {
    setEditing(post._id);
    setFormData({
      title: post.title,
      content: post.content,
    });
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {/* Create/Edit Form Card */}
      <div style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
        <div style={{ borderBottom: '1px solid #ddd', padding: '15px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>
            {editing ? 'Edit Post' : 'Create New Post'}
          </h2>
        </div>
        <div style={{ padding: '35px' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#555' }}>
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                required
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#555' }}>
                Content
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', height: '100px' }}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '14px',
                paddingRight: '20px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                opacity: isLoading ? '0.7' : '1',
              }}
            >
              {isLoading ? 'Saving...' : editing ? 'Update Post' : 'Create Post'}
            </button>
          </form>
        </div>
      </div>

      {/* Posts Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {posts.map((post) => (
          <div key={post._id} style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ borderBottom: '1px solid #ddd', padding: '15px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#333' }}>{post.title}</h3>
            </div>
            <div style={{ padding: '15px', flexGrow: '1' }}>
              <p style={{ color: '#555', marginBottom: '15px' }}>{post.content}</p>
              {post.summary && (
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '500', color: '#666', marginBottom: '5px' }}>Summary:</h4>
                  <p style={{ fontSize: '14px', color: '#666' }}>{post.summary}</p>
                </div>
              )}
            </div>
            <div style={{ borderTop: '1px solid #ddd', padding: '15px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                onClick={() => handleEdit(post)}
                style={{ padding: '5px 10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post._id)}
                style={{ padding: '5px 10px', backgroundColor: '#DC3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
