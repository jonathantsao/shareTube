json.videos_list do
  @videos.each do |video|
    json.set!(video.id) do
      json.partial! "/api/videos/video", video: video
    end
  end
end

json.video_ids @video_ids
