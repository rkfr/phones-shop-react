export const sortByAlpha = (data) => data.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  return (nameA < nameB) ? -1 : 1;
});

export const sortByNewest = (data) => data.sort((a, b) => a.age - b.age);
