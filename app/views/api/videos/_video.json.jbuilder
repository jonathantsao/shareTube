json.id video.id
json.title video.title
json.description video.description
json.views video.views
json.user do
  json.partial! '/api/users/user', user: video.user
end
json.user_id video.user_id
json.video_url asset_path(video.video.url)
json.thumbnail_url asset_path(video.video.url(:thumb))
json.upload_time video.created_at
json.likes video.likes
