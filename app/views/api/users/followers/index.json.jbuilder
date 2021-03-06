json.followers @followers do |follower|
  json.id follower.id
  json.image follower.image_url
  json.name follower.name
  json.username follower.username
  json.bio follower.bio
  json.isFollowing user_signed_in? ? follower.followed_by?(current_user) : false
end
