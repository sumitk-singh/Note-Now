const dateOnNote = (noteDate) => {
  const dateArray = noteDate.split(" ");
  const [day, month, date, year, time, ...metaDate] = dateArray;
  const formatedDate = `${day} ${date} ${month} ${year}`;
  return formatedDate;
};

export {dateOnNote};
