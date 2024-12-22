import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import BlogList from './pages/BlogList';
import CreatePost from './pages/CreatePostPage';
import EditPost from './pages/EditPostPage';
// App Component
const App = () => {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <nav style={{ backgroundColor: 'white', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
              <Link to="/" style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333', textDecoration: 'none' }}>
                Blog App
              </Link>
              <Link 
                to="/create" 
                style={{ 
                  padding: '0.5rem 1rem', 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  borderRadius: '4px', 
                  textDecoration: 'none' 
                }}
              >
                Create Post
              </Link>
            </div>
          </div>
        </nav>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <Routes>
            <Route path="/" element={<BlogList/>} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;