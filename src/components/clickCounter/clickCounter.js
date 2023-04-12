import React, { useState, useEffect } from "react";
import { getLocationData, postClick, getClicks } from "./clickCounter.api";
import "./clickCounter.css";

const url = process.env.REACT_APP_BASE_URL;

const ClickCounter = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      const clicks = await getClicks(url);
      setCountries(clicks || []);
    })();
  }, []);

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const locationData = await getLocationData(latitude, longitude);

      await postClick(url, locationData);
      const clickData = await getClicks(url);
      setCountries(clickData);
    });
  };

  return (
    <div className="main">
      <button type="button" onClick={handleClick}>
        Click ME!!!
      </button>

      {countries.length > 0 && (
        <>
          {countries.map(({ city, country, clicks }, i) => (
            <div key={i}>
              <span>
                {city}, {country}
              </span>
              <span>{clicks}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ClickCounter;
