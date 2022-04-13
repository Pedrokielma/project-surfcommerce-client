import React, { useState } from 'react';
import ReactDom from 'react-dom'
import './LocationsModal.css'



// const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.value);

  // };
  

function LocationsModal({ open, onClose, props }) {
    const [location, setLocation] = useState('');


    const handleSelect = (e) => {
        setLocation(e.target.value);
        props.location(e.target.value);
        console.log(e.target.value)
      };

      const handleFormSubmit = (event) => {
          event.preventDefault();
          console.log(event.target.value);
          onClose()

        };

  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className='overlay_styles'/>
      <div className='MODAL_STYLES'>
      <form>
    <div>
  <input type="checkbox" onChange={handleSelect} value="lisbon" />
  <label htmlFor="vehicle1"> Lisbon</label><br />
  </div>
  <div>
  <input type="checkbox" onChange={handleSelect} value="porto" />
  <label htmlFor="vehicle2"> Porto</label><br />
  </div>
  <div>
  <input type="checkbox" onChange={handleSelect}  value="peniche" />
  <label htmlFor="vehicle3"> Peniche</label><br />
    </div>
    <div>
  <input type="checkbox" onChange={handleSelect}  value="alentejo" />
  <label htmlFor="vehicle3"> Alentejo</label><br />
    </div>
    <div>
  <input type="checkbox" onChange={handleSelect}  value="algarve" />
  <label htmlFor="vehicle3"> Algarve</label><br /><br />
    </div>
    
  <button type="submit" onClick={handleFormSubmit}>Close Modal</button>
</form> 
        
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default LocationsModal;