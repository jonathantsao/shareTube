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

export const slidesCount = (width) => {
  let count;
  if (width > 1500) {
    count = 6;
  } else if (width > 1350 && width <= 1500) {
    count = 5;
  } else if (width > 1120 && width <= 1350) {
    count = 4;
  } else if (width > 910 && width <= 1120) {
    count = 3;
  } else if (width > 720 && width <= 910) {
    count = 2;
  } else {
    count = 1;
  }
  return count;
};
