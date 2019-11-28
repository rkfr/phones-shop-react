import { BASIC_URL } from '../constants';

const fetchData = (url) => fetch(url);

export const getAll = () => fetchData(`${BASIC_URL}.json`)
  .then((res) => res.json());

export const getPhoneById = async (phoneId) => fetchData(`${BASIC_URL}/${phoneId}.json`)
  .then((res) => res.json());
