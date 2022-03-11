import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import ProjectsListPage from './pages/ProjectsListPage/ProjectsListPage';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects"
          element={
            <IsPrivate>
              <ProjectsListPage />
            </IsPrivate>
          }
        />
        <Route
          path="/projects/:projectId"
          element={
            <IsPrivate>
              <ProjectDetails />
            </IsPrivate>
          }
        />
        <Route path="/projects/edit/:projectId" element={<EditProjectPage />} />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;