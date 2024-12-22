import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from './PostForm';
const EditPost = () => {
    const [formData, setFormData] = React.useState({ title: '', content: '' });
    const [isLoading, setIsLoading] = React.useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
  
    React.useEffect(() => {
      fetchPost();
    }, [id]);
  
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:5000/api/posts/${id}`);
        const data = await response.json();
        setFormData({ title: data.title, content: data.content });
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          navigate('/');
        }
      } catch (error) {
        console.error('Error updating post:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <PostForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        type="Edit"
      />
    );
  };

  export default EditPost;