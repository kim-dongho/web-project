import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cafeteria = () => {
  const getApi = async () => {
    const response = await fetch('api/cafes', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => console.log(res));
  };

  useEffect(() => {
    getApi();
  }, []);

  return '';
};

export default Cafeteria;
