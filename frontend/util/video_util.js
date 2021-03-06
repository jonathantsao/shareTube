export const getVideos = (filter, userId) => {
  if (!userId) {
    return $.ajax({
      method: 'GET',
      url: '/api/videos',
      data: { video: { filter } },
    });
  } else {
    return $.ajax({
      method: 'GET',
      url: `/api/videos`,
      data: { video: { filter, user_id: userId } },
    });
  }
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

export const searchBar = (search_query) => {
  return $.ajax({
    method: "GET",
    url: "/api/videos/search",
    data: { video: { search_query } },
  });
};
