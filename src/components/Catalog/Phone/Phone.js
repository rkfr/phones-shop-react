import './Phone.css';

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPhoneById } from '../../../api/fetchData';
// import { AddButton } from '../media/AddButton';

const Phone = () => {
  const { phoneId } = useParams();
  const [phoneData, setPhoneData] = useState({});
  const [selectedImageSrc, setSelectedImageSrc] = useState('#');

  useEffect(() => {
    getPhoneById(phoneId)
      .then((data) => {
        setPhoneData(data);
        setSelectedImageSrc(data.images[0]);
        return data;
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, []);

  const {
    name, description, battery, storage, connectivity,
    android, sizeAndWeight, display, hardware, camera,
    images,
  } = phoneData;

  const renderGalleryItem = (src) => (
    <li className="gallery__item" key={src}>
      <img src={src} alt={name} className="gallery__image" />
    </li>
  );

  return (
    <article className="phone">
      <Link to="/" className="back" title="Back to catalog" />
      {!!phoneData.name && (
      <>
        <div className="previev">
          <div className="gallery previev__item">
            <ul className="gallery__list">
              {images.map(renderGalleryItem)}
            </ul>
            <figure className="gallery__main">
              <img src={selectedImageSrc} alt={name} className="gallery__main-image" />
            </figure>
          </div>
          <div className="description previev__item">
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
        <ul className="specs">
          <li className="specs__item">
            <h4 className="specs__title">Battery</h4>
            <dl>
              <dt className="specs__subtitle">Type</dt>
              <dd className="specs__info">{battery.type}</dd>
              <dt className="specs__subtitle">Standby time (max)</dt>
              <dd className="specs__info">{battery.standbyTime}</dd>
              <dt className="specs__subtitle">Talk Time</dt>
              <dd className="specs__info">{battery.talkTime}</dd>
            </dl>
          </li>
          <li className="specs__item">
            <h4 className="specs__title">Storage and Memory</h4>
            <dl>
              <dt className="specs__subtitle">Internal Storage</dt>
              <dd className="specs__info">{storage.flash}</dd>
              <dt className="specs__subtitle">RAM</dt>
              <dd className="specs__info">{storage.ram}</dd>
            </dl>
          </li>
          <li className="specs__item">
            <h4 className="specs__title">Connectivity</h4>
            <dl>
              <dt className="specs__subtitle">Network Support</dt>
              <dd className="specs__info">{connectivity.cell}</dd>
              <dt className="specs__subtitle">WiFi</dt>
              <dd className="specs__info">{connectivity.wifi}</dd>
              <dt className="specs__subtitle">Bluetooth</dt>
              <dd className="specs__info">{connectivity.bluetooth}</dd>
            </dl>
          </li>
          <li className="specs__item">
            <h4 className="specs__title">Android</h4>
            <dl>
              <dt className="specs__subtitle">OS Version</dt>
              <dd className="specs__info">{android.os}</dd>
              <dt className="specs__subtitle">UI</dt>
              <dd className="specs__info">{android.ui}</dd>
            </dl>
          </li>
          <li className="specs__item">
            <h4 className="specs__title">Size and Weight</h4>
            <dl>
              <dt className="specs__subtitle">Dimensions</dt>
              <dd className="specs__info">{sizeAndWeight.dimensions[0]}</dd>
              <dd className="specs__info">{sizeAndWeight.dimensions[1]}</dd>
              <dd className="specs__info">{sizeAndWeight.dimensions[2]}</dd>
              <dt className="specs__subtitle">Weight</dt>
              <dd className="specs__info">{sizeAndWeight.weight}</dd>
            </dl>
          </li>
          <li className="specs__item">
            <h4 className="specs__title">Display</h4>
            <dl>
              <dt className="specs__subtitle">Screen size</dt>
              <dd className="specs__info">{display.screenSize}</dd>
              <dt className="specs__subtitle">Screen resolution</dt>
              <dd className="specs__info">{display.screenResolution}</dd>
            </dl>
          </li>
          <li className="specs__item">
            <h4 className="specs__title">Hardware</h4>
            <dl>
              <dt className="specs__subtitle">CPU</dt>
              <dd className="specs__info">{hardware.cpu}</dd>
              <dt className="specs__subtitle">USB</dt>
              <dd className="specs__info">{hardware.usb}</dd>
            </dl>
          </li>
          <li className="specs__item">
            <h4 className="specs__title">Camera</h4>
            <dl>
              <dt className="specs__subtitle">Primary</dt>
              <dd className="specs__info">{camera.primary}</dd>
            </dl>
          </li>
        </ul>
      </>
      )}
    </article>
  );
};

export default Phone;
