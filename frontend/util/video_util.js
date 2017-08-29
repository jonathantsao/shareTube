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

export const addView = (videoId) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/videos/${videoId}`,
    data: { video: { add_view: true } },
  });
};

export const searchVideos = (filter, search_query) => {
  return $.ajax({
    method: "GET",
    url: `/api/videos`,
    data: { video: { filter, search_query } }
  });
};
