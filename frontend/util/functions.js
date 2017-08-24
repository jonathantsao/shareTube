export const viewsParse = (int) => {
  const result = [];
  while (int >= 1) {
    if (int / 1000 >= 1) {
      result.unshift(int % 1000);
    } else {
      result.unshift(int);
    }
    int = Math.floor(int / 1000);
  }
  return result.join(",");
};

export const timeParse = (time) => {
  const upload = new Date(time);
  const now = new Date(Date.now());
  let diff;

  if (now.getFullYear() - upload.getFullYear() > 0) {
    diff = now.getFullYear() - upload.getFullYear();
    return diff > 1 ? "${diff} years" : "1 year";
  } else if (now.getMonth() - upload.getMonth() > 0) {
    diff = now.getMonth() - upload.getMonth();
    return diff > 1 ? "${diff} months" : "1 month";
  } else if (now.getDate() - upload.getDate() > 0) {
    diff = now.getDate() - upload.getDate();
    return diff > 1 ? "${diff} days" : "1 day";
  } else if (now.getHours() - upload.getHours() > 0) {
    diff = now.getHours() - upload.getHours();
    return diff > 1 ? `${diff} hours` : "1 hour";
  } else if (now.getMinutes() - upload.getMinutes() > 0) {
    diff = now.getMinutes() - upload.getMinutes();
    return diff > 1 ? `${diff} minutes` : "1 minute";
  } else {
    return "few seconds";
  }
};
