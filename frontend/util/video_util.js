export const getVideos = (filter) => {
  return $.ajax({
    method: 'GET',
    url: '/api/videos',
    data: { video: { filter } },
  });
};

export const createVideo = (video) => {
  return $.ajax({
    method: "POST",
    url: '/api/videos',
    contentType: false,
    processData: false,
    data: { video },
  });
};
