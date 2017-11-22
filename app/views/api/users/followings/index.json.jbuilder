json.followings @followings do |following|
  json.id following.id
  json.image following.image_url
  json.name following.name
  json.username following.username
  json.bio following.bio
  json.isFollowing user_signed_in? ? following.followed_by?(current_user) : false
end
