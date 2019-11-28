import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Phone = () => {
  const { phoneId } = useParams();

  console.log(phoneId);


  return (
    <>
      <div>
Phone:
        {phoneId}
      </div>
      <Link to="/">Catalog</Link>
    </>
  );
};

export default Phone;
