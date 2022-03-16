import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import ItemListPage from './pages/ItemsListPage/ItemListPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import AddItem from './pages/ProfilePage/AddItem';
import MyAdds from './pages/ProfilePage/MyAdds';
import Favorites from './pages/ProfilePage/Favorites';
import ItemDetails from './pages/ItemDetailsPage/ItemDetailsPage';
import EditItemPage from './pages/EditItemPage/EditItemPage';
 


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route
          path="/items"
          element={
            <>
               <Navbar />
              <ItemListPage />
            </>
          }
        />   

        <Route path="/login" element={
            <>
            <Navbar />
              <LoginPage />
              </>
          }/>
          <Route path="/signup" element={
               <>
            <Navbar />
            <SignupPage />
              </>
          
          }/>
       <Route
          path="/items/:itemId"
          element={
             <>
            <Navbar />
            <ItemDetails />
              </>
              
          }
        />

        <Route
          path="/items/edit/:itemId"
          element={
             <>
            <Navbar />
            <EditItemPage />
           
              </>
              
          }
        />


          <Route path="/profile" element={

              <AddItem />
            
          }/>
          <Route path="/profile/myAdds" element={

<MyAdds />
}/>
<Route path="/profile/favorites" element={

<Favorites />
}/>
      </Routes>
      
      
    </div>
  );
}

export default App;