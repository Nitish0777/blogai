const PostForm = ({ formData, setFormData, handleSubmit, isLoading, type = 'Create' }) => {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ borderBottom: '1px solid #dee2e6', padding: '1rem 1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333', margin: 0 }}>
              {type} Post
            </h2>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: '0.875rem', 
                  fontWeight: '500', 
                  color: '#555', 
                  marginBottom: '0.5rem' 
                }}>
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  style={{ 
                    width: '100%', 
                    padding: '0.5rem', 
                    border: '1px solid #dee2e6', 
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>
              <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: '0.875rem', 
                  fontWeight: '500', 
                  color: '#555', 
                  marginBottom: '0.5rem' 
                }}>
                  Content
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  style={{ 
                    width: '100%', 
                    padding: '0.5rem', 
                    border: '1px solid #dee2e6', 
                    borderRadius: '4px',
                    height: '150px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                style={{ 
                  padding: '0.75rem', 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer',
                  opacity: isLoading ? 0.7 : 1
                }}
              >
                {isLoading ? 'Saving...' : `${type} Post`}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default PostForm;
  