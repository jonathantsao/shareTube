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

// export const timeParse = (time) => {
//   const upload = new Date(time);
//   const now = new Date(Date.now());
//   if (now.getFullYear() - upload.getFullYear() > 0) {
//     return ""
//   }
// };
