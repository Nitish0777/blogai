import React from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "./PostForm";

const CreatePost = () => {
    const [formData, setFormData] = React.useState({ title: '', content: '' });
    const [isLoading, setIsLoading] = React.useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:5000/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          navigate('/');
        }
      } catch (error) {
        console.error('Error creating post:', error);
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
        type="Create"
      />
    );
  };

export default CreatePost;