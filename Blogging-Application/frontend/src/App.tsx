import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Blog } from './pages/Blog';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { Blogs } from './pages/Blogs';
import { Publish } from './pages/Publish';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        
       
        <Route
          path="/blog/:id"
          element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <Blogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/publish"
          element={
            <ProtectedRoute>
              <Publish />
            </ProtectedRoute>
          }
        />
        
        {/* Redirect any other route to /signup */}
        <Route
          path="/"
          // if token then navigate to /blogs else navigate to /signup
          
          element={
            localStorage.getItem('token') ? (
              <Navigate to="/blogs" replace />
            ) : (
              <Navigate to="/signup" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
