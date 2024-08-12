export const formatTime = (d) => {
  const date = new Date(d);
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // the hour '0' should be '12'
  return `${hours}:${minutes} ${ampm}`;
};
