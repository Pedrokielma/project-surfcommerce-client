import { React, useState, useContext, useEffect  } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';
import './AddItem.css';



import ProfileNav from "../../Components/ProfileNav/ProfileNav";

  function AddItem() {
    const { user, storeToken, authenticateUser} = useContext(AuthContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState(0);
    const [price, setPrice] = useState('');
    

    const [searchParams, setSearchParams] = useSearchParams();
const token = searchParams.get("token");

useEffect(() => {
  storeToken(token);
    authenticateUser();
}, []);
    
  
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
    const body = { title, description, image, category, price, user: user._id }
    axios
        .post(`${process.env.REACT_APP_API_URL}/api/items`, body)
        .then((response) => {
          console.log(response);
          setTitle('');
          setDescription('');
          setImage('');
          setCategory(0);
          setPrice('');


          navigate('/items');
        })
        .catch((err) => console.log(err));
    };
    
    return (
      <div className='items-page-main'>
         <ProfileNav />
  
         <div className="login-block">
  <h1 className="titleIn"> <b>Post Item</b></h1>
  <form  className="login-form" onSubmit={handleSubmit}>
   <label htmlFor="title" id="username" >Title</label>
    <input type="text" onChange={(e) => setTitle(e.target.value)} />

  <label  htmlFor="text">Description</label>
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
          <label htmlFor="title">Image</label>
          <input type="text" onChange={(e) => setImage(e.target.value)} />
          <label htmlFor="title">Category</label>
          <input type="text" onChange={(e) => setCategory(e.target.value)} />
          <label htmlFor="title">Price</label>
          <input type="text" onChange={(e) => setPrice(e.target.value)} />

    <button type="submit"> Login</button>
  </form>
</div>
        {console.log()}
      </div>



    )
  }

export default AddItem;

{/* <section className="backgroundLogin">
<div className="login-block">
  <h1 className="titleIn"> <b>Login</b></h1>
  <form  className="login-form" onSubmit={handleSubmit}>
   <label htmlFor="title" id="username" >Title</label>
    <input type="text" onChange={(e) => setTitle(e.target.value)} />

    <label htmlFor="password">Password</label>
    <input type="password" name="password"  id="password" value={password} onChange={handlePassword} />

    <button type="submit"> Login</button>
  </form>
</div>
</section> */}


