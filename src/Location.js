/*global kakao*/
import React, { useEffect, useState } from 'react';

const Location = ({ cafeData }) => {
  let locPosition = ''; // 좌표
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        let lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        locPosition = new kakao.maps.LatLng(lat, lon);
      },
      function (error) {
        console.error(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 27000,
        maximumAge: 0,
      }
    );
  }

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: locPosition,
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    const markerPosition = locPosition;
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);
  console.log(cafeData);
  return (
    <>
      <div>
        <div id='map' style={{ width: '500px', height: '400px' }}></div>
      </div>
    </>
  );
};

export default Location;
