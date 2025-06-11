// src/App.jsx
import { useSelector } from 'react-redux';
import Login from './pages/Login/Login';
import CourseList from './pages/CourseList/CourseList';

export default function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div>
      {isLoggedIn ? <CourseList /> : <Login />}
    </div>
  );
}
