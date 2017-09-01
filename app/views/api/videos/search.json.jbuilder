json.titles do
  json.array! @videos.each do |video|
    json.extract! video, :title
  end
end
