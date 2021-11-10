import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Location from './Location';

const Cafeteria = () => {
  const [apiData, setApiData] = useState(null);
  let myLat, myLon;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        let lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        myLat = lat;
        myLon = lon;
      },
      function (error) {
        console.error(error);
      }
    );
  }

  const callApi = async () => {
    await axios.get(`http://localhost:5000/api/shops/${myLat}/${myLon}`).then((res) => {
      setApiData(res);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return <Location cafeData={apiData} />;
};

export default Cafeteria;
