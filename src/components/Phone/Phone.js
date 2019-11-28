import './Phone.css';

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPhoneById } from '../../api/fetchData';

const Phone = () => {
  const { phoneId } = useParams();
  const [phoneData, setPhoneData] = useState({});


  useEffect(() => {
    getPhoneById(phoneId)
      .then((data) => {
        setPhoneData(data);
        return data;
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div>
        Phone:
        {`${phoneData.name}`}
        {phoneId}
      </div>
      <Link to="/">Catalog</Link>
    </>
  );
};

export default Phone;
