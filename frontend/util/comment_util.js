export const getComments = (videoId) => {
  return $.ajax({
    method: "GET",
    url: `/api/videos/${videoId}/comments`,
  });
};

export const createComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: `/api/videos/${comment.video_id}/comments`,
    data: { comment }
  });
};

export const deleteComment = (comment) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${comment.id}`,
  });
};

export const editComment = (comment) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/comments/${comment.id}`,
    data: { comment }
  });
};
