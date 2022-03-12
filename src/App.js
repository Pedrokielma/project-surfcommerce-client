import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import ItemListPage from './pages/ItemsListPage/ItemListPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route
          path="/items"
          element={
            // <IsPrivate>
            <>
               <Navbar />
              <ItemListPage />
            </>
              
            // </IsPrivate>
          }
        />   

        <Route path="/login" element={
            // <IsPrivate>
              <LoginPage />
            // </IsPrivate>
          }/>
          <Route path="/signup" element={
            // <IsPrivate>
              <SignupPage />
            // </IsPrivate>
          }/>
      </Routes>
      
    </div>
  );
}

export default App;