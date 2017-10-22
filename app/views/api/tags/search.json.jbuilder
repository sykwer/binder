json.tags @tags do |tag|
  json.id tag.id
  json.name tag.name
  json.attachedCount tag.attached_count
end
