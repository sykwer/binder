json.followers @followers do |follower|
  json.id follower.id
  json.image follower.image_url
  json.name follower.name
  json.bio follower.bio
  json.isFollowing follower.followed_by?(@observer)
end
