json.extract!(user, :id, :username, :likes)

json.image user.image.url(:small)
