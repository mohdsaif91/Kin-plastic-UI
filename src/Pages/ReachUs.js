import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOrganisation } from "../Redux/Thunks/AdminAboutUs";
import officeLocation from "../images/map.png";

export default function ReachUs() {
  const [locationData, setLocationData] = useState([]);

  const dispatch = useDispatch();
  const location = useSelector((state) => state.AdminAboutUs);

  useEffect(() => {
    if (!location?.organisationData?.locationContact) {
      dispatch(getOrganisation());
    }
    if (location?.organisationData?.locationContact) {
      setLocationData([...location.organisationData.locationContact]);
    }
  }, [location, dispatch]);

  return (
    <div className="reach-us-container">
      <div className="location-container">
        {locationData.map((m) => (
          <div className="location-card">
            <h2>Office location</h2>
            <h6>
              <img alt="" src={officeLocation} />
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
