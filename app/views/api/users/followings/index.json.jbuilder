json.followings @followings do |following|
  json.id following.id
  json.image following.image_url
  json.name following.name
  json.bio following.name
  json.isFollowing following.followed_by?(@observer)
end
