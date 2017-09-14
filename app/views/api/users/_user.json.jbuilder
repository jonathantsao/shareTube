json.extract!(user, :id, :username, :likes)

json.image user.image.url(:small)

json.set! :subscribed_channels, user.subscribed_channel_ids
json.set! :subscribers, user.subscriber_ids
json.subscriptions do
  json.array! user.subscriptions_to.each do |sub|
    json.extract! sub, :id, :subscriber_id, :subscribed_id
  end
end

json.videos user.video_ids
