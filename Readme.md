# Blog Application with AI-Powered Summaries

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog application with AI-powered post summaries.

## 🚀 Features

- CRUD operations for blog posts
- AI-generated summaries using OpenAI's GPT
- Responsive design with Tailwind CSS
- Real-time form validation
- Toast notifications
- Loading states & error handling

## 📁 Project Structure

```
project/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   ├── hooks/
    │   ├── pages/
    │   ├── services/
    │   └── utils/
    └── package.json
```

## 🛠 Setup & Installation

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
touch .env

# Add environment variables
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
PORT=5000

# Start server
npm run dev
```

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
touch .env

# Add environment variables
REACT_APP_API_URL=http://localhost:5000/api

# Start application
npm start
```

## 🔌 API Endpoints

### Posts API

```javascript
/**
 * @route   POST /api/posts
 * @desc    Create a new blog post
 * @access  Public
 * @body    {
 *            title: string,     // Required, post title
 *            content: string,   // Required, post content
 *          }
 * @return  {
 *            _id: string,
 *            title: string,
 *            content: string,
 *            summary: string,   // AI-generated
 *            createdAt: date
 *          }
 */
POST /api/posts

/**
 * @route   GET /api/posts
 * @desc    Get all blog posts
 * @access  Public
 * @return  [{
 *            _id: string,
 *            title: string,
 *            content: string,
 *            summary: string,
 *            createdAt: date
 *          }]
 */
GET /api/posts

/**
 * @route   GET /api/posts/:id
 * @desc    Get single blog post by ID
 * @access  Public
 * @param   id: string          // Post ID
 * @return  {
 *            _id: string,
 *            title: string,
 *            content: string,
 *            summary: string,
 *            createdAt: date
 *          }
 */
GET /api/posts/:id

/**
 * @route   PUT /api/posts/:id
 * @desc    Update a blog post
 * @access  Public
 * @param   id: string          // Post ID
 * @body    {
 *            title: string,     // Optional
 *            content: string,   // Optional
 *          }
 * @return  {
 *            _id: string,
 *            title: string,
 *            content: string,
 *            summary: string,   // Re-generated if content updated
 *            createdAt: date
 *          }
 */
PUT /api/posts/:id

/**
 * @route   DELETE /api/posts/:id
 * @desc    Delete a blog post
 * @access  Public
 * @param   id: string          // Post ID
 * @return  {
 *            message: string    // Success message
 *          }
 */
DELETE /api/posts/:id
```

### Response Codes

```javascript
/**
 * Success Codes:
 * 200: Successful GET, PUT, DELETE
 * 201: Successful POST
 *
 * Error Codes:
 * 400: Bad Request - Invalid input
 * 404: Not Found - Resource doesn't exist
 * 500: Server Error - Something went wrong on the server
 */
```

### Example API Usage

```javascript
// Create Post
fetch('http://localhost:5000/api/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'My First Post',
    content: 'This is the content of my first post.'
  })
});

// Get All Posts
fetch('http://localhost:5000/api/posts');

// Get Single Post
fetch('http://localhost:5000/api/posts/post_id');

// Update Post
fetch('http://localhost:5000/api/posts/post_id', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Updated Title',
    content: 'Updated content'
  })
});

// Delete Post
fetch('http://localhost:5000/api/posts/post_id', {
  method: 'DELETE'
});
```

## 📝 Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb://localhost:27017/blog
GENERATIVE_API_KEY=your_gemini_api_key
PORT=5000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 🔒 Error Handling

The API returns errors in the following format:

```javascript
{
  message: string,     // Error message
  stack: string       // Stack trace (development only)
}
```
Home Page
![image](https://github.com/user-attachments/assets/8a66f1ec-c3a3-48c2-98fc-626a2b4af792)

Create Post
![image](https://github.com/user-attachments/assets/82f23121-2819-4fae-bda5-8d4fb08358d5)

Update Post
![image](https://github.com/user-attachments/assets/9908347b-7df6-4cd2-b90f-813b2b30b14a)

Video Demonstration
https://drive.google.com/file/d/1AigOVU_rzJevENe8K2-RBPdkMfXLvbpP/view?usp=sharing
