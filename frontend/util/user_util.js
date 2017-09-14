export const getChannel = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`,
  });
};
