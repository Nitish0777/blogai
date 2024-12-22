import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogList = () => {
    const [posts, setPosts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const navigate = useNavigate();
  
    React.useEffect(() => {
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
  
    return (
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {posts.map((post) => (
          <div key={post._id} style={{ 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
            display: 'flex', 
            flexDirection: 'column' 
          }}>
            <div style={{ borderBottom: '1px solid #dee2e6', padding: '1rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333', margin: 0 }}>{post.title}</h3>
            </div>
            <div style={{ padding: '1rem 1.5rem', flexGrow: 1 }}>
              <p style={{ color: '#555', marginBottom: '1rem', lineHeight: 1.5 }}>{post.content}</p>
              {post.summary && (
                <div style={{ marginTop: '1rem' }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem' }}>Summary:</h4>
                  <p style={{ fontSize: '0.875rem', color: '#666' }}>{post.summary}</p>
                </div>
              )}
            </div>
            <div style={{ 
              borderTop: '1px solid #dee2e6', 
              padding: '1rem 1.5rem', 
              display: 'flex', 
              justifyContent: 'flex-end', 
              gap: '0.5rem' 
            }}>
              <button
                onClick={() => navigate(`/edit/${post._id}`)}
                style={{ 
                  padding: '0.5rem 1rem', 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer' 
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post._id)}
                style={{ 
                  padding: '0.5rem 1rem', 
                  backgroundColor: '#dc3545', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer' 
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default BlogList;