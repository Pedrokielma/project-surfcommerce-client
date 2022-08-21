import React, { useState } from "react";
import ReactDom from "react-dom";
import "./LocationsModal.css";

const locationSelected = [];

function LocationsModal(props) {
  const [location, setLocation] = useState("");
  let index;

  const handleSelect = (e) => {
    index = locationSelected.indexOf(e.target.value);

    if (index !== -1) {
      locationSelected.splice(index, 1);
    } else {
      locationSelected.push(e.target.value);
    }

    setLocation(locationSelected);
    props.filters(locationSelected);
    console.log("opa", locationSelected);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.submit(location);
    props.open();
  };

  if (!props.open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay_styles" />
      <div className="MODAL_STYLES">
        <form>
          <div>
            <input type="checkbox" onChange={handleSelect} value="1" />
            <label htmlFor="vehicle1"> Lisbon</label>
            <br />
          </div>
          <div>
            <input type="checkbox" onChange={handleSelect} value="2" />
            <label htmlFor="vehicle2"> Porto</label>
            <br />
          </div>
          <div>
            <input type="checkbox" onChange={handleSelect} value="3" />
            <label htmlFor="vehicle3"> Peniche</label>
            <br />
          </div>
          <div>
            <input type="checkbox" onChange={handleSelect} value="4" />
            <label htmlFor="vehicle3"> Alentejo</label>
            <br />
          </div>
          <div>
            <input type="checkbox" onChange={handleSelect} value="5" />
            <label htmlFor="vehicle3"> Algarve</label>
            <br />
            <br />
          </div>

          <button type="submit" onClick={handleFormSubmit}>
            Apply
          </button>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default LocationsModal;
