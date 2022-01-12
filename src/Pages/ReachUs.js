import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOrganisation } from "../Redux/Thunks/AdminAboutUs";
import officeLocation from "../images/map.png";
// import officeLocation from '../images/office-location.jpg';

export default function ReachUs() {
  const [locationData, setLocationData] = useState([]);

  const dispatch = useDispatch();
  const location = useSelector((state) => state.AdminAboutUs?.organisationData);

  useEffect(() => {
    console.log(location);
    if (!location?.locationContact) {
      dispatch(getOrganisation());
    }
    if (location?.locationContact) {
      setLocationData([...location.locationContact]);
    }
  }, [location]);
  console.log(locationData);
  return (
    <div className="reach-us-container">
      <div className="location-container">
        {locationData.map((m) => (
          <div className="location-card">
            <h2>Office location</h2>
            <h6>
              <img src={officeLocation} />
              <span>{m.location}</span>
            </h6>
            <div className="main">
              <div className="block">
                <div className="block-2">
                  <div className="clear">
                    <div className="content">
                      <h3>Address</h3>
                      <p>{m.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card"></div>
    </div>
  );
}
