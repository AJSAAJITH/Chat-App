<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
</head>
<body>
  <h1>Chat App</h1>
  <p>A real-time chat application built with the MERN stack, using WebSocket for real-time communication and secure authentication for user access.</p>

  <h2>Project Live Preview</h2>
  <p><strong>Live Preview:</strong> <a href="https://chat-app-v50j.onrender.com">https://chat-app-v50j.onrender.com</a></p>

  <h2>📁 Project Structure</h2>
  <ul>
    <li><strong>Backend</strong>: Node.js, Express, MongoDB</li>
    <li><strong>Frontend</strong>: React, Vite, Zustand, Tailwind CSS</li>
  </ul>

  <h2>🚀 Features</h2>
  <ul>
    <li><strong>User Authentication</strong>: Secure login and registration using JWT and bcrypt.</li>
    <li><strong>Real-Time Messaging</strong>: Powered by Socket.IO for instant communication between users.</li>
    <li><strong>User Interface</strong>: Responsive and dynamic UI built with React and Tailwind CSS.</li>
    <li><strong>State Management</strong>: Zustand for easy and scalable state management.</li>
    <li><strong>Notifications</strong>: Real-time toasts for feedback on user actions (e.g., login success/failure).</li>
    <li><strong>Environment Configuration</strong>: Supports <code>.env</code> configuration for sensitive information like database URIs and JWT secrets.</li>
  </ul>

  <h2>🛠️ Tech Stack</h2>
  <h3>Backend</h3>
  <ul>
    <li><strong>Node.js</strong>: Server-side JavaScript runtime</li>
    <li><strong>Express</strong>: Web framework for Node.js</li>
    <li><strong>MongoDB</strong>: NoSQL database for storing user data</li>
    <li><strong>Socket.IO</strong>: Real-time bidirectional communication</li>
    <li><strong>JSON Web Tokens (JWT)</strong>: Secure authentication</li>
    <li><strong>bcrypt.js</strong>: Password hashing</li>
    <li><strong>dotenv</strong>: Environment variable management</li>
  </ul>
  <h3>Frontend</h3>
  <ul>
    <li><strong>React</strong>: Frontend JavaScript library</li>
    <li><strong>Vite</strong>: Fast bundler for development</li>
    <li><strong>Tailwind CSS + DaisyUI</strong>: Customizable styling</li>
    <li><strong>Zustand</strong>: State management</li>
    <li><strong>React Router</strong>: Navigation between pages</li>
    <li><strong>Axios</strong>: HTTP client for API requests</li>
  </ul>

  <h2>🏗️ Installation & Setup</h2>
  <p>1. <strong>Clone the repository</strong>:</p>
  <pre><code>git clone https://github.com/yourusername/chat-app.git
cd chat-app</code></pre>

  <p>2. <strong>Install backend dependencies</strong>:</p>
  <pre><code>cd backend
npm install</code></pre>

  <p>3. <strong>Configure environment variables</strong>:</p>
  <p>Create a <code>.env</code> file in the backend folder with the following:</p>
  <pre><code>MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key</code></pre>

  <p>4. <strong>Install frontend dependencies</strong>:</p>
  <pre><code>cd ../frontend
npm install</code></pre>

  <p>5. <strong>Run the application</strong>:</p>
  <ul>
    <li><strong>For development mode:</strong></li>
    <pre><code>npm run dev</code></pre>
    <li><strong>For production mode:</strong></li>
    <pre><code>npm run prod</code></pre>
  </ul>

  <h2>📂 Project Structure</h2>
  <pre><code>chat-app/
│
├── backend/
│   ├── server.js         # Main server file
│   ├── config/           # Database connection & config files
│   └── routes/           # API routes for user and message handling
│
├── frontend/
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # Application pages (login, chat, etc.)
│   │   ├── hooks/        # Custom hooks for state and effects
│   │   ├── App.js        # Main React component
│   │   └── main.js       # Vite entry file
│   └── public/           # Public assets and files
│
└── README.md             # Project documentation</code></pre>

  <h2>📜 Scripts</h2>
  <h3>Backend</h3>
  <ul>
    <li><code>npm run dev</code>: Start the backend server in development mode</li>
    <li><code>npm run prod</code>: Start the backend server in production mode</li>
  </ul>
  <h3>Frontend</h3>
  <ul>
    <li><code>npm run dev</code>: Start the Vite development server</li>
    <li><code>npm run build</code>: Build the frontend for production</li>
    <li><code>npm run preview</code>: Preview the built frontend locally</li>
  </ul>

  <h2>📬 API Endpoints</h2>
  <h3>User Routes</h3>
  <ul>
    <li><code>POST /api/users/register</code> - Register a new user</li>
    <li><code>POST /api/users/login</code> - Log in an existing user</li>
    <li><code>GET /api/users/logout</code> - Log out the current user</li>
  </ul>
  <h3>Chat Routes</h3>
  <ul>
    <li><code>POST /api/messages</code> - Send a new message</li>
    <li><code>GET /api/messages</code> - Get chat messages</li>
  </ul>

  <h2>🤝 Contributing</h2>
  <p>Feel free to submit issues or pull requests for any features, fixes, or enhancements.</p>
</body>
</html>
