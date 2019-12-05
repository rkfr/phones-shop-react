import { SORT_BY_ALPHA } from './constants';

export const sortByAlpha = (data) => data.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  return (nameA < nameB) ? -1 : 1;
});

export const sortByNewest = (data) => data.sort((a, b) => a.age - b.age);

export const isItemInBasket = (itemId, items) => {
  if (!items.length) return false;

  if (items.length === 1) {
    return items[0].id === itemId;
  }

  return !!items.find(({ id }) => id === itemId);
};

export const getfilteredPhones = (phones, query) => phones.filter(
  ({ name }) => name
    .toLowerCase()
    .includes(query.toLowerCase()),
);

export const getSortedphones = () => {
  let prevType = null;

  return (type, phones) => {
    if (prevType === type) {
      return phones;
    }

    prevType = type;

    const phonesCopy = JSON.parse(JSON.stringify(phones));

    return (type === SORT_BY_ALPHA)
      ? sortByNewest(phonesCopy)
      : sortByAlpha(phonesCopy);
  };
};
