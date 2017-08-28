export const likeItem = (like) => {
  return $.ajax({
    method: "POST",
    url: "/api/likes",
    data: { like }
  });
};
