export const getVideos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/videos',
  });
};
