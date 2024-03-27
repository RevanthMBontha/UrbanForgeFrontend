export const getCurrentTime = () => {
  let today = new Date();
  let hours = today.getHours();
  let hoursString = String(hours);
  let mins = today.getMinutes();
  let minsString = String(mins);
  let dayState = 'AM';
  if (hours >= 12) {
    dayState = 'PM';
  }
  if (hours > 12) {
    hoursString = String(hours - 12);
  }
  if (Number(hoursString) < 10) hoursString = '0' + hoursString;
  if (mins < 10) minsString = '0' + minsString;
  let timeString = `${hoursString}:${minsString} ${dayState}`;
  return timeString;
};
