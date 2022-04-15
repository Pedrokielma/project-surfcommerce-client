import React, { useState } from 'react';
import ReactDom from 'react-dom'
import './LocationsModal.css'



// const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.value);

  // };
  const locationSelected = [];

function LocationsModal({ open, onClick, locationFilter }) {
    const [location, setLocation] = useState('');
    let index;
    
    const handleSelect = (e) => {
        index = locationSelected.indexOf(e.target.value);
        
        if(index !== -1){
            locationSelected.splice(index, 1);
        }  else {
            locationSelected.push(e.target.value)
        }
        
        setLocation(locationSelected); 
        locationFilter(locationSelected);
        console.log("opa", locationSelected);

      };

      const handleFormSubmit = (event) => {
          event.preventDefault();
    
          console.log(location);
          onClick()

        };

  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className='overlay_styles'/>
      <div className='MODAL_STYLES'>
      <form>
    <div>
  <input type="checkbox" onChange={handleSelect} value="one" />
  <label htmlFor="vehicle1"> Lisbon</label><br />
  </div>
  <div>
  <input type="checkbox" onChange={handleSelect} value="two" />
  <label htmlFor="vehicle2"> Porto</label><br />
  </div>
  <div>
  <input type="checkbox" onChange={handleSelect}  value="three" />
  <label htmlFor="vehicle3"> Peniche</label><br />
    </div>
    <div>
  <input type="checkbox" onChange={handleSelect}  value="four" />
  <label htmlFor="vehicle3"> Alentejo</label><br />
    </div>
    <div>
  <input type="checkbox" onChange={handleSelect}  value="five" />
  <label htmlFor="vehicle3"> Algarve</label><br /><br />
    </div>
    
  <button type="submit" onClick={handleFormSubmit}>Apply</button>
</form> 
        
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default LocationsModal;