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

  const {
    name, description, battery, storage, connectivity,
    android, sizeAndWeight, display, hardware, camera,
  } = phoneData;

  return (
    <article>
      <h1>{name}</h1>
      <p>{description}</p>
      {!!phoneData.name && (
      <ul className="specs">
        <li className="specs__item">
          <span>Battery</span>
          <dl>
            <dt>Type</dt>
            <dd>{battery.type}</dd>
            <dt>Standby time (max)</dt>
            <dd>{battery.standbyTime}</dd>
            <dt>Talk Time</dt>
            <dd>{battery.talkTime}</dd>
          </dl>
        </li>
        <li className="specs__item">
          <span>Storage and Memory</span>
          <dl>
            <dt>Internal Storage</dt>
            <dd>{storage.flash}</dd>
            <dt>RAM</dt>
            <dd>{storage.ram}</dd>
          </dl>
        </li>
        <li className="specs__item">
          <span>Connectivity</span>
          <dl>
            <dt>Network Support</dt>
            <dd>{connectivity.cell}</dd>
            <dt>WiFi</dt>
            <dd>{connectivity.wifi}</dd>
            <dt>Bluetooth</dt>
            <dd>{connectivity.bluetooth}</dd>
          </dl>
        </li>
        <li className="specs__item">
          <span>Android</span>
          <dl>
            <dt>OS Version</dt>
            <dd>{android.os}</dd>
            <dt>UI</dt>
            <dd>{android.ui}</dd>
          </dl>
        </li>
        <li className="specs__item">
          <span>Size and Weight</span>
          <dl>
            <dt>Dimensions</dt>
            <dd>{sizeAndWeight.dimensions[0]}</dd>
            <dd>{sizeAndWeight.dimensions[1]}</dd>
            <dd>{sizeAndWeight.dimensions[2]}</dd>
            <dt>Weight</dt>
            <dd>{sizeAndWeight.weight}</dd>
          </dl>
        </li>
        <li className="specs__item">
          <span>Display</span>
          <dl>
            <dt>Screen size</dt>
            <dd>{display.screenSize}</dd>
            <dt>Screen resolution</dt>
            <dd>{display.screenResolution}</dd>
          </dl>
        </li>
        <li className="specs__item">
          <span>Hardware</span>
          <dl>
            <dt>CPU</dt>
            <dd>{hardware.cpu}</dd>
            <dt>USB</dt>
            <dd>{hardware.usb}</dd>
          </dl>
        </li>
        <li className="specs__item">
          <span>Camera</span>
          <dl>
            <dt>Primary</dt>
            <dd>{camera.primary}</dd>
          </dl>
        </li>
      </ul>
      )}
      <Link to="/">Catalog</Link>
    </article>
  );
};

export default Phone;
