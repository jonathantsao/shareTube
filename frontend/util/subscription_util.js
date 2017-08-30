export const subscribe = (currentUserId, subId) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${currentUserId}/subscribe`,
    data: { user: {
      subscribed_id: subId,
    } },
  });
};

export const unsubscribe = (currentUserId, subId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${currentUserId}/unsubscribe`,
    data: { user: {
      subscribed_id: subId,
    } },
  });
};
