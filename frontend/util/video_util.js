export const getVideos = (filter) => {
  return $.ajax({
    method: 'GET',
    url: '/api/videos',
    data: { video: { filter } },
  });
};
