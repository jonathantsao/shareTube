export const likeItem = (like) => {
  return $.ajax({
    method: "POST",
    url: "/api/likes",
    data: { like }
  });
};

export const unlikeItem = (likeId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likes/${likeId}`,
  });
};
