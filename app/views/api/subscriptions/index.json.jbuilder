json.subscriptions @subscriptions.each do |sub|
  json.extract!(sub, :id, :username)
  json.image_url sub.image.url(:small)
end
