json.notifications @notifications do |n|
  json.id n.id
  json.type n.notificatable_type
  json.isRead n.is_read
  json.updatedAt format_date(n.updated_at)

  case n.notificatable_type
  when "Follow"
    json.sourceUserName n.notificatable.source.name
    json.sourceUserUsername n.notificatable.source.username
    json.sourceUserImageUrl n.notificatable.source.image_url
  when "Clap"
    json.sourceUserName n.notificatable.user.name
    json.sourceUserUsername n.notificatable.user.username
    json.sourceUserImageUrl n.notificatable.user.image_url
    json.destinationPostUuid n.notificatable.post.uuid
    json.clapsCount n.notificatable.count
  when "Bookmark"
    json.sourceUserName n.notificatable.user.name
    json.sourceUserUsername n.notificatable.user.username
    json.sourceUserImageUrl n.notificatable.user.image_url
    json.destinationPostUuid n.notificatable.post.uuid
  end
end

json.oldestUnixtime @oldest_unixtime
