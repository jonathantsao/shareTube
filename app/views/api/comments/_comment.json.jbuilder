json.extract!(comment, :id, :body, :video_id, :created_at, :likes)


json.user do
  json.partial! "/api/users/user", user: comment.user
end
