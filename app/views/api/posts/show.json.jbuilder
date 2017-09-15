json.post do
  json.uuid @post.uuid
  json.content @post.content
  json.bookImageUrl @post.book_image_url
  json.bookTitle @post.book_title
  json.bookAuthor @post.book_author
  json.bookPublisher @post.book_publisher
  json.affiliateLink @post.affiliate_link
  json.publishedAt @post.first_published_at.present? ? format_date(@post.first_published_at) : format_date(Time.zone.now)
end
