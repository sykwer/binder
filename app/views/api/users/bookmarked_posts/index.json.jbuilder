json.posts @posts do |post|
  json.uuid post.uuid
  json.title post.title
  json.content post.content
  json.bookImageUrl post.book_image_url
  json.bookTitle post.book_title
  json.bookAuthor post.book_author
  json.bookPublisher post.book_publisher
  json.affiliateLink post.affiliate_link
  json.publishedAt post.first_published_at.present? ? format_date(post.first_published_at) : format_date(Time.zone.now)
  json.userImageUrl post.user.image_url
  json.userName post.user.name
  json.userUserName post.user.username
  json.userBio post.user.bio
  json.isBookmarked current_user.present? ? post.bookmarked_by?(current_user) : false
  json.bookmarkedCount post.bookmarked_count
  json.clappedCount post.claps_count
  json.clappedCountByMe current_user.present? ? current_user.clap_count_of(post) : 0
  json.isMyPost current_user == post.user
end

json.oldestUnixTime @oldest_unixtime
