export const getVideos = (filter) => {
  return $.ajax({
    method: 'GET',
    url: '/api/videos',
    data: { video: { filter } },
  });
};

export const createVideo = (formData) => {
  return $.ajax({
    method: "POST",
    url: '/api/videos',
    contentType: false,
    processData: false,
    data: formData,
  });
};

export const getVideo = (videoId) => {
  return $.ajax({
    method: "GET",
    url: `/api/videos/${videoId}`,
  });
};
