json.subscriptions do
  json.partial! "/api/subscriptions/subscription", subscriptions: @subscriptions
end

json.subscribers do
  json.partial! "/api/subscriptions/subscription", subscriptions: @new_subscribers
end
