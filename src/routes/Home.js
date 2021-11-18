import React, { useState, useEffect } from 'react';
import Cafes from '../components/Cafes';
import axios from 'axios';

const Home = () => {
  const [cafes, setCafes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        let lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        setLatitude(lat);
        setLongitude(lon);
      },
      function (error) {
        console.error(error);
      }
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:5000/api/shops/${latitude}/${longitude}`);
      setCafes(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [latitude, longitude]);

  return <>{isLoading ? <div>Loading...</div> : <Cafes cafeteria={cafes} myLat={latitude} myLon={longitude} />}</>;
};

export default Home;
